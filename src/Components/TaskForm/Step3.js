import React from 'react';

class Step3 extends React.Component {
  render() {
    if (this.props.currentStep !== 3) {
      return null;
    }
    console.log(this.props);

    return (
      <div className="form-group">
        <h1>Please confirm to add your task.</h1>
        {this.props.NGOname}
        <button type="submit">Confirm</button>
      </div>
    );
  }
}

export default Step3;
