import Header from './components/Header';
import CardSection from './components/cardsection';
import { OuterLayout } from './styles/layouts';
import styled from 'styled-components';
import Chartsection from './components/Chartsection';
import MessagingSection from './components/MessagingSection';
import PaymentSection from './components/PaymentSection';
import FAQsection from './components/FAQsection';
import Footer from './components/Footer';
import { Fade } from 'react-awesome-reveal';

function App() {
  return (
    <div className="App">
      <Header />
      <OuterLayout>
        <MainStyled>
          <Fade direction="left">
            <CardSection />
          </Fade>
          <Fade direction='right'>
            <Chartsection />
          </Fade>
          <Fade direction="left">
            <MessagingSection />
          </Fade>  
          <Fade direction='right'>
            <PaymentSection />
          </Fade>  
            <FAQsection />
        </MainStyled>
      </OuterLayout>
      <Footer />
    </div>
  );
}

const MainStyled = styled.main`

`;

export default App;
