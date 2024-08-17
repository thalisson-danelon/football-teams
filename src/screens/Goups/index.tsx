import { Container } from '@screens/Goups/styles';
import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { GroupCard } from '@components/GroupCard';

export function Groups() {
  return (
    <Container>
      <Header />
      <Highlight title="Times" subtitle="Jogue com o seu time" />
      <GroupCard title="Os Pernetas" />
    </Container>
  );
}
