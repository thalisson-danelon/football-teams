import { Container } from '@screens/Teams/styles';
import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { GroupCard } from '@components/GroupCard';
import { useState } from 'react';
import { FlatList } from 'react-native';

export function Teams() {
  const [teams, setTeams] = useState<string[]>(['Os Pernetas', 'Pernas de Pau', 'Tiririca', 'Cruzeiro do Sul']);

  return (
    <Container>
      <Header />
      <Highlight title="Times" subtitle="Jogue com o seu time" />
      <FlatList
        data={teams}
        keyExtractor={item => item}
        renderItem={({ item }) => <GroupCard title={item} />}
      />
    </Container>
  );
}
