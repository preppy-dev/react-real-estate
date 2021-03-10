import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { signout } from '../actions/userActions';
import Profil from './../assets/profil.png'
import styled from "styled-components/macro"


const DropdownContainer = styled.div `
background-color:#fff;
padding:1vh;
width:30vh;
`;
const DropdownVisible = styled.div `
display:flex;
align-items:center;

`;
const DropdownNovisible = styled.div `


`;

function Logon() {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(signout());
  };
  return (
    <DropdownContainer >
     <DropdownVisible>
     <img src={Profil} alt="profil ocone"/>
      <div>
        <p>{userInfo.email}</p>
        <p>{userInfo.name}</p>
      </div>
      <span><i class="fa fa-caret-down" aria-hidden="true"></i>{" "}</span>
     </DropdownVisible>
     <DropdownNovisible>
      <ul className="dropdown-content">
                  <Link to="#signout">
                    {" "}
                    Trocar Senha
                  </Link>
                  <Link to="#signout" onClick={signoutHandler}>
                    {" "}
                    Sair
                  </Link>
          </ul>
          </DropdownNovisible>
    </DropdownContainer >
    
  )
}

export default Logon
