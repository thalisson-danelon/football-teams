import { Container, Content, Icon } from './styles';
import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { Button } from '@components/Button';
import { Input } from '@components/Input';
import { useNavigation } from '@react-navigation/native';

export function NewTeam() {
  const navigation = useNavigation();

  function handleNewTeam() {
    navigation.navigate('players', { team: 'Tiririca' });
  }

  return (
    <Container>
      <Header showBackButton />
      <Content>
        <Icon />
        <Highlight title="Novo time" subtitle="Crie o time para adicionar os jogadores" />
        <Input placeholder="Nome do time" />
        <Button title="Criar" onPress={handleNewTeam} />
      </Content>
    </Container>
  );
}
