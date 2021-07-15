import Navbar from './components/navbar/Navbar';
import Inicio from './components/inicio/Inicio';
import Slidershow from './components/Slideshow/Slidershow';
import Servicios from './components/servicios/Servicios';
import Footer from './components/footer/Footer';
import Formulario from './components/formulario/Formulario'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import DatoEnviado from './components/datoEnviado/DatoEnviado';

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route path='/' exact>
          <Inicio/>
          <Slidershow />
          <Servicios />
          <Footer />
          
        </Route>
        <Route path='/formulario'>
          <Formulario/>
          <Footer />
        </Route>
        <Route path='/enviado'>
          <DatoEnviado />
          <Footer />
        </Route>
      </Switch>
      
    </Router>
  
  );
}

export default App;
