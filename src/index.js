import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

class RembrComponent extends React.Component {
  render() {
    return <Title>{this.props.name}</Title>;
  }
}

export default RembrComponent;