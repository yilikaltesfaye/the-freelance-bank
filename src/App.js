import Header from './components/Header';
import CardSection from './components/cardsection';
import { OuterLayout } from './styles/layouts';
import styled from 'styled-components';
import Chartsection from './components/Chartsection';

function App() {
  return (
    <div className="App">
      <Header />
      <OuterLayout>
        <MainStyled>
          <CardSection />
          <Chartsection />
        </MainStyled>
      </OuterLayout>
    </div>
  );
}

const MainStyled = styled.main`

`;

export default App;
