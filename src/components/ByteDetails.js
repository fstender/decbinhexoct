import React from 'react';

class ByteDetails extends React.Component {
  toHex(value, base) {
    let number = Number.parseInt(value);
    return Number.isNaN(number) ? '' : number.toString(base);
  }

  sumOperand(bytevalue, byte, value, base) {
    if (byte !== undefined) {
      let tmp = bytevalue * parseInt(byte, base);
      if (value - tmp > tmp) {
        return '+ ' + tmp;
      }
      return tmp;
    }
  }

  render() {
    const value = this.props.value;
    const base = this.props.base;
    const title = this.props.title;

    const valueAsHex = this.toHex(value, base);
    const needed = Math.max(4, valueAsHex.length);

    let row1 = [],
      row2 = [],
      row3 = [],
      row4 = [];
    for (let i = needed - 1; i >= 0; i--) {
      let bytevalue = Math.pow(base, i);
      let byte = valueAsHex[valueAsHex.length - i - 1];
      row1.push(<td>{i}</td>);
      row2.push(<td>{bytevalue}</td>);
      row3.push(<td>{byte}</td>);
      row4.push(<td>{this.sumOperand(bytevalue, byte, value, base)}</td>);
    }

    return (
      <div>
        <table className="details">
          <thead>
            <tr>
              <th colspan={needed} className="center">
                {title} conversion details
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Position</th>
              {row1}
            </tr>
            <tr>
              <th>Multiplier</th>
              {row2}
            </tr>
            <tr>
              <th>State</th>
              {row3}
            </tr>
            <tr>
              <th>&nbsp;</th>
              {row4}
              <td>
                ={' '}
                <u>
                  <strong>{value}</strong>
                </u>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default ByteDetails;
