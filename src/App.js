import "./App.css";
import Question from "./components/Question";
import Quiz from "./components/Quiz";
import Quizzes from "./components/Quizzes";
import Account from "./components/Account";
import QuizPlayer from "./components/QuizPlayer";

function App() {
  return (
    <>
      <div>
        <Question />
        <Quiz />
        <Quizzes />
        <Account />
        <QuizPlayer />
      </div>

      <h1>test</h1>
    </>
  );
}

export default App;
