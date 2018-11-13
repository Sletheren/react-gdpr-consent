import React from 'react';
import { render } from 'react-dom';
import './style.css';

import GDPR from '../../src';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      age: true,
      terms: false,
      privacy: true,
      newsletter: true
    }
    this.linkHanlder = this.linkHanlder.bind(this);
    this.toggleHandler = this.toggleHandler.bind(this);
  }

  linkHanlder (link) {
    window.open(link, '_blank');
  }
  toggleHandler (id, value) {
    console.log(`${id} is now: ${value}`)
    this.setState({
      [id]: value
    })
  }
  render() {
    const config = [
      {
        id: 'age',
        text: "I'm legally old enough to subscribe to this service",
        checked: true,
        locked: true
      },
      {
        id: 'terms',
        text: "As a future client, I agree to the following",
        checked: false,
        locked: true,
        link: "http://www.example.com/terms.html",
        linkText: "terms & conditions"
      },
      {
        id: 'privacy',
        text: "As a future client, I agree to the following",
        checked: true,
        locked: false,
        link: "http://www.example.com/privacy.html",
        linkText: "Privacy & policy"
      },
      {
        id: 'newsletter',
        text: "I agree to receive promotional offers, emails, SMS and marketing related stuff",
        checked: true,
        locked: false,
      }
    ]
    return (
      <div className="container">
        <h2>Examples</h2>
        <hr />
        <ul>
          <li>Age consent: {this.state.age ? 'checked': 'unchecked'}</li>
          <li>Terms consent: {this.state.terms ? 'checked': 'unchecked'}</li>
          <li>Privacy consent: {this.state.privacy ? 'checked': 'unchecked'}</li>
          <li>newsletter consent: {this.state.newsletter ? 'checked': 'unchecked'}</li>
        </ul>
        <hr />
        <GDPR config={config} toggleHandler={this.toggleHandler} linkHanlder={this.linkHanlder}/>
      </div>
    )
  }
};
render(<App />, document.getElementById("root"));
