import React from 'react'
import styled from "styled-components/macro"

const SideBarSection = styled.section`
width:30vh;
background-color:#fff;
height:100vh;
position: fixed;
`;
const SideBarSectionWrapper = styled.div`

`;
const SideBarHead = styled.div`

`;
const SideBarNav = styled.div`

`;
const SideBarLogout = styled.div`

`;
const SideBarCopyRight = styled.div`

`;
function Sidebar(props) {
  return (
    <SideBarSection>
      <SideBarSectionWrapper>
        <SideBarHead>
          <div>
            <img src="" alt=""/>
          </div>
          <div>
          <h1>Rota de casa</h1>
          </div>
        </SideBarHead>
        <SideBarNav>

        </SideBarNav>
        <SideBarLogout>

        </SideBarLogout>
        <SideBarCopyRight>

        </SideBarCopyRight>
      </SideBarSectionWrapper>
    </SideBarSection>
  )
}

export default Sidebar
