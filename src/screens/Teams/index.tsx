import { useCallback, useState } from 'react';
import { FlatList } from 'react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native';

import { teamGetAll } from '@storage/team/teamGetAll';

import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { TeamCard } from '@components/TeamCard';
import { Loading } from '@components/Loading';
import { Button } from '@components/Button';
import { ListEmpty } from '@components/ListEmpty';

import { Container } from './styles';

export function Teams() {
  const [isLoading, setIsLoading] = useState(true);
  const [teamNames, setTeamNames] = useState<string[]>([]);

  const navigation = useNavigation();

  function handleNewTeam() {
    navigation.navigate('newTeam');
  }

  async function fetchTeams() {
    try {
      setIsLoading(true);
      const data = await teamGetAll();
      setTeamNames(data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  function handleOpenTeams(teamName: string) {
    navigation.navigate('players', { team: teamName });
  }

  useFocusEffect(useCallback(() => {
    fetchTeams();
  }, []));

  return (
    <Container>
      <Header />
      <Highlight title="Times" subtitle="Jogue com o seu time" />
      {
        isLoading ? <Loading /> :
          <FlatList
            data={teamNames}
            keyExtractor={item => item}
            contentContainerStyle={teamNames.length === 0 && { flex: 1 }}
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
      }
      <Button title="Criar novo time" onPress={handleNewTeam} />
    </Container>
  );
}
