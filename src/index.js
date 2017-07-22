import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './components/app';
import FavoriteRecipeList from './components/favorite-recipe-list';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';

const store = createStore(rootReducer);
store.subscribe(() => console.log('state', store.getState()));

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={App} /> // We need 'exact', otherwise the path will match everything that starts with a ''/''
                <Route path='/favorites' component={FavoriteRecipeList} />
            </Switch>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
