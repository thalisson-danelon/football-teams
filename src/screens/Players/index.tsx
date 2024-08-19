import { useState } from 'react';
import { FlatList } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { ButtonIcon } from '@components/ButtonIcon';
import { Input } from '@components/Input';
import { Filter } from '@components/Filter';
import { PlayerCard } from '@components/PlayerCard';
import { ListEmpty } from '@components/ListEmpty';
import { Container, Form, HeaderList, NumberOfPlayers } from './styles';
import { Button } from '@components/Button';

type RouteParams = {
  team: string;
}

export function Players() {
  const [team, setTeam] = useState('Time A');
  const [players, setPlayers] = useState([]);

  const route = useRoute();
  const { team: teamName } = route.params as RouteParams;

  return (
    <Container>
      <Header showBackButton />
      <Highlight title={teamName} subtitle="Adicione os jogadores e separe o time" />
      <Form>
        <Input placeholder="Nome do jogador" autoCorrect={false} />
        <ButtonIcon icon="add" />
      </Form>
      <HeaderList>
        <FlatList
          data={['Time A', 'Time B']}
          keyExtractor={item => item}
          renderItem={({ item }) =>
            <Filter
              title={item}
              isActive={item === team}
              onPress={() => setTeam(item)}
            />
          }
          horizontal
        />
        <NumberOfPlayers>{players.length}</NumberOfPlayers>
      </HeaderList>
      <FlatList
        data={players}
        keyExtractor={item => item}
        renderItem={({ item }) =>
          <PlayerCard
            name={item}
            onRemove={() => {
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
      <Button title="Remover Time" type="SECONDARY" />
    </Container>
  );
}
