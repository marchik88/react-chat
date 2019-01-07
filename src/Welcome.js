import React from 'react';

/*const Welcome = ({ name }) => (
  <h1>Hello, {name}</h1>
);*/

class Welcome extends React.Component{
  render(){
    const {children} = this.props;
    return <h1>Hello, {children}</h1>;
  }
}


export default Welcome;
