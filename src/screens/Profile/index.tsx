import React, { useCallback, useRef } from 'react';
import { 
  Image, 
  View, 
  KeyboardAvoidingView, 
  Platform,
  ScrollView,
  TextInput
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
// import { Form } from '@unform/mobile';
// import { FormHandles } from '@unform/core';

import logoImg from '../../assets/logo/logo.png';
import Input from '../../components/Input';
import Button from '../../components/Button';

import { 
  Container, 
  Title,
  ForgotPasswordButton,
  ForgotPasswordText,
  CreateAccountButton,
  CreateAccountText
} from './styles';

const Profile: React.FC = () => {
  // Comments because library is broken on React version 16.
  // const formRef = useRef<FormHandles>(null);
  const passwordInputRef = useRef<TextInput>(null);
  const navigation = useNavigation();
  // const handleSignIn = useCallback((data: object) =>{
  //   console.log('logou', data);
  // },[]);

  return (
    <>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled
      >
        <ScrollView
          KeyboardShouldPersisTaps="handled"
          contentContainerStyle={{ flex: 1}}
        >
          <Container>
            <Image source={logoImg} />

            <View>
              <Title>Finpple.</Title>
            </View>
            
            {/* <Form ref={formRef} onSubmit={handleSignIn}> */}
              <Input 
                autoCorrect={false}
                autoCapitalize="none"
                keyboardType="email-address"
                name="email" 
                icon="mail-outline" 
                placeholder="E-mail"
                returnKeyType="next"
                onSubmitEditing={() => {passwordInputRef.current?.focus();}}
              />

              <Input 
                ref={passwordInputRef}
                name="password" 
                icon="lock-outline" 
                placeholder="Password"
                secureTextEntry
                returnKeyType="go"
                onSubmitEditing={() =>{console.log('should be ref of entrar')}}
              />
            
              <Button onPress={() => {console.log('Entrar clicked')}}>Entrar</Button>
              {/* right one */}
              {/* <Button onPress={() => {formRef.current?.submitForm();}}>Entrar</Button> */}
            {/* </Form> */}

            <ForgotPasswordButton onPress={() => {console.log('Forgot clicked')}}>
              <ForgotPasswordText>Esqueci minha senha</ForgotPasswordText>
            </ForgotPasswordButton>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>
      
      <CreateAccountButton onPress={() => navigation.navigate('SignUp')}>
        <MaterialIcons name="login" size={30} color="#000" />
        <CreateAccountText>Criar uma conta</CreateAccountText>
      </CreateAccountButton>
    </>
  );
};

export default SignIn;