import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Topheader = styled.div`
    height: 50px;
    border-bottom: 1px solid #999696;
    padding-top: 20px;
    font-weight: 600;
   
`

const Title = styled.div`
    display: flex;
    align-items: center;
    color: #222;
    margin-left: 30px;
`

const Login = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-right: 30px;
`

function TopHeader() {
    return (
        <div>
            <Topheader>
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <Title>Wanted Pre-onboarding course</Title>
                </Link>
                <Link to="/login" style={{ textDecoration: 'none' }}>
                    <Login>Login</Login>
                </Link>
            </Topheader>
        </div>
    )
}

export default TopHeader