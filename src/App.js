import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Addcolor from './components/Addcolor/Addcolor';
import Addimg from './components/Addimg/Addimg';
import Addtext from './components/Addtext/Addtext';
import MuiDrawer from './components/MuiDrawer/MuiDrawe';
import Upload from './components/Upload/Upload';
import Home from './pages/Home';

function App() {
  return (
    <div>


      <BrowserRouter>
        <Switch>
          <Route path='/'>
            <Home></Home>
          </Route>

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
