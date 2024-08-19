import { useState } from 'react';
import { FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
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

  return (
    <Container>
      <Header />
      <Highlight title="Times" subtitle="Jogue com o seu time" />
      <FlatList
        data={teams}
        keyExtractor={item => item}
        contentContainerStyle={teams.length === 0 && { flex: 1 }}
        renderItem={({ item }) => <TeamCard title={item} />}
        ListEmptyComponent={() =>
          <ListEmpty message="Que tal cadastrar o primeiro time?" />
        }
        showsVerticalScrollIndicator={false}
      />
      <Button title="Criar novo time" onPress={handleNewTeam} />
    </Container>
  );
}
