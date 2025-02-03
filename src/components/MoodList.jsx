import { useState } from "react";
import AddMoodForm from "./AddMoodForm";
import Mood from "./Mood";

export default function MoodList({ list, setList }) {
  let [history, setHistory] = useState([]);

  let clearList = () => {
    setHistory((prevHistory) => [...prevHistory, list]);
    setList([]);
  };

  let handleUndo = () => {
    let currMood = history[history.length - 1];
    setHistory((prevHistory) => prevHistory.slice(0, -1));
    setList((prevList) => [...prevList, currMood]);
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg h-screen">
      <h1 className="text-3xl font-bold text-center text-blue-800 mb-6">Mood List</h1>
      <ul className="space-y-4">
        {list.length > 0 &&
          list.map((item, index) => (
            <li key={index} className="border-b-2 pb-4">
              <Mood
                index={index}
                mood={item}
                setMoodList={setList}
                setHistory={setHistory}
              />
            </li>
          ))}
      </ul>
      <div className="flex space-x-4 justify-center mt-6">
        {list.length > 0 && (
          <button
            className="px-6 py-2 border-2 border-red-500 text-red-500 font-semibold rounded-lg hover:bg-red-500 hover:text-white transition"
            onClick={clearList}
          >
            Clear List
          </button>
        )}
        {history.length > 0 && (
          <button
            className="px-6 py-2 border-2 border-gray-500 text-gray-500 font-semibold rounded-lg hover:bg-gray-500 hover:text-white transition"
            onClick={handleUndo}
          >
            Undo
          </button>
        )}
      </div>

      <div className="mt-6">
        <AddMoodForm setList={setList} />
      </div>
    </div>
  );
}
