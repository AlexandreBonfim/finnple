import React, { useRef } from 'react';
import { 
  View, 
  KeyboardAvoidingView, 
  Platform,
  ScrollView,
  TouchableOpacity,
  TextInput
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';

import logoImg from '../../assets/logo/logo.png';
import Input from '../../components/Input';
import Button from '../../components/Button';

import { 
  Container, 
  Title,
  TermsWrap,
  TermsText,
  TermsLink,
  BackButton,
  BackText
} from './styles';

const SignUp: React.FC = () => {
  const navigation = useNavigation();

  const emailInputRef = useRef<TextInput>(null);
  const passwordInputRef = useRef<TextInput>(null);

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
            <View>
              <Title>Criar Conta</Title>
            </View>

            <Input 
              autoCapitalize="words"
              name="name" 
              icon="person-outline" 
              placeholder="Nome"
              returnKeyType="next"
              onSubmitEditing={() => {emailInputRef.current?.focus();}}
            />

            <Input 
              ref={emailInputRef}
              autoCapitalize="none"
              autoCorrect={false}
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
              textContentType="newPassword"
              returnKeyType="go"
              onSubmitEditing={() => {console.log('reg criar clicked')}}
              secureTextEntry
            />
          
            <Button onPress={() => {console.log('reg criar clicked')}}>Criar</Button>

            <TermsWrap>
              <TermsText>Ao criar sua conta, você concorda com os </TermsText>
              <TouchableOpacity onPress={() => { console.log('termos clicked') }}>
                <TermsLink>Termos de Uso</TermsLink>
              </TouchableOpacity> 
              <TermsText> e a </TermsText> 
              <TouchableOpacity onPress={() => { console.log('privacidade clicked') }}>
                <TermsLink>Política de Privacidade</TermsLink>
              </TouchableOpacity> 
              <TermsText>do Finnple</TermsText>
            </TermsWrap>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>

      <BackButton onPress={() => navigation.navigate('SignIn')}>
        <MaterialIcons name="chevron-left" size={30} color="#000" />
        <BackText>Voltar</BackText>
      </BackButton>
    </>
  );
};

export default SignUp;