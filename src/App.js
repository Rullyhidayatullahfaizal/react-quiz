import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Start from "./pages/Start";
import { Question } from "./pages/Question";
import Review from "./pages/Review";
import Score from "./pages/Score";

function App() {
  const [display, setDisplay] = useState("start");
  const [score, setScore] = useState(0);
  const [index, setIndex] = useState(0);
  const [answer, setAnswer] = useState({});
  const handleNext = () => {
    setIndex((index) => index + 1);
  };
  const handlePrev = () => {
    setIndex((index) => index - 1);
  };
  const handleStart = () => {
    setIndex(0);
    setAnswer({});
    setDisplay("start");
  };
  return (
    <>
      <div className="flex h-screen flex-col">
        <Header></Header>
        <div className="w-full bg-navy flex-1">
          {display === "start" && <Start setDisplay={setDisplay} />}
          {display === "question" && (
            <>
              <Question
                setDisplay={setDisplay}
                setScore={setScore}
                index={index}
                answer={answer}
                setAnswer={setAnswer}
                handleNext={handleNext}
                handlePrev={handlePrev}
              />
            </>
          )}
          {display === "score" && (
            <Score setDisplay={setDisplay} score={score} setIndex={setIndex} />
          )}
          {display === "review" && (
            <Review
              answer={answer}
              index={index}
              setDisplay={setDisplay}
              handleNext={handleNext}
              handlePrev={handlePrev}
            />
          )}
        </div>
        <Footer display={display} handleStart={handleStart} />
      </div>
    </>
  );
}

export default App;
