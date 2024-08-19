import { RefObject } from 'react';
import { TextInput, TextInputProps } from 'react-native';

import { Container } from './styles';

type Props = TextInputProps & {
  inputRef?: RefObject<TextInput>
};

export function Input({ inputRef, ...rest }: Props) {
  return (
    <Container ref={inputRef} {...rest} />
  );
}
