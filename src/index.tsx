import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ApolloClient, ApolloProvider, InMemoryCache, HttpLink } from '@apollo/client';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import Continentsinfo from './data-fetching/continentsinfo';
import { Countries } from './components/Countries';
import { Countryinfo } from './data-fetching/countryinfo';
import { Languagesinfo } from './data-fetching/languagesinfo';
import { LanguagesSpoken } from './components/Views/LanguagesSpoken';
import { States } from './components/Views/States';

const createApolloClient = () => {
  return new ApolloClient({
    link: new HttpLink({
      uri: 'https://countries.trevorblades.com',
    }),
    cache: new InMemoryCache(),
  });
 };
 const client = createApolloClient();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <ApolloProvider client={client}>
    <Switch>
    <Route path="/countries" component={Countries} />
    <Route path="/country-info" component={Countryinfo} />
    <Route path="/languages-Spoken" component={LanguagesSpoken} />
    <Route path="/States-list" component={States} />
    <Route path="/continents-info" component={Continentsinfo} />
    <Route path="/languages-info" component={Languagesinfo} />
    <Route path="/" component={App} />
    </Switch>
    </ApolloProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
