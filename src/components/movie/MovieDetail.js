import React from 'react';
import {connect} from "react-redux";
import {Link} from "react-router-dom";

import Spinner from '../layout/Spinner';
import {fetchMovie} from "../../actions";

class MovieDetail extends React.Component {
    componentDidMount() {
        this.props.fetchMovie(this.props.match.params.id);
    }

    render() {
        const {movie} = this.props;
        console.log(movie);
        if (!movie) {
            return (
                <div className="container"><Spinner/></div>
            );
        }
        const imgSrc = 'https://image.tmdb.org/t/p/w500/' + movie.backdrop_path;
        const genres = movie.genres.map(genre => {
            return ` ${genre.name} `;
        });
        return (
            <div className="container" style={{maxWidth: '500px'}}>
                <Link to="/" className="btn btn-dark btn-sm mb-4">Back</Link>
                <div className="card mb-5 mx-auto">
                    <div className="view overlay">
                        <img className="card-img" src={imgSrc} alt={movie.original_title}/>
                    </div>

                    <div className="card-body">

                        <h4 className="font-weight-normal mb-0 card-title text-center">{movie.original_title}</h4>
                        <p className="font-weight-normal indigo-text py-2 text-center">{genres}</p>
                        <hr/>
                        <p className="card-text">{movie.overview}</p>

                    </div>

                </div>

            </div>
        );
    }
}

const mapStateToProps = state => {
    return {movie: state.movie};
};

export default connect(mapStateToProps, {fetchMovie})(MovieDetail);
