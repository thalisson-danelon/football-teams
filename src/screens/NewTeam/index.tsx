import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { Button } from '@components/Button';
import { Input } from '@components/Input';
import { Container, Content, Icon } from './styles';
import { teamCreate } from '@storage/team/teamCreate';

export function NewTeam() {
  const [team, setTeam] = useState('');
  const navigation = useNavigation();

  async function handleNewTeam() {
    try {
      await teamCreate(team);
      navigation.navigate('players', { team });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Container>
      <Header showBackButton />
      <Content>
        <Icon />
        <Highlight title="Novo time" subtitle="Crie o time para adicionar os jogadores" />
        <Input
          placeholder="Nome do time"
          onChangeText={setTeam}
        />
        <Button title="Criar" onPress={handleNewTeam} />
      </Content>
    </Container>
  );
}
