import React from 'react';
import { Image } from 'react-native';

function HeroImage(props) {
  return (
    <Image
      source={{ uri: props.imageUrl }}
      style={{ height: 250 }}
    />
  );
}

export default HeroImage;

HeroImage.propTypes = {
  imageUrl: React.PropTypes.string,
};
