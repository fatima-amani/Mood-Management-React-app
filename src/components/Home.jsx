import MoodAnlytics from "./MoodAnalytics";
import MoodList from "./MoodList";
import { useState } from "react";

export default function Home() {
  let [tab, setTab] = useState();
  const [list, setList] = useState([]);

  let setMoodList = (newList) => {
    // localStorage.setItem("list",JSON.stringify(newList));
    setList(newList);
  } 

  return (
    <>
      <h1>Mood Management System</h1>
      <div>
        <button onClick={() => setTab("moodListTab")}>Mood List Tab</button>
        <button onClick={() => setTab("moodAnalyticsTab")}>
          Mood Analytics Tab
        </button>
      </div>

      {tab === "moodListTab" ? (
        <MoodList list={list} setList={setMoodList} />
      ) : (
        <MoodAnalytics />
      )}
    </>
  );
}
