import React, { Component } from 'react';
import LanguageContext from '../contexts/LanguageContext';

export default class Field extends Component {
  static contextType = LanguageContext;

  render() {
    const text = this.context === 'english' ? 'Name' : 'Naam';
    return (
      <div className='ui field'>
        <label>{text}</label>
        <input />
      </div>
    );
  }
}
