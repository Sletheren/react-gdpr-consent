# REACT-GDPR-CONSENT [![Version](https://img.shields.io/npm/v/react-gdpr-consent.svg)](https://www.npmjs.com/package/react-gdpr-consent)

A React component to make it easy to implement the General Data Protection Regulation (GDPR) into your React App
## Online Demo

![Screenshots](https://raw.githubusercontent.com/Sletheren/react-gdpr-consent/master/examples/src/example.gif)

You can check out this little demo to get the feel of it: [Online demo](https://sletheren.github.io/react-gdpr-consent/)

## Get started

It's very easy to use the tool, follow the instructions

### Add the package

Install the package using npm

```
npm i react-gdpr-consent 
```

### Import the package into your react app

```
import GDPR from 'react-gdpr-consent'
```

### Pass a configuration array as a prop `config` to the GDPR component
Example of the Configuraiton array:
````js
const config = [
      { id: 'age', text: "I'm 18 years old or older", checked: true, locked: true },
      { id: 'terms', text: "I accept", checked: true, locked: true, link: "http://www.example.com/terms.html", linkText: "terms & conditions"},
      { id: 'privacy', text: "I accept", checked: true, locked: true, link: "http://www.example.com/privacy.html", linkText: "Privacy & policy" },
      { id: 'newsletter', text: "I want to receive newsletters and updates by email", checked: false, locked: false }
]
````

Then pass it to the GDPR component:
```
<GDPR config={config} toggleHandler={toggleHandler} linkHanlder={linkHanlder}/>
```

Explanation of the different properties of the configuration array:

| Name         | Type | Description |
| ------------ | ----------- | ----------- |
| id | String | Unique string that defines the element |
| text | String | The text that's showed before the toggle |
| checked | Boolean | If the toggle is checked initially (default: false) |
| locked | Boolean | If the toggle is disabled or not (default: false) |
| link | string (OPTIONAL) | If specified the text can be clicked as a link |
| linkText | string (OPTIONAL) | the text that will be clicked |


### Pass `ToggleHanlder` and `linkHandler`:

The two functions are mendatory to handle the toggle of the items and the link action handling

Example:
````js
const linkHanlder = (link) => {
  window.open(link, '_blank');
}
const toggleHandler = (id, value) => {
  console.log(id, value)
}
return (
    <GDPR config={config} toggleHandler={toggleHandler} linkHanlder={linkHanlder}/>
);
````



| Name         | Type | Description |
| ------------ | ----------- | ----------- |
| toggleHandler | function | Function that is fired when an item is toggeled, it has 2 params (id, value) |
| linkHandler | function | Function that handles when the user clicks on a link it has 1 param (link) |


### Enjoy :)
