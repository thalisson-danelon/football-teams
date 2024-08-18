import { Container, Content, Icon } from './styles';
import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { Button } from '@components/Button';
import { Input } from '@components/Input';

export function NewTeam() {
  return (
    <Container>
      <Header showBackButton />
      <Content>
        <Icon />
        <Highlight title="Novo time" subtitle="Crie o time para adicionar os jogadores" />
        <Input placeholder="Nome do time" />
        <Button title="Criar" />
      </Content>
    </Container>
  );
}
