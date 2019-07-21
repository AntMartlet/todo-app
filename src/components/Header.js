import React from "react";
import {inject, observer} from 'mobx-react';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const HeaderTitle = styled.h1`
    margin-left: auto;
    margin-right: auto;
`;

const HeaderInfo = styled.div`
    display: flex;
`;

const HeaderHelloText = styled.div`
    align-self: center;
    font-weight: 600;
    padding-right: 16px;
`;

const HeaderButton = styled.button`
    border: 1px solid #2a5885;
    border-radius: 3px;
    color: #2a5885;
    line-height: 30px;
    padding: 0 15px;
    margin-right: 15px;
    height: 30px;
`;

function Header({currentUser, logOut}) {
    return (
        <HeaderWrapper>
            <HeaderTitle>ToDoApp</HeaderTitle>
            {currentUser ? (
                <HeaderInfo>
                    <HeaderHelloText>Welcome {currentUser.firstName} {currentUser.lastName}!</HeaderHelloText>
                    <HeaderButton onClick={logOut}>Log out</HeaderButton>
                </HeaderInfo>
            ) : null }
        </HeaderWrapper>
    );
}

const mapper = ({store}) => ({
    currentUser: store.currentUser,
    logOut: store.logOut
});


export default inject(mapper)(observer(Header))
