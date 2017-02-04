import React, {Component} from 'react';

class SearchBar extends Component {

    constructor(props) {
        super(props);

        this.textInputChange = this.textInputChange.bind(this);
        this.state = {term: ''}
    }

    textInputChange(e) {
        this.setState({term: e.target.value});
    }

    render() {
        return (
            <div className="search-bar">
                <input
                    type="text"
                    value={this.state.term}
                    onChange={this.textInputChange}
                />
            </div>
        );
    }
}

export default SearchBar;