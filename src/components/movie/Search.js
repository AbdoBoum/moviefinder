import React, {Component} from 'react';

class Search extends Component {
    render() {
        return (
            <div className="card card-body mb-4 p-4">
                <h1 className="font-weight-normal display-4 text-center">
                    <i className="fas fa-film"/> Search For a Movie
                </h1>
                <p className="lead text-center">You provide a query string and we provide the closest match</p>
                <form>
                    <div className="form-group">
                        <input type="text" className="form-control form-control-lg mb-3" placeholder="Movie title..."/>
                        <button className="btn btn-primary btn-lg btn-block md-5" type="submit">Search</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default Search;
