import React from 'react';

class DecimalInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    let value = e.target.value;
    this.props.onValueChange(value);
  }

  handleKeyUpOrDown(e) {
    var keyCode = e.keyCode ? e.keyCode : e.which;
    // console.log(keyCode);
    if (
      (keyCode >= 37 && keyCode <= 40) || // Cursor
      (keyCode >= 48 && keyCode <= 57) || // Numbers
      (keyCode >= 96 && keyCode <= 105) || // Numpad
      keyCode === 8 || // Backspace
      keyCode === 46 // Delete
    ) {
      return;
    }
    e.preventDefault();
  }

  render() {
    const value = this.props.value;

    return (
      <div>
        <label>
          <span className="label">Decimal:</span>
          <input
            type="text"
            id="decimal"
            value={value}
            onKeyDown={this.handleKeyUpOrDown}
            onKeyUp={this.handleKeyUpOrDown}
            onChange={this.handleChange}
            autoFocus={true}
          />
        </label>
      </div>
    );
  }
}

export default DecimalInput;
