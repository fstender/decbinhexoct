import React from 'react';

import DecimalInput from "./DecimalInput"
import BinaryOutput from './BinaryOutput';
import HexOutput from './HexOutput';
import OctalOutput from './OctalOutput';

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
        </div>
      );
    }
  }

  export default Converter;