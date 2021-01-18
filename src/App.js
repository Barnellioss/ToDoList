import { Alert } from './components/Alert';
import React from 'react'
import { BrowserRouter, HashRouter, Route, Switch } from 'react-router-dom'
import { Navbar } from './components/Navbar';
import { About } from './pages/About';
import { Home } from './pages/Home';
import { AlertState } from './context/alert/AlertState';
import { FirebaseState } from './context/firebase/FireBaseState';


function App() {
  return (
    <FirebaseState>
      <AlertState>
        <HashRouter>
          <Navbar />
          <div className="container pt-4">
            <Alert />
            <Switch>
              <Route path={'/'} exact component={Home} />
              <Route path={'/about'} component={About} />
            </Switch>
          </div>
        </HashRouter>
      </AlertState>
    </FirebaseState>
  );
}

export default App;
