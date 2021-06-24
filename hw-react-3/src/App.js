import React,{useState, useEffect} from 'react';
import './App.css';
import SimpleModal from './Components/QutzTest/Modal';
import AnswerTable from './Components/QutzTest/AnswerTable';
import getApi from './api/api'

function App() {
const [questions, setQuestions] = useState([])
const [answers, setAnswers] = useState([])
const [values, setValues] = useState([])

const handleChangeAnswers = (elem) => {
  setAnswers(elem);
}
const handleChangeValues = (elem) => {
  setValues(elem);
}

useEffect(() => {
  getApi().then(data=> setQuestions(data.results));
}, [])

return (
    <div className="App">
      <AnswerTable questions={questions} value={values}/>
      <SimpleModal questions={questions} answers={answers}  changeAnswers={handleChangeAnswers} changeValues={handleChangeValues}/>
    </div>
  );
}

export default App;
