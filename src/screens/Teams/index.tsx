import { useCallback, useState } from 'react';
import { FlatList } from 'react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native';

import { teamGetAll } from '@storage/team/teamGetAll';

import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { TeamCard } from 'src/components/TeamCard';
import { Button } from '@components/Button';
import { ListEmpty } from '@components/ListEmpty';

import { Container } from './styles';

export function Teams() {
  const [teams, setTeams] = useState<string[]>([]);

  const navigation = useNavigation();

  function handleNewTeam() {
    navigation.navigate('newTeam');
  }

  async function fetchTeams() {
    try {
      const data = await teamGetAll();
      setTeams(data);
    } catch (error) {
      console.log(error);
    }
  }

  function handleOpenTeams(team: string) {
    navigation.navigate('players', { team });
  }

  useFocusEffect(useCallback(() => {
    fetchTeams();
  }, []));

  return (
    <Container>
      <Header />
      <Highlight title="Times" subtitle="Jogue com o seu time" />
      <FlatList
        data={teams}
        keyExtractor={item => item}
        contentContainerStyle={teams.length === 0 && { flex: 1 }}
        renderItem={({ item }) =>
          <TeamCard
            title={item}
            onPress={() => handleOpenTeams(item)}
          />
        }
        ListEmptyComponent={() =>
          <ListEmpty message="Que tal cadastrar o primeiro time?" />
        }
        showsVerticalScrollIndicator={false}
      />
      <Button title="Criar novo time" onPress={handleNewTeam} />
    </Container>
  );
}
