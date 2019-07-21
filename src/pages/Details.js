import React, {useEffect, Fragment} from "react";
import styled from 'styled-components';
import {inject, observer} from 'mobx-react';
import {Link} from 'react-router-dom';

const DetailContainer = styled.div`
    background-color: white;
    border-radius: 5px;
    padding: 16px;
`;

const DetailLink = styled(Link)`
    padding: 16px;
`;

const DetailTitle = styled.h4`
    font-size: 18px;
    margin-top: 0;
`;

const DetailText = styled.p`
font-size: 16px;
`;

function Details({match, currentTodo, getTodoId}) {
    useEffect(() => {
        getTodoId(Number(match.params.id));
    }, [getTodoId, match.params.id]);

    console.log(currentTodo);
    return currentTodo ? (
        <Fragment>
            <DetailLink to={`/list`}>Back to List</DetailLink>
            <DetailContainer>
                <DetailTitle>Detail information Task {currentTodo.name}</DetailTitle>
                <DetailText>Status: {currentTodo.status}</DetailText>
                <DetailText>Priority: {currentTodo.priority}</DetailText>
                <DetailText>Author: {currentTodo.author}</DetailText>
                <DetailText>Asignee: {currentTodo.asignee}</DetailText>
                <DetailText>Estimate: {currentTodo.estimate}</DetailText>
                <DetailText>Elapsed Time: {currentTodo.elapsedTime}</DetailText>
                <DetailText>Created at: {currentTodo.createdAt}</DetailText>
                <DetailText>Description: {currentTodo.description}</DetailText>
            </DetailContainer>
        </Fragment>
        ): (<DetailLink to={`/list`}>Back to List</DetailLink>);
}


const mapper = ({store}) => ({
    currentTodo: store.currentTodo,
    getTodoId: store.getTodoId
});


export default inject(mapper)(observer(Details))