import React from 'react'
import './style.css';

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: props.checked || false
    }
    this.toggle = this.toggle.bind(this)
  }
  toggle () {
    if (this.props.locked) {
      return
    }
    this.props.toggle(this.props.id, !this.state.checked)
    this.setState((prevState) => ({
      checked: !prevState.checked
    }))
  }
  render () {
    return (
      <div className={"toggle-button " + (this.state.checked ? "checked" : "") + " " + (this.props.locked ? "locked" : "")} onClick={this.toggle}>
        <div className="toggle-button-inner">
          <span className="handle" />
        </div>
        { this.props.text && <p className="text">{this.props.text}</p> }
      </div>
    )
  }
}
export default Toggle;
