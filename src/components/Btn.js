import React from 'react';

class Btn extends React.Component {
  render() {
    const { generate } = this.props;
    return (
      <div>
        <input type="submit" value="Submit"  onClick={e => generate()} />
      </div>
    )
  }
}

export default Btn;
