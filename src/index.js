import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import registerServiceWorker from './registerServiceWorker';

import { Route, BrowserRouter } from 'react-router-dom';

import Login from './Pages/Login/Login';
import SignUp from './Pages/SignUp/SignUp';
import Profile from './Pages/Profile/Profile';
import Main from './Pages/Main/Main';

import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import rootReducer from './Reducers';

let store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
    <Provider store={store}>
        <div className="wrapper">
            <div className="content">
                <BrowserRouter >
                    <div>
                        <Header />
                        <Route exact path="/" component={Main} />
                        <Route path="/signup" component={SignUp} />
                        <Route path="/login" component={Login} />
                        <Route path="/profile" component={Profile} />
                    </div>
                </BrowserRouter>
            </div>
            <div id="footer">
                <Footer />
            </div>
        </div>
    </Provider>,
    document.getElementById('root'),
);

registerServiceWorker();
