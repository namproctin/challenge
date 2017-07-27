/*
 * 1. Implement the React.Component, <Input />
 *   - It should allow the user to type text in.
 *   - Style as you wish.
 *
 * 2. Implement the React.Component, <Output />
 *   - It should show the user the computed result from calling 'isClosed()'.
 *   - Style as you wish.
 *
 * 3. Implement the React.Component, <Button />
 *   - It should handle user's click, which will call 'isClosed()'
 *   - It should handle user's pressing 'Enter', which will also call 'isClosed()'
 *
 * 4. Implement `isClosed()`
 *   - Given a string input, `str`, write a function that returns a boolean if the `str`
 *     is properly "closed". This means we have 2 types of reserved characters:
 *     1. Opening Character, "^"
 *     2. Closing Character, "$"
 *     - The function needs to check that whenever an Opening Character appears, then a Closing
 *     Character comes after it.
 *     - Likewise, whenever a Closing Character appears, means a corresponding
 *     Opening Character must have appeared previously.
 *     - It should handle nesting, so "^^$$" should return `true`.
 *     - It should ignore other characters that is not "^" or "$".
 *   - Examples:
 *     - "^$" => true
 *     - "$^" => false
 *     - "^^$$" => true
 *     - "^$^$" => true
 *     - "^123^abc$$" => true
 */
import React from 'react';

export function Input(props) {
  return (
    <div>
      <input type="text" value={props.data} onChange={props.updateData} placeholder="Insert the string here"/>
    </div>
  );
}

export function Button(props)  {
  return (
    <button onClick={props.clickEvent}>
      Press Enter
    </button>
  );
}

export function Output(props) {
  return (
  <div>
    {props.result}
  </div >
  );
}

export function isClosed(str) {
  if (str === "") {
    return true;
  } else {
    str = str.replace(/[^(^$)]/g,'');
    while (str !== "") {
      var before = str
      str = str.replace(/\^\$/g,'');
      if (before === str) return false;
    }
    return true;
  }
}

export class ComputeIO extends React.Component {
  constructor(props) {
    super(props);
    this.state = {data: "", result: null};
  }

  calculate(event) {
    this.setState({result: isClosed(this.state.data).toString()});
  }

  updateData(event) {
    this.setState({data: event.target.value});
  }

  render() {
    return (
      <section>
        <Input  data={this.state.data} updateData={this.updateData.bind(this)} />
        <Button clickEvent={this.calculate.bind(this)} />
        <Output result={this.state.result} />
      </section>
    );
  }
}
