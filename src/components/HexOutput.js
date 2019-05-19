import React from 'react';

class HexOutput extends React.Component {
  toHex(value) {
    let number = Number.parseInt(value);
    return Number.isNaN(number) ? '' : number.toString(16);
  }

  render() {
    const value = this.props.value;

    return (
      <div>
        <label>
          <span className="label">Hex:</span>
          <input
            type="text"
            id="hex"
            value={this.toHex(value)}
            readOnly={true}
          />
        </label>
      </div>
    );
  }
}

export default HexOutput;
