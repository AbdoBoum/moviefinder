import React from 'react';

import MovieList from '../movie/MovieList';
import Search from "../movie/Search";

const Index = () => {

    return (
        <div className="container">
            <Search/>
            <MovieList/>
        </div>
    );
};

export default Index;
