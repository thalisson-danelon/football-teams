import { TouchableOpacityProps } from 'react-native';
import { Container, Icon, Title } from '@components/TeamCard/styles';

type Props = TouchableOpacityProps & {
  title: string;
}

export function TeamCard({ title, ...rest }: Props) {
  return (
    <Container {...rest}>
      <Icon />
      <Title>{title}</Title>
    </Container>
  );
}
