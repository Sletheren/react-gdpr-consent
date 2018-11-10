import React from 'react';
import { render } from 'react-dom';
import GDPR from '../../src';
const App = () => {
    const config = [{
        id: 'age',
        text: "I'm 18 years old or older",
        checked: true,
        locked: true
      },
      {
        id: 'terms',
        text: "I accept",
        checked: true,
        locked: true,
        link: "http://www.example.com/terms.html",
        linkText: "terms & conditions"
      },
      {
        id: 'privacy',
        text: "I accept",
        checked: true,
        locked: true,
        link: "http://www.example.com/privacy.html",
        linkText: "Privacy & policy"
      },
      {
        id: 'newsletter',
        text: "I want to receive newsletters and updates by email",
        checked: false,
        locked: false
      }
    ]
    const linkHanlder = (link) => {
      window.open(link, '_blank');
    }
    const toggleHandler = (id, value) => {
      console.log(id, value)
    }
    return (
      <GDPR config={config} toggleHandler={toggleHandler} linkHanlder={linkHanlder}/>
    )
};
render(<App />, document.getElementById("root"));
