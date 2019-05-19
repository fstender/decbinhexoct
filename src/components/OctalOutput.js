import React from 'react';

class OctalOutput extends React.Component {
  toOctal(value) {
    let number = Number.parseInt(value);
    return Number.isNaN(number) ? '' : number.toString(8);
  }

  render() {
    const value = this.props.value;

    return (
      <div>
        <label>
          <span className="label">Octal:</span>
          <input
            type="text"
            id="octal"
            value={this.toOctal(value)}
            readOnly={true}
          />
        </label>
      </div>
    );
  }
}

export default OctalOutput;
