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
        <>
            <h3>Add a mood</h3>
            <form onSubmit={addMood}>
                <select
                    name="moodText"
                    value={moodText}
                    onChange={(e) => setMoodText(e.target.value)}
                >
                    <option value="">Select a mood</option>
                    <option value="happy">{moodMap['happy']}</option>
                    <option value="sad">{moodMap['sad']}</option>
                    <option value="tensed">{moodMap['tensed']}</option>
                </select>
                <br />
                <input type="submit" value="Add Mood" />
            </form>
        </>
    );
}
