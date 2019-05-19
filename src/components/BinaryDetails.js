import React from 'react';

class BinaryDetails extends React.Component {

  constructor(props) {
    super(props);
  }


  toBinary(value) {
    let number = Number.parseInt(value);
    return Number.isNaN(number) ? '' : number.toString(2);
  }

  sumOperand(bitset, bitvalue, value) {
    let remainder = value - bitvalue;
    if (remainder > bitvalue) {
      return bitset ? "+ " + bitvalue : "";
    }
    return bitset ? bitvalue : "";
  }

  render() {
    const value = this.props.value;

    let x0 = [];
    let x1 = [];
    let x2 = [];
    let x3 = [];
    for (let i = 10; i >= 0; i--) {
      let bitvalue = Math.pow(2, i);
      let bitset = (value & bitvalue) === bitvalue;
      x0.push(<td>{i}<sup>2</sup></td>);
      x1.push(<td>{bitvalue}</td>);
      x2.push(<td className={bitset ? "bit_on" : "bit_off"}>{bitset ? "1" : "0"}</td>);
      x3.push(<td>{this.sumOperand(bitset, bitvalue, value)}</td>);
    }
    x3.push(<td>= {value}</td>);

    return (
      <div>
        <table className="details">
          <tr>{x0}</tr>
          <tr>{x1}</tr>
          <tr>{x2}</tr>
          <tr>{x3}</tr>
        </table>
      </div>
    );
  }
}

export default BinaryDetails;
