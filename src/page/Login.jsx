import React from 'react';
import styled from 'styled-components';

const Back = styled.div`
    width: 100%;
    height: 700px;
    display: flex;
    justify-content: center;
    align-content: center;
    text-align: center;
`

const Backin = styled.div`
    width: 600px;
    height: 300px;
    margin: auto;
    display: flex;
    flex-direction: row;
`

const LBox = styled.div`
    width: 70%;
    display: flex;
    justify-content: center;
    flex-direction: column;
`

const RBox = styled.div`
    width: 30%;
    display: flex;
    justify-content: center;
    flex-direction: column;
`

const Boxin = styled.div`
    width: 80%;
    height: 50%;
    margin-top: 70px;
`

const NameBox = styled.input`
    width: 100%;
    height: 50px;
    border-radius: 5px;
    border: 1px solid #706f6f;
`

const PasswordBox = styled.input`
    width: 100%;
    height: 50px;
    border-radius: 5px;
    margin-top: 20px;
    border: 1px solid #706f6f;
`

const BtnLogin = styled.button`
    width: 150px;
    height: 120px;
    border: 1px solid orange;
    border-radius: 10px;
    background-color: orange;
`

function Login() {
  return (
    <div>
        <Back>
            <Backin>
                <LBox>
                    <Boxin>
                        <NameBox placeholder='유저네임을 입력해주세요.'></NameBox>
                        <PasswordBox placeholder='비밀번호를 입력해주세요.'></PasswordBox>
                    </Boxin>
                </LBox>
                <RBox>
                    <Boxin>
                        <BtnLogin>로그인</BtnLogin>
                    </Boxin>
                </RBox>
            </Backin>
        </Back>
    </div>
  )
}

export default Login
