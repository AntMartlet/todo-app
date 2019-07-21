import React, {useState} from "react";
import {inject, observer} from 'mobx-react';
import styled from 'styled-components';

const LoginWrapper = styled.div`
    background-color: #2b3137;
    padding: 20px 0;
    width: 100%;
`;

const LoginForm = styled.form`
    background-color: #fafbfc;
    border-radius: 5px;
    color: #586069;
    padding: 30px;
    margin: 0 auto;
    width: 30%;
`;

const LoginContainer = styled.div`
    margin-bottom: 20px;
`;

const LoginLabel = styled.p`
    font-size: 16px;
    line-height: 1.5;
    margin-bottom: 6px;
`;

const LoginInputs = styled.input`
    border-radius: 5px;
    border: 1px solid #d1d5da;
    box-sizing: border-box;
    box-shadow: inset 0 1px 2px rgba(27,31,35,.075);
    font-size: 16px;
    min-height: 46px;
    padding: 10px;
    width: 100%;
`;

const LoginButton = styled.button`
    background-color: #28a745;
    border: none;
    border-radius: 3px;
    color: #fff;
    cursor: pointer;
    display: inline-block;
    font-size: 18px;
    font-weight: 500;
    height: 66px
    padding: 16px 24px;
    transition: .2s;
    user-select: none;
    vertical-align: middle;
    width: 100%;
    white-space: nowrap;
`;

const LoginErrorMessage = styled.p`
    color: red;
    font-size: 16px;
`;


const preventDefault = (action, ...args) => event => {
    event.preventDefault();
    action(...args);
}

const getTargetValue = (action) => event => {
    action(event.target.value);
}

function Login({logIn, logInErrorMessage}) {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    return (
        <LoginWrapper>
            <LoginForm>
                <LoginContainer>
                    <LoginLabel>Login</LoginLabel>
                    <LoginInputs onChange={getTargetValue(setLogin)} value={login} />
                </LoginContainer>
                <LoginContainer>
                    <LoginLabel>Password</LoginLabel>
                    <LoginInputs onChange={getTargetValue(setPassword)} value={password} type={"password"} />
                </LoginContainer>
                {logInErrorMessage ? <LoginErrorMessage>{logInErrorMessage}</LoginErrorMessage> : null}
                <LoginButton onClick={preventDefault(logIn, {login, password})}>Sign up for Todo-App</LoginButton>
            </LoginForm>
        </LoginWrapper>
    );
}

const mapper = ({store}) => ({
    logIn: store.logIn,
    logInErrorMessage: store.logInErrorMessage
});


export default inject(mapper)(observer(Login))
