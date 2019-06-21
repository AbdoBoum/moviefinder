import React from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from "redux";

import Navbar from "./layout/Navbar";

class App extends React.Component {
    render() {
        return (
            <Provider>
                <React.Fragment>
                    <Navbar/>
                </React.Fragment>
            </Provider>
        );
    }
}

export default App;
