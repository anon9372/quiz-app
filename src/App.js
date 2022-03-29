
import './App.css';
import React, {useState, useEffect} from "react"
import Start from './components/Start';
import Question from './components/Question';
import quiz from "../src/data/quiz.json"
import End from './components/End';

function App() {

  const [step, setStep] = useState(1);
  const [activeQuestion, setActiveQuestion] = useState(0)
  const [answers, setAnswers] = useState([])

  const quizStartHandler =()=>{
    setStep(2)
  }
  return (
    <div className="App">
      {step === 1 && <Start onQuizStart={quizStartHandler}/>}
      {step === 2 && <Question
        questions={quiz.questions[activeQuestion]}
        onAnswerUpdate={setAnswers}
        numberOfQuestions={quiz.questions.length}
        activeQuestion={activeQuestion}
        onSetActiveQuestion={setActiveQuestion}
        onSetStep={setStep}
      />}

      {step ===3 && <End />}
    </div>
  );
}

export default App;
