import React from 'react';
import {inject, observer} from 'mobx-react';
import {Redirect} from 'react-router-dom'

const Protected = (isAuthRequired, redirect) => (
    Children
) => inject(({store}) => ({
    currentUser: store.currentUser
}))(observer(({currentUser, ...props}) => {
    const hasAccess = isAuthRequired ? !!currentUser : !currentUser;
    return hasAccess ? <Children {...props} /> : <Redirect to={redirect}/>
}));

export const NoAuthorization = Protected(false, '/list')
export const WithAuthorization = Protected(true, '/')