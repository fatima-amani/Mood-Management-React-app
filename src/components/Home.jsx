import MoodAnalytics from "./MoodAnalytics";
import MoodList from "./MoodList";
import { useState } from "react";

export default function Home() {
  let [tab, setTab] = useState("moodListTab");
  const [list, setList] = useState([]);

  let setMoodList = (newList) => {
    // localStorage.setItem("list",JSON.stringify(newList));
    setList(newList);
  } 

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="mt-4 text-4xl font-bold text-center text-blue-800">Mood Management System</h1>
      <div className="flex items-center justify-center w-full mt-5 bg-blue-300">
        <button className={`w-1/2 px-6 py-2  text-black font-semibold rounded-lg hover:bg-blue-100 transition ${tab === "moodListTab" ? "border-b-4 border-blue-700" : ""} `} onClick={() => setTab("moodListTab")}>Mood List Tab</button>
        <button className={`w-1/2 px-6 py-2  text-black font-semibold rounded-lg hover:bg-blue-100 transition ${tab === "moodAnalyticsTab" ? "border-b-4 border-blue-700" : ""} `}onClick={() => setTab("moodAnalyticsTab")}>
          Mood Analytics Tab
        </button>
      </div>

      {tab === "moodListTab" ? (
        <MoodList list={list} setList={setMoodList} />
      ) : (
        <MoodAnalytics list={list}/>
      )}
    </div>
  );
}