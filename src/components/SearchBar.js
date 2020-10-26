import './SearchBar.css'
import React from 'react';
 

class SearchBar extends React.Component {

    state = { query: '' };

    onInputChange = event => {
        this.setState({ query: event.target.value })
    };

    onFormSubmit = event => {
        event.preventDefault();
        this.props.onFormSubmit(this.state.query);
    }


    render() {
        return (
            <div className="sticky-block search-bar ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label>Video Search</label>
                        <input value={this.state.query} onChange={this.onInputChange} />
                    </div>

                </form>
            </div>
        )
    }
}


export default SearchBar;