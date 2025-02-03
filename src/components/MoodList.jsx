import { useState } from "react";
import AddMoodForm from "./AddMoodForm";
import Mood from "./Mood";

export default function MoodList({list,setList}) {
    
    let [history, setHistory] = useState([]);
    let clearList = () => {
        setHistory(prevHistory => [...prevHistory, list]);
        setList([]);
    }

    let handleUndo = () => {
        let currMood = history[history.length-1];
        setHistory(prevHistory => prevHistory.slice(0,-1));
        setList(prevList => [...prevList, currMood]);
    }

    return (
        <>
            <h1>Mood List</h1>
            <ul>
                { list.length>0 && list.map((item, index) => (
                    <li key={index}>
                        <Mood index={index} mood={item} setMoodList={setList} setHistory={setHistory}/>
                    </li>
                ))}
            </ul>
            {list.length>0 && <button onClick={clearList}>Clear </button> }
            {history.length>0 && <button onClick={handleUndo}>Undo</button>}
            <AddMoodForm setList={setList} />
        </>
    );
}
