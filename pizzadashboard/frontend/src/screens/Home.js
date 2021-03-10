import React from 'react'
import Logon from '../components/Logon'
import styled from "styled-components/macro"


const HeaderDashbord = styled.div `
display:flex;
width:70vh;
justify-content:space-between;

`;
const HeaderDashbordTitle = styled.div `
width:100%;
background-color:#fff;
`;

function Home() {
  
  return (
    <div>
      <HeaderDashbord>
      <HeaderDashbordTitle>
      <h1>Dashboard</h1>
      </HeaderDashbordTitle>
      <Logon/>
      </HeaderDashbord>
    </div>
  )
}

export default Home
