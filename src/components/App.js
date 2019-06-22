import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Navbar from "./layout/Navbar";
import Index from "./layout/Index";
import MovieDetail from "./movie/MovieDetail";

class App extends React.Component {
    render() {

        return (
            <Router>
                <React.Fragment>
                    <Navbar/>
                    <Switch>
                        <Route exact path="/" component={Index}/>
                        <Route exact path="/movies/:id" component={MovieDetail}/>
                    </Switch>
                </React.Fragment>
            </Router>
        );
    }
}

export default App;
