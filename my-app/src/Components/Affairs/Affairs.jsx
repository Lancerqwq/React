import React from 'react'
import affairsStyle from './Affairs.css'

class Affair extends React.Component {

    arrayListItems () {
        const {todo}= this.props;
        return todo.map((item,i)=>{
            return <li key={i} className={item.isDone ? 'done' : ''}> {item.title}</li>
        })
    }
 
    render() { 
        return (
            <div>
                <img src='https://thumbs.dreamstime.com/b/vector-icon-page-calendar-day-week-monday-rectangle-empty-space-illustration-flat-style-date-days-list-month-to-do-216995872.jpg' />
            <ol>
            {this.arrayListItems()}
            </ol>
            </div>
        );
    }
}
 
export default Affair;