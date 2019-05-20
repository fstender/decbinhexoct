import React from 'react';

import DecimalInput from "./DecimalInput"
import BinaryOutput from './BinaryOutput';
import HexOutput from './HexOutput';
import OctalOutput from './OctalOutput';
import BinaryDetails from './BinaryDetails';
import ByteDetails from './ByteDetails';

class Converter extends React.Component {
    constructor(props) {
      super(props);
      this.handleDecimalChange = this.handleDecimalChange.bind(this);
      this.state = {decimal: 0};
    }
  
    handleDecimalChange(value) {
      this.setState({decimal: value});
    }
  
    render() {
      const decimal = this.state.decimal;
  
      return (
        <div>
            <DecimalInput value={decimal} onValueChange={this.handleDecimalChange}></DecimalInput>
            <BinaryOutput value={decimal}></BinaryOutput>
            <HexOutput value={decimal}></HexOutput>
            <OctalOutput value={decimal}></OctalOutput>
            <hr></hr>
            <BinaryDetails value={decimal}></BinaryDetails>
            <ByteDetails value={decimal} base={16}></ByteDetails>
            <ByteDetails value={decimal} base={8}></ByteDetails>
        </div>
      );
    }
  }

  export default Converter;