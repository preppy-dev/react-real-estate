import React, { useEffect, useState } from 'react'
import { Route, Switch } from "react-router-dom";
import Home from './screens/Home';
import Modulos from './screens/Modulos';
import Sistema from './screens/SistemaModulo/Sistema';
import Pizzaria from './screens/PizzariaModulo/Pizzaria';
import Sidebar from './components/Sidebar'
import Login from './screens/Login';
import styled from "styled-components/macro"
import { useSelector } from 'react-redux';

const RouteContainer = styled.div `
display:flex;
justify-content:space-between;
`;



function Routes() {
  const userSignin = useSelector((state) => state.userSignin);
const { userInfo, loading, error } = userSignin;

  const [token, setToken] = useState(userInfo);
  useEffect(() => {
    
    setToken(userInfo);
  
}, [userInfo]);


  if(!token) {
   return <Login />
  }

  return (
    
    <RouteContainer >
      <Sidebar />
      <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/sistema" component={Sistema} />
    <Route path="/pizzaria" component={Pizzaria} />
{/*     <Route path="/login" component={Login} />
 */}    <Route path="/modulos" component={Modulos} />
    </Switch>
    </RouteContainer>
  )
}

export default Routes
