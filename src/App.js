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
import FilmesCartaz from './paginas/filmes/FilmesCartaz';
import FilmesLancamento from './paginas/filmes/FilmesLancamento';
import AtoresDetalhes from "./paginas/atores/AtoresDetalhes";
import SeriesPopulares from './paginas/series/SeriesPopulares';
import SerienoAr from './paginas/series/SerienoAr';
import SerieEstrelandoHoje from './paginas/series/SerieEstrelandoHoje';
import SeriesDetalhes from "./paginas/series/SeriesDetalhes";

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
    <Route path="/Pagina1" element={<Pagina1/>} />
    <Route path="/Filmespopulares" element={<Filmespopulares/>} />
    <Route path="/filmes/:id" element={<Filmesdetalhes/>} />
    <Route path="/FilmesCartaz" element={<FilmesCartaz/>} />
    <Route path="/FilmesLancamento" element={<FilmesLancamento/>} />
    <Route path="/atores/:id" element={<AtoresDetalhes />} />
    <Route path="/SeriesPopulares" element={<SeriesPopulares />} />
    <Route path="/SerienoAr" element={<SerienoAr />} />
    <Route path="/SerieEstrelandoHoje" element={<SerieEstrelandoHoje />} />
    <Route path="/series/:id" element={<SeriesDetalhes />} />
    </Routes>

    </BrowserRouter>

    </div>
  );
}

export default App;
