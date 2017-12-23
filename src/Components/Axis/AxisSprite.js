import React from 'react';
import axis from './sprite.png';
import { Image } from 'react-konva';

class AxisSprite extends React.Component {
  state = {
    image: null
  };
  componentDidMount() {
    const image = new window.Image();
    image.src = axis;
    image.onload = () => {
      this.setState({
        image: image
      });
    };
  }

  render() {
    return <Image image={this.state.image} {...this.props} />;
  }
}

export default AxisSprite;