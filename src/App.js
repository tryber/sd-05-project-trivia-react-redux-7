import React from 'react';
import logo from './trivia.png';
import { Switch, Route } from 'react-router-dom';
import início from './Pages/início';
import jogo from './Pages/jogo';
import feedback from './Pages/feedback';
import NotFound from './Components/NotFound';
import './App.css';

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          SUA VEZ
        </p>
        <Switch>
          <Route path="/início" component={início} />
          <Route path="/jogo" component={jogo} />
          <Route path="/feedback" component={feedback} />
          <Route exact path="/" component={início} />
          <Route component={NotFound} />
        </Switch>
      </header>
    </div>
  );
}
