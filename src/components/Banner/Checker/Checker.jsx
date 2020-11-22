import React from 'react';
import './Checker.css';
import {alphabetLists} from '../../../config/alphabets';
import {numberLists} from '../../../config/numbers';

export const Checker = () => {
  const alphabets = alphabetLists.map((value) =>
    <option key={value} value={value}>{value}</option>
  );
  const numbers = numberLists.map((value) => 
    <option key={value} value={value}>{value}</option>
  )
  return (
    <div className="checker">
      <div className="checker__container">
        <div className="checker__for__alphabets">
          <select name="alphabets" id="alphabets" className="">
            {alphabets}
          </select>
        </div>
        
        <div className="checker__fields">
          <select name="checkers">
            {numbers}
          </select>
        
        
          <select name="checkers">
            {numbers}
          </select>
        
        
          <select name="checkers">
            {numbers}
          </select>
        
        
          <select name="checkers">
            {numbers}
          </select>
        
        
          <select name="checkers">
            {numbers}
          </select>
        
        
          <select name="checkers">
            {numbers}
          </select>
        </div>
        
        <div className="checker__button">
          <button>ထီတိုက်ရန်</button>
        </div>
        
      </div>
    </div>
  )
}
export default Checker;
