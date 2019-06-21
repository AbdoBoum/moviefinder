import React from 'react';

import Navbar from "./layout/Navbar";
import Index from "./layout/Index";

class App extends React.Component {
    render() {

        return (
            <React.Fragment>
                <Navbar/>
                <Index/>
            </React.Fragment>
        );
    }
}

export default App;
