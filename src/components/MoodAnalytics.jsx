import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import { getRelativePosition } from 'chart.js/helpers';

export default function MoodAnalytics({ list }) {
    const chartRef = useRef(null);
    let chartInstance = useRef(null);

    useEffect(() => {
        if (!chartRef.current) return;

        if (chartInstance.current) {
            chartInstance.current.destroy();
        }

        if (list.length === 0) return;

        const moodCount = list.reduce((acc, mood) => {
            acc[mood.moodText] = (acc[mood.moodText] || 0) + 1;
            return acc;
        }, {});

        const data = {
            labels: Object.keys(moodCount),
            datasets: [
                {
                    data: Object.values(moodCount),
                    backgroundColor: ['#4CAF50', '#FFEB3B', '#F44336'],
                    hoverOffset: 6,
                },
            ],
        };

        const ctx = chartRef.current.getContext('2d');
        chartInstance.current = new Chart(ctx, {
            type: 'doughnut',
            data: data,
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'bottom',
                    },
                    tooltip: {
                        callbacks: {
                            label: (tooltipItem) => {
                                const total = Object.values(moodCount).reduce((a, b) => a + b, 0);
                                const value = tooltipItem.raw;
                                const percentage = ((value / total) * 100).toFixed(2);
                                return `${tooltipItem.label}: ${percentage}%`;
                            },
                        },
                    },
                },
            },
        });
    }, [list]);

    return (
        <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-center text-blue-800 mb-4">Mood Analytics</h2>

            {list.length === 0 ? (
                <p className="text-center text-gray-500">No moods to display. Add some moods to view the chart.</p>
            ) : (
                <div className="relative w-full h-80">
                    <canvas ref={chartRef}></canvas>
                </div>
            )}
        </div>
    );
}