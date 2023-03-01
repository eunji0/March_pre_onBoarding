import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Topheader = styled.div`
    height: 50px;
    width: 100%;
    border-bottom: 1px solid #999696;
`

const Title = styled.div`
    display: flex;
    align-items: center;
    margin-top: 20px;
    font-weight: 600;
    margin-left: 30px;
    color: #222;
`


function TopHeader() {
  return (
    <div>
      <Topheader><Link to="/" style={{textDecoration: 'none'}}><Title>Wanted Pre-onboarding course</Title></Link></Topheader>
    </div>
  )
}

export default TopHeader