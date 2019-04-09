import React, { Component } from 'react';

const StarContext = React.createContext({
    results: [],
    isLoading: false
})

export default StarContext;

export class StarProvider extends Component {
    state = {
        results: [],
        isLoading: false
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
            isLoading: this.state.isLoading,
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