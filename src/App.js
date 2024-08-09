import React from 'react';
// import React, { Component }  from 'react';

import $ from 'jquery';
import logo from './logo.svg';
import './App.css';
import Home from './Home';
import About from './About';
import Product from './Product';
import Blog from './Blog';
import Contact from './Contact';
import Login from './Login';
import Register from './Register';
import Recharge from './Recharge';
import Graphql from './Graphql';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MyPlan from './MyPlan';
// import { Mutation } from 'react-query';

const routerCon=createBrowserRouter([
 
  {"path":"/",element:<Login/>},
  {"path":"/login",element:<Login/>},
  {"path":"/home",element:<Home/>},
  {"path":"/about",element:<About/>},
  {"path":"/blog",element:<Blog/>},
  {"path":"/product",element:<Product/>},
  {"path":"/contact",element:<Contact/>},
  {"path":"/register",element:<Register/>},
  {"path":"/recharge",element:<Recharge/>},
  {"path":"/myplan",element:<MyPlan/>},
  {"path":"/graphql",element:<Graphql/>}
])

const client = new ApolloClient({
  uri: 'http://localhost:8000/',  cache: new InMemoryCache()// Replace with your GraphQL API endpoint

});
function App(){
  return(
    <div>
      {/* <Home/> */}
      <ApolloProvider client={client}>
      <RouterProvider router={routerCon}> </RouterProvider>
  </ApolloProvider>
    </div>
  );
}

export default App;
