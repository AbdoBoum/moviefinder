import React, {Component} from 'react';
import {connect} from "react-redux";

import {fetchMovieByQuery} from "../../actions";

class Search extends Component {

    state = {query: ''};

    onSearchSubmit = event => {
        event.preventDefault();
        this.props.fetchMovieByQuery(this.state.query);
        console.log(this.props.movies);
    };

    render() {
        return (
            <div className="card card-body mb-4 p-4">
                <h1 className="font-weight-normal display-4 text-center">
                    <i className="fas fa-film"/> Search For a Movie
                </h1>
                <p className="lead text-center">You provide a query string and we provide the closest match</p>
                <form onSubmit={this.onSearchSubmit}>
                    <div className="form-group">
                        <input type="text" className="form-control form-control-lg mb-3"
                               placeholder="Movie title..."
                               value={this.state.query}
                        onChange={e => this.setState({query: e.target.value})}/>
                        <button className="btn btn-primary btn-lg btn-block md-5" type="submit">Search</button>
                    </div>
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {movies: state.movies}
};

export default connect(mapStateToProps, {fetchMovieByQuery})(Search);
