import './App.css';
import Affair from './Components/Affairs/Affairs';
import AffairsObj from './Components/Affairs/AffairsObj';
import Button from './Components/Button/Button';

const arr = ['brown', 'green', 'orange', 'blue', 'crimson']
const todoArr = [
  {title: 'Learn React', isDone: false},
  {title: 'Learn React', isDone: false},
  {title: 'Learn React', isDone: false},
  {title: 'Learn React', isDone: false},
  {title: 'Learn React', isDone: false},
  {title: 'Learn React', isDone: true},
  {title: 'Learn React', isDone: true},
  {title: 'Learn React', isDone: true},
  {title: 'Learn React', isDone: false},
]
const picDayOfWeek = ['https://thumbs.dreamstime.com/b/vector-icon-page-calendar-day-week-monday-rectangle-empty-space-illustration-flat-style-date-days-list-month-to-do-216995872.jpg']
const todoObj = {
  1: {title: 'Learn React', isDone: true},
  2: {title: 'Learn React', isDone: true},
  3: {title: 'Learn React', isDone: true},
  4: {title: 'Learn React', isDone: false},
  5: {title: 'Learn React', isDone: false},
  6: {title: 'Learn React', isDone: true},
  7: {title: 'Learn React', isDone: false},
  8: {title: 'Learn React', isDone: false},
  9: {title: 'Learn React', isDone: false},
}

function HelloUser(props) {
  const {firsName, LastName} = props;
  return `${firsName} ${LastName}`;
}
const  obj = {
  firsName: 'Jhon',
  LastName: 'Smith'
}
function App() {
  return (
    <div>
      <HelloUser {...obj}/>
      <Button data={arr}/>
      <Button/>
      <Affair todo={todoArr}/>
      <AffairsObj pic={picDayOfWeek} todo={todoObj}/>
    </div>
  );
}

export default App;
