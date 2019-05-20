import React from 'react';

class BinaryDetails extends React.Component {
  sumOperand(bitset, bitvalue, value) {
    let remainder = value - bitvalue;
    if (remainder > bitvalue) {
      return bitset ? '+ ' + bitvalue : '';
    }
    return bitset ? bitvalue : '';
  }

  neededNumberOfBits(value) {
    for (let i = 3; i < 20; i++) {
      let bitvalue = Math.pow(2, i);
      if (value - bitvalue < bitvalue) {
        return i;
      }
    }
    return 20;
  }

  render() {
    const value = this.props.value;

    const needed = this.neededNumberOfBits(value);
    let row1 = [],
      row2 = [],
      row3 = [],
      row4 = [];
    for (let i = needed; i >= 0; i--) {
      let bitvalue = Math.pow(2, i);
      let bitset = (value & bitvalue) === bitvalue;
      row1.push(<td className="br">{i}</td>);
      row2.push(<td className="br">{bitvalue}</td>);
      row3.push(
        <td className={bitset ? 'br on' : 'br off'}>
          {bitset ? '1' : '0'}
        </td>
      );
      row4.push(<td>{this.sumOperand(bitset, bitvalue, value)}</td>);
    }

    return (
      <div>
        <table className="details">
          <thead>
            <tr>
              <th colspan={needed + 3} className="center">Binary conversion details</th>
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
              <th />
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

export default BinaryDetails;
