import React from "react";
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const TaskLink = styled(Link)`
    display: block;
    text-decoration: none;
    color: black;
    margin-bottom: 20px;

    &:last-child {
        margin-bottom: 0;
    }
`;

const TaskContainer = styled.div`
    background-color: white;
    border-radius: 5px;
    padding: 16px;

    &:hover {
        box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    }
`;

const TaskTitle = styled.h4`
    font-size: 18px;
    margin-top: 0;
`;

const TaskText = styled.p`
    font-size: 16px;
`;

function Task({task}) {
    return (
        <TaskLink to={`/details/${task.id}`}>
            <TaskContainer>
                <TaskTitle>{task.name}</TaskTitle>
                <TaskText>Author: {task.author}</TaskText>
                <TaskText>Asignee: {task.asignee}</TaskText>
                <TaskText>Estimate: {task.estimate}</TaskText>
            </TaskContainer>
        </TaskLink>
    );
}

export default Task;