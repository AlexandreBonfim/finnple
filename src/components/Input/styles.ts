import styled from 'styled-components/native';
import { MaterialIcons } from '@expo/vector-icons';

export const Container = styled.View`
  width: 100%;
  height: 60px;
  padding: 0 16px;
  border: 1px #BCBCC8;
  border-radius: 10px;
  margin-bottom: 8px;

  flex-direction: row;
  align-items: center;
`;

export const TextInput = styled.TextInput`
  flex: 1;
  color: #BCBCC8;
  font-size: 16px;
`;

export const Icon = styled(MaterialIcons)`
  margin-right: 14px;
  color: #D2D2DA;
`;