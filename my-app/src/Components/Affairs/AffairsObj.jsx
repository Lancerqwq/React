import React from 'react'
import affairsStyle from './Affairs.css'

class AffairsObj extends React.Component {

    objListItems () {
        const {todo}= this.props;
        return Object.entries(todo).map((item,i)=>{
            return <li key={item[0]} className={item[1].isDone ? 'done' : ''}> {item[1].title}</li>
        })
    }
    picList () {
        const {pic} = this.props;
        return pic.map((item, i) => <img key={i} src={item} />)
    }
    render() { 
        return (
            <div>
            {this.picList()}
            <ol>
            {this.objListItems()}
            </ol>
            </div>
        );
    }
}
 
export default AffairsObj;