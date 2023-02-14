import React, { useContext } from 'react';

import { Route, Redirect } from 'react-router-dom';
import { GlobalContext } from 'context';

// handle the public routes

function PublicRoute({ component: Component, layout: Layout }) {

    const { state: { isLoggedIn } } = useContext(GlobalContext);

    if (isLoggedIn) {
        return <Route><Redirect to='/' /></Route>
    }

    return <Route exact><Layout><Component /></Layout> </Route>
}

export default PublicRoute;