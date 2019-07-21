import { NEW, IN_PROGRESS, CODE_REWIEW, TESTING, DONE } from "../constants/statuses";

export const users = [
    {
        id: 1,
        firstName: 'one',
        lastName: 'and only',
        login: 'one_and_only',
        password: '123'
    }, {
        id: 2,
        firstName: 'second',
        lastName: 'one',
        login: 'second_one',
        password: 'insecurepassword'
    }
];

export const todos = [
    {
        id: 1,
        name: '111',
        description: '111 11 1111 1111',
        author: 'one o one',
        asignee: 'one and only',
        createdAt: '09.07.2009',
        priority: 3,
        estimate: 1,
        elapsedTime: 0,
        idAsignee: 1,
        status: NEW
    },{
        id: 2,
        name: '222',
        description: '222 22 2222 2222',
        author: 'one o one',
        asignee: 'second one',
        createdAt: '29.07.2029',
        priority: 2,
        estimate: 2,
        elapsedTime: 1,
        idAsignee: 2,
        status: IN_PROGRESS
    },{
        id: 3,
        name: '333',
        description: '333 33 3333 3333',
        author: 'one o one',
        asignee: 'one and only',
        createdAt: '09.07.2009',
        priority: 2,
        estimate: 3,
        elapsedTime: 0,
        idAsignee: 1,
        status: NEW
    },{
        id: 4,
        name: '444',
        description: '444 44 4444 4444',
        author: 'one o one',
        asignee: 'one and only',
        createdAt: '09.07.2009',
        priority: 1,
        estimate: 4,
        elapsedTime: 4,
        idAsignee: 1,
        status: TESTING
    },{
        id: 5,
        name: '555',
        description: '555 55 5555 5555',
        author: 'one o one',
        asignee: 'one and only',
        createdAt: '09.07.2009',
        priority: 2,
        estimate: 5,
        elapsedTime: 4.5,
        idAsignee: 1,
        status: TESTING
    },{
        id: 6,
        name: '666',
        description: '666 66 6666 6666',
        author: 'one o one',
        asignee: 'second one',
        createdAt: '09.07.2009',
        priority: 1,
        estimate: 6,
        elapsedTime: 0,
        idAsignee: 2,
        status: NEW
    },{
        id: 7,
        name: '777',
        description: '777 77 7777 7777',
        author: 'one o one',
        asignee: 'one and only',
        createdAt: '09.07.2009',
        priority: 2,
        estimate: 7,
        elapsedTime: 0,
        idAsignee: 1,
        status: NEW
    },{
        id: 8,
        name: '888',
        description: '888 88 8888 8888',
        author: 'one o one',
        asignee: 'one and only',
        createdAt: '09.07.2009',
        priority: 3,
        estimate: 8,
        elapsedTime: 7,
        idAsignee: 1,
        status: CODE_REWIEW
    },{
        id: 9,
        name: '999',
        description: '999 99 9999 9999',
        author: 'one o one',
        asignee: 'second one',
        createdAt: '09.07.2009',
        priority: 3,
        estimate: 9,
        elapsedTime: 0,
        idAsignee: 2,
        status: NEW
    },{
        id: 10,
        name: 'qqq',
        description: 'qqq qq qqqq qqqq',
        author: 'one o one',
        asignee: 'one and only',
        createdAt: '09.07.2009',
        priority: 2,
        estimate: 2.5,
        elapsedTime: 0,
        idAsignee: 1,
        status: NEW
    },{
        id: 11,
        name: 'www',
        description: 'www ww wwww wwww',
        author: 'one o one',
        asignee: 'one and only',
        createdAt: '09.07.2009',
        priority: 3,
        estimate: 3.5,
        elapsedTime: 3.5,
        idAsignee: 1,
        status: DONE
    },{
        id: 12,
        name: 'eee',
        description: 'eee ee eeee eeee',
        author: 'one o one',
        asignee: 'one and only',
        createdAt: '09.07.2009',
        priority: 2,
        estimate: 4.5,
        elapsedTime: 4.5,
        idAsignee: 1,
        status: DONE
    },
];
