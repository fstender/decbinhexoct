import React from 'react';

class BinaryOutput extends React.Component {
  toBinary(value) {
    let number = Number.parseInt(value);
    return Number.isNaN(number) ? '' : number.toString(2);
  }

  render() {
    const value = this.props.value;

    return (
      <div>
        <label>
          <span className="label">Binary:</span>
          <input
            type="text"
            id="binary"
            value={this.toBinary(value)}
            readOnly={true}
          />
        </label>
      </div>
    );
  }
}

export default BinaryOutput;
