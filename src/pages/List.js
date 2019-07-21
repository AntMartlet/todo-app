import React, {useEffect, Fragment} from "react";
import {inject, observer} from 'mobx-react';
import styled, { css } from 'styled-components';
import Task from '../components/Task';
import { STATUSES_TRANSLATION, COLOR_FOR_TRANSLATION } from "../constants/statuses";
import { ESTIMATE, PRIORITY } from "../constants/sorting";

const ListWrapper = styled.div`
    padding: 0 20px 20px;
`

const TextWarning = styled.p`
    color: red;
`

const WrapperTasks = styled.div`
    display: flex;
    width: 100%;
    margin-top: 10px;
`

const WrapperTasksList = styled(WrapperTasks)`
    flex-direction: column;
`

const Tasks = styled.div`
    background-color: ${(props) => props.colorize};
    box-shadow: 0 0 2px rgba(0,0,0,0.5);
    padding: 20px;
    width: calc(20% - 10px * ${(props) => props.len} / ${(props) => (props.len - 1)})};
    margin-right: 10px;
`;

const HeaderText = styled.h2`
    color: black;
`;

const TitleTasks = styled.h3`
    color: white;
    margin-top: 0;
`;

const ListButton = styled.button`
    margin-right: 20px;
    background: #2a5885;
    border: 0;
    border-radius: 3px;
    color: white;
    line-height: 30px;
    padding: 0 15px;
    margin-right: 15px;
    height: 30px;

    ${props => props.colorbtn && css`
        background: #630121;
    `}
    &:hover {
        background: #052646;
    }
`;

const ListContainerTask = styled.div`
    display: block;
    width: 40%;
    margin-bottom: 20px;
    border-bottom: 1px solid black;
`;

const ListTaskText = styled.p`
    font-size: 16px;
`;


function List({statusTodos, getTodos, sortedUserTodos, todosLength, changeTodoView, todoView, changeSorting, sorting}) {
    useEffect(() => {
        getTodos();
    }, [getTodos]);
    return (
        <ListWrapper>
            <HeaderText>List of todos</HeaderText>
            {statusTodos && todosLength ? (
                <Fragment>
                    <p>Общее количество задач: {todosLength}</p>
                    { todoView === "LIST" &&
                        <Fragment>
                            <ListButton colorbtn={sorting===PRIORITY} onClick={() => changeSorting(PRIORITY)}>Sort by priority</ListButton>
                            <ListButton colorbtn={sorting===ESTIMATE} onClick={() => changeSorting(ESTIMATE)}>Sort by estimate</ListButton>
                            <ListButton colorbtn={sorting===''} onClick={() => changeSorting()}>Default sorting</ListButton>
                        </Fragment>
                    }
                    <ListButton onClick={changeTodoView} >Change view</ListButton>
                        {todoView === "SCRUM" ?
                            <WrapperTasks>
                                {(Object.keys(statusTodos).map((status, index) => (
                                    <Tasks colorize={COLOR_FOR_TRANSLATION[status]} len={Object.keys(STATUSES_TRANSLATION).length + 1} key={index}>
                                        <TitleTasks>{STATUSES_TRANSLATION[status] || status}</TitleTasks>
                                        { statusTodos[status].map((todo) => <Task task={todo} key={todo.id}/>)}
                                    </Tasks>
                                )))}
                            </WrapperTasks>:
                            <WrapperTasksList>
                                {sortedUserTodos.map((todo) =>(
                                <ListContainerTask key={todo.id}>
                                    <ListTaskText>{todo.name}</ListTaskText>
                                    <ListTaskText>Author: {todo.author}</ListTaskText>
                                    <ListTaskText>Asignee: {todo.asignee}</ListTaskText>
                                    <ListTaskText>Estimate: {todo.estimate}</ListTaskText>
                                    <ListTaskText>Priority: {todo.priority}</ListTaskText>
                                </ListContainerTask>
                                ))}
                            </WrapperTasksList>
                        }
                </Fragment>
            ): (
                <TextWarning>No tasks here :( You should start planning!</TextWarning>
            )}
        </ListWrapper>
    );
}

const mapper = ({store}) => ({
    currentUser: store.currentUser,
    statusTodos: store.statusTodos,
    todosLength: store.todosLength,
    getTodos: store.getTodos,
    sortedUserTodos: store.sortedUserTodos,
    sorting: store.sorting,
    changeTodoView: store.changeTodoView,
    todoView: store.todoView,
    changeSorting: store.changeSorting
});


export default inject(mapper)(observer(List))
