import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import logo from './bestlogo.svg';
import './App.css';

const App = () => {
  return (
    <Router>
      <div>
        <AppBar position="static" style={{ backgroundColor: 'slategray' }}>
          <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="menu">
              <img src={logo} alt="home-logo" style={{ height: '5vmin' }} />
            </IconButton>
            <Typography variant="h6" style={{ flexGrow: '1' }}>
              Fact App
            </Typography>
            <Button color="inherit">Login</Button>
            <Button color="inherit">Sign Up</Button>
          </Toolbar>
        </AppBar>
        <div style={{ minHeight: '500px' }}>
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/signin">
              <SignInForm />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

const Home = () => (
  <Container maxWidth="md" style={{ minHeight: 'inherit' }}>
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: 'inherit'
      }}
    >
      <Typography variant="h4">Fact App</Typography>
      <Typography variant="h6">by Brody and Brandon</Typography>
    </div>
  </Container>
);

const About = () => <h2>About</h2>;

const SignInForm = () => <h2>Sign In Form</h2>;

export default App;
