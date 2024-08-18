import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { ButtonIcon } from '@components/ButtonIcon';
import { Input } from '@components/Input';
import { Container, Form } from './styles';

export function Players() {
  return (
    <Container>
      <Header showBackButton />
      <Highlight title="Nome do time" subtitle="Adicione os jogadores e separe o time" />
      <Form>
        <Input placeholder="Nome do jogador" autoCorrect={false} />
        <ButtonIcon icon="add" />
      </Form>
    </Container>
  );
}
