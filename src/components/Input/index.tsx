import React, {
  useState,
  useEffect,
  useRef,
  useImperativeHandle,
  forwardRef,
} from 'react';
import { TextInputProps } from 'react-native';
// import { useField } from '@unform/core';

import { Container, TextInput, Icon } from './styles';

interface InputProps extends TextInputProps {
  name: string;
  icon: string;
}

interface InputValueReference { value: string; }

interface InputRef { focus(): void; }

const Input: React.ForwardRefRenderFunction<InputRef, InputProps> = ({ name, icon, ...rest}, ref) => {
  // Comments because library is broken on React version 16.
  const inputElementRef = useRef<any>(null);
  //const { registeredField, defaultValue = '', fieldName, error } = useField(name);
  // const inputValueRef = useRef<InputValueReference>({ value: defaultValue });

  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
   useImperativeHandle(ref, () => ({
    focus() {
      inputElementRef.current?.focus();
    },
  }));

  // useEffect(() => {
  //   registerField({
  //     name: fieldName,
  //     ref: inputValueRef.current,
  //     path: 'value'
  //   })
  // }, [fieldName, registeredField]);

  return(
    <Container>
      <Icon name={icon} size={20} />
      <TextInput
        ref={inputElementRef}
        placeholderTextColor="#BCBCC8"
        // defaultValue={defaultValue}
        // onChangeText={(value) => {inputValueRef.current.value = value}}
        {...rest}
      />
    </Container>
  );
};
export default forwardRef(Input);