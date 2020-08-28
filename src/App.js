import React from 'react';
import { Switch, Route } from 'react-router-dom';
import logo from './trivia.png';
import Inicio from './Pages/Inicio';
import Jogo from './Pages/Jogo';
import Feedback from './Pages/Feedback';
import Ranking from './Pages/Ranking';
import NotFound from './Pages/NotFound';
import Config from './Pages/Config';
import './App.css';

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Switch>
          <Route path="/config" component={Config} />
          <Route path="/jogo" component={Jogo} />
          <Route path="/ranking" component={Ranking} />
          <Route path="/feedback" component={Feedback} />
          <Route path="/:error" component={NotFound} />
          <Route exact path="/" component={Inicio} />
        </Switch>
      </header>
    </div>
  );
}
