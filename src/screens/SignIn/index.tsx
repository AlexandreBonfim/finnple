import React, { useCallback, useRef } from 'react';
import { 
  Image, 
  View, 
  KeyboardAvoidingView, 
  Platform,
  ScrollView
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';

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

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const navigation = useNavigation();
  const handleSignIn = useCallback((data: object) =>{
    console.log('logou', data);
  },[]);

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
            
            <Form ref={formRef} onSubmit={handleSignIn}>
              <Input name="email" icon="mail-outline" placeholder="E-mail"/>
              <Input name="password" icon="lock-outline" placeholder="Password"/>
            
              <Button onPress={() => {formRef.current?.submitForm();}}>Entrar</Button>
            </Form>

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