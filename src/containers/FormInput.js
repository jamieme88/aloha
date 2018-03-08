import React from 'react';
import { connect } from 'react-redux';
import * as action from '../actions/index';
import Btn from '../components/Btn';

class FormInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    const { generate, changetext } = this.props; 
    return (
      <form onSubmit={this.handleSubmit}> 
        <label>
          中文姓名:
          <input type="text" value={this.state.value} onChange={e => {
            this.setState({value: e.target.value});
            changetext();
          }} />
        </label>
        <Btn generate={generate(this.state.value)}/>
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    value: state.value
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    generate: v => () => dispatch(action.generateAction(v)),
    changetext: v => () => dispatch(action.changetextAction(v)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormInput);
