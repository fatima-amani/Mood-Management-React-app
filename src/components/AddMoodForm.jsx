import { useState } from "react";

export default function AddMoodForm({ setList }) {
    let [moodText, setMoodText] = useState("");

    const moodMap = {
        happy: "😊",
        sad: "😒",
        tensed: "😢",
    };

    const addMood = (e) => {
        e.preventDefault();

        if (!moodText) return;

        const newMood = {
            emoji: moodMap[moodText],
            moodText: moodText,
            time: new Date().toLocaleString(),
        };

        setList(prevList => [...prevList, newMood]);
        setMoodText(""); 
    };

    return (
        <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-center text-blue-800 mb-6">Add a Mood</h3>
            <form onSubmit={addMood} className="space-y-4">
                {/* Select Dropdown */}
                <div>
                    <label htmlFor="moodText" className="block text-lg font-medium text-gray-700 mb-2">
                        Choose Your Mood
                    </label>
                    <select
                        name="moodText"
                        value={moodText}
                        onChange={(e) => setMoodText(e.target.value)}
                        className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                    >
                        <option value="">Select a mood</option>
                        <option value="happy">{moodMap['happy']}</option>
                        <option value="sad">{moodMap['sad']}</option>
                        <option value="tensed">{moodMap['tensed']}</option>
                    </select>
                </div>

                {/* Add Mood Button */}
                <div className="flex justify-center">
                    <button
                        type="submit"
                        className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
                    >
                        Add Mood
                    </button>
                </div>
            </form>
        </div>
    );
}
