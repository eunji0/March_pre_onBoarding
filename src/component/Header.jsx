import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LeftHeader = styled.div`
    border-right: 1px solid #999696;
    width: 100px;
    display: flex;
    flex-direction: row;
    height: 640px;
`

const InnerHeader =styled.div`
    width: 100%;
`

const ButtonPage = styled.div`
    font-weight: 600;
    color: #222222;
    margin-top: 30px;
    margin-left: 20px;
`

const LinkBtn = styled.div`
color:#222;
&:hover {
    color: #589CCF;
}
`

function Header() {
  return (
    <div>
      <LeftHeader>
        <InnerHeader>
        <ButtonPage><Link to="/pageA" style={{textDecoration: 'none'}}><LinkBtn>Page A</LinkBtn></Link></ButtonPage>
        <ButtonPage><Link to="/pageB" style={{textDecoration: 'none'}}><LinkBtn>Page B</LinkBtn></Link></ButtonPage>
        <ButtonPage><Link to="/pageC" style={{textDecoration: 'none'}}><LinkBtn>Page C</LinkBtn></Link></ButtonPage>
        </InnerHeader>
      </LeftHeader>
    </div>
  )
}

export default Header
