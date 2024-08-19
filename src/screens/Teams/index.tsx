import { Container } from '@screens/Teams/styles';
import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { TeamCard } from 'src/components/TeamCard';
import { useState } from 'react';
import { FlatList } from 'react-native';
import { ListEmpty } from '@components/ListEmpty';
import { Button } from '@components/Button';

export function Teams() {
  // const [teams, setTeams] = useState<string[]>(['Os Pernetas', 'Pernas de Pau', 'Tiririca', 'Cruzeiro do Sul']);
  const [teams, setTeams] = useState<string[]>([]);

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
      <Button title="Criar novo time" />
    </Container>
  );
}
