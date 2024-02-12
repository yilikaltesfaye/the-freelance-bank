import Header from './components/Header';
import CardSection from './components/cardsection';
import { OuterLayout } from './styles/layouts';
import styled from 'styled-components';
import Chartsection from './components/Chartsection';
import MessagingSection from './components/MessagingSection';
import PaymentSection from './components/PaymentSection';
import FAQsection from './components/FAQsection';

function App() {
  return (
    <div className="App">
      <Header />
      <OuterLayout>
        <MainStyled>
          <CardSection />
          <Chartsection />
          <MessagingSection />
          <PaymentSection />
          <FAQsection />
        </MainStyled>
      </OuterLayout>
    </div>
  );
}

const MainStyled = styled.main`

`;

export default App;
