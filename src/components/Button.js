import React, { Component } from 'react';
import LanguageContext from '../contexts/LanguageContext';

class Button extends Component {
  // important! must be static variable named contextType
  static contextType = LanguageContext;

  render() {
    const text = this.context === 'english' ? 'Submit' : 'Voorleggen';
    return <button className='ui button primary'>{text}</button>;
  }
}
// Alternatively you can hook to the contect
// by declaration AFTER the class def
// Button.contextType = LanguageContext;

export default Button;
