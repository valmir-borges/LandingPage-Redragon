import Header from './components/Header'
import Socio from './components/Socio'
import Patrocinio from './components/Patrocinio'
import Carrossel from './components/Carrossel';
import 'swiper/css/effect-fade'
import Footer from './components/Footer'
import Motivos from './components/Motivos'

function App() {
  return (
    <>
      <Header/>
      <Socio/>
      <Carrossel/>
      <Motivos/>
      <Patrocinio/>
      <Footer/>
    </>
  );
}

export default App;
