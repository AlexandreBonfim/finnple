import styled from 'styled-components/native';
import { Platform } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 30px ${Platform.OS === 'android' ? 120 : 40}px;
`;

export const Title = styled.Text`
  font-size: 24px;
  color: #023E7D;
  margin: 64px 0 24px;
  font-weight: bold;
`;

export const TermsWrap = styled.View`
  padding: 25px 0 ${getBottomSpace}px;

  flex-direction: row;
  justify-content: center;
  align-items: center;
  flexWrap : wrap;
`;

export const TermsLink = styled.Text`
  color: #023E7D;
  font-size: 12px;
  text-align: center;
`;

export const TermsText = styled.Text`
  color: #000;
  font-size: 12px;
  text-align: center;
`;

export const BackButton = styled.TouchableOpacity`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 16px 0 ${getBottomSpace}px;

  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const BackText = styled.Text`
  color: #000;
  margin-left: 10px;
  font-size: 16px;
`;