import React, { Component } from 'react';

const StarContext = React.createContext({
    results: []
})

export default StarContext;

export class StarProvider extends Component {
    state = {
        results: []
    }
    setResults = results => {
      this.setState({ results })
      console.log(this.state.results)
    }
    setError (){
        
    }
    render(){
        const value = {
            results: this.state.results,
            setResults: this.setResults,
            setError: this.setError,
        }
        return (
            <StarContext.Provider value={ value }>
                {this.props.children}
            </StarContext.Provider>
        )
    }
}