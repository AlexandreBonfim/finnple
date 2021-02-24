import React, { useref, useEffect } from 'react';
import { TextInputProps } from 'react-native';
import { useField } from '@unform/core';

import { Container, TextInput, Icon } from './styles';

interface InputProps extends TextInputProps {
  name: string;
  icon: string;
}
interface InputValueReference { value: string }

const Input: React.FC<InputProps> = ({ name, icon, ...rest}) => {
  const { registeredField, defaultValue = '', fieldName, error } = useField(name);
  const inputValueRef = useRef<InputValueReference>({ value: defaultValue });

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputValueRef.current,
      path: 'value'
    })
  }, [fieldName, registeredField]);

  return(
    <Container>
      <Icon name={icon} size={20} />
      <TextInput
        placeholderTextColor="#BCBCC8"
        defaultValue={defaultValue}
        onChangeText={(value) => {inputValueRef.current.value = value}}
        {...rest}
      />
    </Container>
  );
};
export default Input;