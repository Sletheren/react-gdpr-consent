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
    const isChecked = this.state.checked;
    const isLocked = this.props.locked;
    return (
      <div className="toggle" onClick={() => this.toggle()}>
        <label className={"toggler toggler-small" + (isChecked ? " checked" : "") + (isLocked ? " locked" : "")} >
          <span className="switch-left">Yes</span>
          <span className="switch-right">No</span>
        </label>
      </div>
    )
  }
}
export default Toggle;
