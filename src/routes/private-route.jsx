import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { GlobalContext } from 'context';

// handle the private routes

function PrivateRoute({ component: Component, layout: Layout }) {

    const { state: { isLoggedIn } } = useContext(GlobalContext);


    return <Route>{isLoggedIn ? <Layout><Component /></Layout> : <Redirect exact to='/login' />}</Route>
}

export default PrivateRoute;