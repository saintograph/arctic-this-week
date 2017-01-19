import React from 'react';
import { Image } from 'react-native';

export default function HeroImage(props) {
  return (
    <Image
      source={{ uri: props.imageUrl }}
      style={{ height: 350 }}
    />
  );
}

HeroImage.propTypes = {
  imageUrl: React.PropTypes.string,
};
