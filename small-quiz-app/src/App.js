import "./App.css";
import { questions } from "./data";
import { useEffect, useState } from "react";
import { Score } from "./components/Score";

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [myScore, setMyScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const [answers, setAnswers] = useState([
    { id: 0, ans: "" },
    { id: 1, ans: "" },
    { id: 2, ans: "" },
    { id: 3, ans: "" },
    { id: 4, ans: "" },
  ]);
  const [userAnsInput, setUserAnsInput] = useState("");
  useEffect(() => {
    setAnswers(
      answers.map((item) =>
        item.id === currentQuestion ? { ...item, ans: userAnsInput } : item
      )
    );
  }, [userAnsInput]);
  const findScore = () => {
    let score = 0;
    for (let i in answers) {
      if (answers[i].ans === questions[i].ans) {
        score += 1;
      }
    }
    setMyScore(score);
    setShowScore(true);
  };
  return (
    <div className="App">
      <div className="ans-question-box">
        <div className="review-ans">
          <img src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/000000/external-like-web-flaticons-lineal-color-flat-icons-2.png" />
          <div style={{ fontWeight: 500, fontSize: "1.3rem" }}>
            Review ans here
          </div>
          {answers.map((item) => {
            return (
              <div key={item.id}>
                {item.ans.length > 0 && (
                  <div>
                    <div>
                      <span
                        style={{
                          fontSize: "1.2rem",
                          fontWeight: 600,
                          marginRight: "1rem",
                        }}
                      >
                        {item.id + 1}#
                      </span>{" "}
                      <span>{item.ans}</span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
        <div className="all-questions">
          {showScore ? (
            <Score myScore={myScore} />
          ) : (
            <div>
              <div>
                <img src="https://img.icons8.com/doodle/48/000000/question-mark--v1.png" />
              </div>
              <div className="button-heading">
                {currentQuestion > 0 ? (
                  <img
                    src="https://img.icons8.com/flat-round/64/000000/left--v1.png"
                    className="arrow-button"
                    onClick={() => setCurrentQuestion((prev) => (prev -= 1))}
                  />
                ) : (
                  <img
                    src="https://img.icons8.com/flat-round/64/000000/left--v1.png"
                    style={{ visibility: "hidden" }}
                    onClick={() => setCurrentQuestion((prev) => (prev -= 1))}
                  />
                )}

                <p style={{ fontWeight: 500, fontSize: "1.3rem" }}>
                  Attempt the quiz here
                </p>
                {currentQuestion < 4 ? (
                  <img
                    src="https://img.icons8.com/flat-round/64/000000/arrow--v1.png"
                    className="arrow-button"
                    onClick={() => setCurrentQuestion((prev) => (prev += 1))}
                  />
                ) : (
                  <img
                    src="https://img.icons8.com/flat-round/64/000000/arrow--v1.png"
                    style={{ visibility: "hidden" }}
                    onClick={() => setCurrentQuestion((prev) => (prev += 1))}
                  />
                )}
              </div>
              <div>
                <h2>Let's see how well do you know Mohit?</h2>
                <h2>
                  Question{currentQuestion + 1}{" "}
                  {questions[currentQuestion].ques}
                </h2>
                {questions[currentQuestion].options.map((item) => {
                  return (
                    <label key={item}>
                      <input
                        type="radio"
                        name={currentQuestion}
                        value={item}
                        onChange={(e) => setUserAnsInput(e.target.value)}
                      />
                      {item}
                    </label>
                  );
                })}
              </div>
              {currentQuestion === 4 && (
                <button
                  style={{
                    backgroundColor: "red",
                    color: "white",
                    border: "transparent",
                    height: "2rem",
                    width: "4rem",
                    position: "absolute",
                    bottom: "1rem",
                    right: "1rem",
                  }}
                  onClick={() => findScore()}
                >
                  Submit
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
