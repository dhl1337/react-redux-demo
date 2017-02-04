import React, {Component} from 'react';

class SearchBar extends Component {

    constructor(props) {
        super(props);

        this.onInputChange = this.onInputChange.bind(this);
        this.state = {term: ''}
    }

    onInputChange(e) {
        this.setState({term: e.target.value});
        this.props.onSearchTermChange(this.state.term);
    }

    render() {
        return (
            <div className="search-bar">
                <input
                    type="text"
                    value={this.state.term}
                    onChange={this.onInputChange}
                />
            </div>
        );
    }
}

export default SearchBar;