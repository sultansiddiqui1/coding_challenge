import "./App.css";
import React, { useState } from "react";

function App() {
  //state to store our number
  const [romanNumeral, setRomanNumeral] = useState();

  //function to convert to roman numerals from the number
  function convert_to_roman(number) {
    let roman_numeral = "";
    //9 and 4 are corner cases in roman numerals thus we consider it by adding CM, CD, XC, XL, IX and IV
    const dictionary = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1,
    };

    for (const [key, value] of Object.entries(dictionary)) {
      while (number >= value) {
        roman_numeral = roman_numeral + key;
        number = number - value;
      }
    }
    return roman_numeral;
  }

  const onSubmit = (e) => {
    e.preventDefault();
    setRomanNumeral(convert_to_roman(e.target.number.value));
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>Enter a Number to convert to Roman Numerals:</p>
        <form onSubmit={onSubmit}>
          <label htmlFor="number">Enter a Number:</label>
          <input
            type="number"
            id="number"
            name="number"
            placeholder="Enter a number.."
            min={1}
            max={100}
          />
          <input type="submit" value="Convert" />
        </form>
        {romanNumeral ? (
          <>
            <div>{romanNumeral}</div>
          </>
        ) : (
          <></>
        )}
      </header>
    </div>
  );
}

export default App;
