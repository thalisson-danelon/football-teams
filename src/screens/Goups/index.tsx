import { Container } from '@screens/Goups/styles';
import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';

export function Groups() {
  return (
    <Container>
      <Header />
      <Highlight title="Times" subtitle="Jogue com o seu time" />
    </Container>
  );
}
