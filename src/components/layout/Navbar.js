import React from 'react';
import {Link} from "react-router-dom";

class Navbar extends React.Component{

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-5">
                <Link to="/" className="navbar-brand mb-0 h1 mx-auto">THE MOVIE DB</Link>
            </nav>
        );
    }
}

export default Navbar;
