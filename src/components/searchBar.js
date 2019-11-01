import React from 'react';

class searchBar extends React.Component {
    state = { term: '' }

    onInputChange = (e) => {
        this.setState({ term: e.target.value })
    }

    onFormSubmit = (e) => {
        e.preventDefault();

        this.props.onFormSubmit(this.state.term);
    }

    render() {
        return (
            <div className="ui segment">
                <form className="ui form">
                    <div className="ui icon input">
                        <input type="text" placeholder="Search..." onChange={this.onInputChange} />
                        <i className="inverted circular search link icon" onClick={this.onInputChange} />
                    </div>
                </form>
            </div>
        )
    }
}

export default searchBar;