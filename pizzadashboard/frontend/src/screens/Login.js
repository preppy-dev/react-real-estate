import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { signin } from "./../actions/userActions";
import LoadingBox from "./../components/Loading";
import MessageBox from "./../components/MessageBox";
import PropTypes from 'prop-types';
import LogoClever from './../assets/logoclever.png'
import styled from "styled-components/macro";


const ContainerScroller = styled.div `
overflow: hidden;
background-color:#fff;
height:100vh;
`;

const LoginContainer = styled.div `
/* min-height: 100vh;
 */
min-height: calc(calc(49% - 260px));
padding-top: 70px;

width: 100%;
/* padding-top: 0; */
flex-direction: row;
margin-right: auto;
margin-left: auto;
/* padding-right: 20px;
padding-left: 20px; */
`;

const LoginContainerwrapper = styled.div `
transition: width .25s ease,margin .25s ease;
width: calc(49% - 260px);
display: flex;
min-height: calc(90vh - 75px);
flex-direction: column;
margin-right: auto;
margin-left: auto;
  

`;
function Login({setToken,location,history}) {
   const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  /* const redirect = location.search
  ? location.search.split("=")[1]
  : "/"; */

const dispatch = useDispatch();

const userSignin = useSelector((state) => state.userSignin);
const { userInfo, loading, error } = userSignin;

const submitHandler = (e) => {
  e.preventDefault();
  // TODO: sign in action
  dispatch(signin(email, password));
};
/* useEffect(() => {
  if (userInfo) {
    history.push(redirect);
  }
}, [history, redirect, userInfo]);
 */
  return (
    <ContainerScroller>
    <LoginContainer>
      <LoginContainerwrapper>
      <form className="form" onSubmit={submitHandler}>
        <div className="LogoLogin">
        <img src={LogoClever} width="150" alt="Logo clever systems"/>
          <h1>Access Restrito </h1>
          <p>Autenticação de usuários</p>
        </div>
        {loading && <LoadingBox></LoadingBox>}
        {error && <MessageBox variant="danger">{error}</MessageBox>}
        <div>
          <label htmlFor="email">Usuário</label>
          <input
            type="email"
            id="email"
            placeholder="Usuário"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            id="password"
            placeholder="Senha"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <label />
          <button className="primary" type="submit">
          Entrar
          </button>
        </div>
      </form>
      </LoginContainerwrapper>
    </LoginContainer>
    </ContainerScroller>
  )
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
}

export default Login
