import React from 'react';
import {connect} from "react-redux";

import {fetchTrendingMovies} from "../../actions";
import MovieItem from "./MovieItem";
import Spinner from '../layout/Spinner';

class MovieList extends React.Component{
    componentDidMount() {
        this.props.fetchTrendingMovies();
    }

    renderList = () => {
        if (this.props.movies.length === 0) {
            return <Spinner />;
        }
      return this.props.movies.map(movie => {
          return <MovieItem key={movie.id} movie={movie}/>
      })
    };

    render() {
        const {movies} = this.props;
        console.log(movies);
        return(
            <div className="row">
                {this.renderList()}
            </div>
        );
    }
};

const mapStateToProps = state => {
  return {movies: state.movies, selectedMovie: state.selectedMovie}
};

export default connect(mapStateToProps, {fetchTrendingMovies})(MovieList);
