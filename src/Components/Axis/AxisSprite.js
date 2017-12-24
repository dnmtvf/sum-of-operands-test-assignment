import React from 'react';
import { Image } from 'react-konva';
import axis from './sprite.png';

class AxisSprite extends React.Component {
  constructor(props) {
    super(props);
    this.state = { image: null };
  }
  componentDidMount() {
    const image = new window.Image();
    image.src = axis;
    image.onload = () => {
      this.setState({ image });
    };
  }

  render() {
    return <Image image={this.state.image} {...this.props} />;
  }
}

export default AxisSprite;
