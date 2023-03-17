import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Main from './components/Home/Main';
import Footer from './components/Footer';
import { ChakraProvider } from '@chakra-ui/react';
import Routing from './Routing';

function App() {
  return (
    <ChakraProvider>
      <>
        <Header />
        <Routing />
        <Footer />
      </>
    </ChakraProvider>
  );
}

export default App;
