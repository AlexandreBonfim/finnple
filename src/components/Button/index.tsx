import React from 'react';
import { RecButtonProperties } from 'react-native-gesture-handler';

import { Container, ButtonText } from './styles';

interface ButtonProps extends RecButtonProperties { children: string; }

/**
* Component Button
* - children must be string;
* - other properties being passed through rest.
*/
const Button: React.FC<ButtonProps> = ({ children, ...rest }) => (
  <Container {...rest}>
    <ButtonText>{children}</ButtonText>
  </Container>
);

export default Button;