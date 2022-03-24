import './App.css';
import Question from "./components/Question"
import Quiz from "./components/Quiz"
import Quizzes from "./components/Quizzes"
import Account from "./components/Account"
import Quiz_player from "./components/Quiz_player"

function App() {
  return (
    <div>
      <Question />
      <Quiz />
      <Quizzes />
      <Account />
      <Quiz_player />
    </div>
  )
}

export default App;
