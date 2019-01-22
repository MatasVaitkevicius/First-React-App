import React, { Component } from 'react';

class HomeComponent extends Component {
  constructor(props){
    super(props)

    this.state = {
      data: this.props.data,
      name: this.props.name,
      isTrue: this.props.isTrue,
    }
  }

  componentWillReceiveProps(nextProps, nextContext) {
    this.setState({isTrue: nextProps.isTrue})
  }

  render() {
    const { data, isTrue } = this.state

    console.log(this.props.isTrue);
    return (
      <div>
        {data ? data : 'Oi, nera data'}

        <h5> {this.props.name}</h5>
        <h5>{isTrue.toString()}</h5>
        <button onClick={() => this.props.onChangeTrue()}>Skra</button>
      </div>
    );
  }
}

export default HomeComponent;
