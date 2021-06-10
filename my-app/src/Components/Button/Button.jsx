import React from 'react';
import btnStyle from './Button.css'

class Button extends React.Component {
    btnItems () {
        const {data = ['default']} = this.props;
        return [...data].map((item, i) => {
            return <button key={i} className={`btn-${item}`}> {item} </button>
        });
    }
    render() {
        return (
          <div>
            {this.btnItems()}
          </div>
        );
    }
}   

export default Button