import React from 'react';

class MovieItem extends React.Component {
    render() {
        const {movie} = this.props;
        const imgSrc = 'https://image.tmdb.org/t/p/w500/' + movie.poster_path;
        const {vote_average, original_title} = movie;
        return (
            <div className="col-md-3 mb-5">
                <div className="view overlay">
                    <img src={imgSrc} className="img-thumbnail" alt="zoom"/>
                    <div className="mask flex-center flex-column waves-effect rgba-black-strong">
                        <h2 className="font-weight-normal white-text mb-5 text-center">{original_title}</h2>
                        <i className="fas fa-star fa-5x amber-text mb-5"/>
                        <h3 className="font-weight-normal white-text text-center">{`${vote_average} / 10`}</h3>
                    </div>
                </div>
            </div>
        );
    }
}


export default MovieItem;
