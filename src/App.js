import './App.css';
import Menu from './components/Menu';
import 'bootstrap/dist/css/bootstrap.min.css';
//import Cartao from './components/Cartao';
import Pagina1 from './paginas/Pagina1';
import Objeto from './paginas/Objeto';
import Array from './paginas/Array';
import Carros from './paginas/Carros';
//mport Box from './components/Box';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contador from './paginas/Contador';
import Filmespopulares from './paginas/filmes/Filmespopulares';
import Filmesdetalhes from './paginas/filmes/Filmesdetalhes';

function App() {
  return (
    <div> 
    <BrowserRouter>
    <Menu/> 
    <Routes>

    <Route path="/" element={<Carros/>} />
    <Route path="/carros" element={<Carros/>} />
    <Route path="/array" element={<Array/>} />
    <Route path="/objeto" element={<Objeto/>} />
    <Route path="/contador" element={<Contador/>} />
    <Route path="/pagina1" element={<Pagina1/>} />
    <Route path="/filmespopulares" element={<Filmespopulares/>} />
    <Route path="/filmes/:id" element={<Filmesdetalhes/>} />
    </Routes>

    </BrowserRouter>

    </div>
  );
}

export default App;
