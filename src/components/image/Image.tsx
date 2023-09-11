import React from 'react';
import {
  Image as SUIImage,
  ImageProps as SUIImageProps,
} from 'semantic-ui-react';

export type ImageProps = SUIImageProps & {};

const Image: React.FC<ImageProps> = ({ ...rest }) => <SUIImage {...rest} />;

export default Image;
