import React, { Component } from 'react'
import Toggle from './Toggle';
import './styles.css';

class GDPR extends Component {
  render () {
    const items = this.props.config.map(item => (
      <li className="item" key={item.id}>
        <div className="text">
          {item.text} &nbsp;
          {item.link && <a href={item.link} onClick={(event) => {event.preventDefault();this.props.linkHanlder(item.link)}}>{item.linkText}</a>}
        </div>
        <Toggle id={item.id} checked={item.checked} locked={item.locked} toggle={this.props.toggleHandler}/>
      </li>
    ));
    return (
      <ul className="GDPR">
        {items}
      </ul>  
    )
  }
}

export default GDPR;
