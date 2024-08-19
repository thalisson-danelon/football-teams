import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { Button } from '@components/Button';
import { Input } from '@components/Input';
import { Container, Content, Icon } from './styles';
import { teamCreate } from '@storage/team/teamCreate';
import { AppError } from '@utils/AppError';
import { Alert } from 'react-native';

export function NewTeam() {
  const [team, setTeam] = useState('');
  const navigation = useNavigation();

  async function handleNewTeam() {
    try {
      if (team.trim().length === 0) {
        return Alert.alert('Nome inválido', 'Por favor, informe o nome do time');
      }
      await teamCreate(team);
      navigation.navigate('players', { team });
    } catch (error) {
      if (error instanceof AppError) {
        return Alert.alert('Time repetido', error.message);
      } else {
        console.log(error);
        return Alert.alert('Não foi possível criar o time', 'Ocorreu um erro ao criar o novo time');
      }
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
