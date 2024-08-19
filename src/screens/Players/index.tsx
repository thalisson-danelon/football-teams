import { useEffect, useRef, useState } from 'react';
import { Alert, FlatList, TextInput } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import { AppError } from '@utils/AppError';

import { playerAddByTeam } from '@storage/player/playerAddByTeam';
import { PlayerStorageDTO } from '@storage/player/PlayerStorageDTO';
import { playersGetByTeamAndTeamSelected } from '@storage/player/playersGetByTeamAndTeamSelected';
import { playerRemoveByTeam } from '@storage/player/playerRemoveByTeam';
import { teamRemoveByName } from '@storage/team/teamRemoveByName';

import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { ButtonIcon } from '@components/ButtonIcon';
import { Input } from '@components/Input';
import { Filter } from '@components/Filter';
import { Loading } from '@components/Loading';
import { PlayerCard } from '@components/PlayerCard';
import { ListEmpty } from '@components/ListEmpty';
import { Button } from '@components/Button';

import { Container, Form, HeaderList, NumberOfPlayers } from './styles';

type RouteParams = {
  team: string;
}

export function Players() {
  const [isLoading, setIsLoading] = useState(true);
  const [newPlayerName, setNewPlayerName] = useState('');
  const [teamSelected, setTeamSelected] = useState('Time A');
  const [players, setPlayers] = useState<PlayerStorageDTO[]>([]);

  const navigation = useNavigation();

  const route = useRoute();
  const { team: teamName } = route.params as RouteParams;

  const newPlayerNameInputRef = useRef<TextInput>(null);

  async function handleAddPlayer() {
    if (newPlayerName.trim().length === 0) {
      return Alert.alert('Nome inválido', 'Por favor, informe um nome válido');
    }
    const newPlayer = {
      name: newPlayerName,
      team: teamSelected,
    };
    try {
      await playerAddByTeam(newPlayer, teamName);
      newPlayerNameInputRef.current?.blur();
      setNewPlayerName('');
      fetchPlayersByTeamSelected();
    } catch (error) {
      if (error instanceof AppError) {
        return Alert.alert('Erro', error.message);
      } else {
        console.log(error);
        return Alert.alert('Erro', 'Não foi possível adicionar o jogador');
      }
    }
  }

  async function fetchPlayersByTeamSelected() {
    try {
      setIsLoading(true);
      const playersByTeamSelected = await playersGetByTeamAndTeamSelected(teamName, teamSelected);
      setPlayers(playersByTeamSelected);
    } catch (error) {
      console.log(error);
      return Alert.alert('Erro', 'Não foi possível carregar os jogadores');
    } finally {
      setIsLoading(false);
    }
  }

  async function handleRemovePlayer(playerName: string) {
    try {
      await playerRemoveByTeam(playerName, teamName);
      fetchPlayersByTeamSelected();
    } catch (error) {
      console.log(error);
      return Alert.alert('Erro', 'Não foi possível remover o loader');
    }
  }

  async function removeTeam() {
    try {
      await teamRemoveByName(teamName);
      navigation.navigate('teams');
    } catch (error) {
      console.log(error);
      return Alert.alert('Erro', 'Não foi possível remover o time');
    }
  }

  async function handleRemoveTeam() {
    Alert.alert(
      'Remover time',
      'Tem certeza que deseja remover o time?',
      [
        { text: 'Não', style: 'cancel' },
        { text: 'Sim', style: 'destructive', onPress: removeTeam }
      ]
    );
  }

  useEffect(() => {
    fetchPlayersByTeamSelected();
  }, [teamSelected]);

  return (
    <Container>
      <Header showBackButton />
      <Highlight title={teamName} subtitle="Adicione os jogadores e separe o time" />
      <Form>
        <Input
          inputRef={newPlayerNameInputRef}
          placeholder="Nome do jogador"
          autoCorrect={false}
          onChangeText={setNewPlayerName}
          value={newPlayerName}
          onSubmitEditing={handleAddPlayer}
          returnKeyType="done"
        />
        <ButtonIcon icon="add" onPress={handleAddPlayer} />
      </Form>
      <HeaderList>
        <FlatList
          data={['Time A', 'Time B']}
          keyExtractor={item => item}
          renderItem={({ item }) =>
            <Filter
              title={item}
              isActive={item === teamSelected}
              onPress={() => setTeamSelected(item)}
            />
          }
          horizontal
        />
        <NumberOfPlayers>{players.length}</NumberOfPlayers>
      </HeaderList>
      {
        isLoading ? <Loading /> :
          <FlatList
            data={players}
            keyExtractor={item => item.name}
            renderItem={({ item }) =>
              <PlayerCard
                name={item.name}
                onRemove={() => {
                  handleRemovePlayer(item.name);
                }}
              />
            }
            ListEmptyComponent={
              <ListEmpty message="Não há pessoas nesse time." />
            }
            showsVerticalScrollIndicator={false}
            contentContainerStyle={[
              { paddingBottom: 100 },
              players.length === 0 && { flex: 1 }
            ]}
          />
      }
      <Button title="Remover Time" type="SECONDARY" onPress={handleRemoveTeam} />
    </Container>
  );
}
