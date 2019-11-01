import React from 'react';
import searchBar from './searchBar';
import food2fork from '../apis/food2fork';
import resultsItem from './resultsItem';
import resultsList from './resultsList';

class App extends React.Component {
    state = { recipes: [] }

    // Setting a default search parameter
    componentDidMount() {
        this.onTermSubmit('pasta');
    }
    // Api call
    onTermSubmit = async term => {
        const response = await food2fork.get('/search', {
            params: {
                query: term
            }
        })

        this.setState({ recipes: response.data.recipes })
    }

    render () {
        return (
            <div className="ui container">
                <searchBar onFormSubmit={this.onTermSubmit} />
                <div className="ui container">
                    <div className="ui row">
                        <resultsList recipes={this.state.recipes} />
                    </div>
                </div>
            </div>
        )
    } 
}

export default App;