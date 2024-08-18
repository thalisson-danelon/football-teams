import { TouchableOpacityProps } from 'react-native';
import { ButtonTypeStyleProps, Container, Title } from '@components/Button/styles';

export type Props = TouchableOpacityProps & {
  title: string;
  type?: ButtonTypeStyleProps;
}

export function Button({ title, type = 'PRIMARY', ...rest }: Props) {
  return (
    <Container type={type as ButtonTypeStyleProps} {...rest}>
      <Title>{title}</Title>
    </Container>
  );
}
