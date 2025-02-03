export default function Mood({ index, mood, setMoodList, setHistory }) {

    const deleteMood = () => {
        setHistory(oldHistory => [...oldHistory, mood]);
        setMoodList(prevList => prevList.filter((_, ind) => ind !== index));
    };
    const moodMap = {
        happy: "😊",
        sad: "😒",
        tensed: "😢",
    };

    return (
        <div className="flex items-center justify-between border-b-2 pb-4 mb-4 hover:bg-gray-100 transition-all">
            <div className="flex items-center space-x-4">
                <span className="text-3xl">{moodMap[mood.moodText]}</span>
                <div>
                    <span className="text-lg font-semibold text-blue-800">{mood.moodText}</span>
                    <p className="text-sm text-gray-500">{mood.time}</p>
                </div>
            </div>
            <button
                onClick={deleteMood}
                className="px-4 py-2 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-700 transition"
            >
                Delete
            </button>
        </div>
    );
}
