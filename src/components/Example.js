import React,{Component} from 'react';
import {createForm} from 'rc-form';
import { connect } from 'dva';

class Example extends Component {

  constructor(props){
    super(props);
    this.state = {
      example:"hello"
    }
  }

  render() {

    return (

        <div>{this.state.example}</div>
      
    );
  }

}

const ExampleWrapper = createForm()(Example);

export default connect()(ExampleWrapper);
