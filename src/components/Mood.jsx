export default function Mood({index, mood, setMoodList,setHistory }) {
    
    const deleteMood = () => {
        setHistory(oldHistory => [...oldHistory, mood])
        setMoodList(prevList => prevList.filter((_, ind) => ind !== index));
    };

    return (
        <div>
            <span>{mood.moodEmoji} - </span>
            <span>{mood.moodText} </span>
            <span>({mood.time}) </span>
            <button onClick={deleteMood}>Delete Mood</button>
        </div>
    );
}
