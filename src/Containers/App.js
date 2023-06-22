import React, { Component } from 'react';
import CardList from '../Components/CardList';
import Scroll from '../Components/Scroll';
import  { robots } from '../robots';
import SearchBox from '../Components/SearchBox';
import './App.css';
import ErrorBoundry from '../Components/ErrorBoundry';

class App extends Component {
    constructor() {
        super()
        this.state= {
            robots: robots,
            searchfield: ''
        }
    }

componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {
       return response.json();
    })
    .then(users => {
        this.setState({robots: users})
    })
}

onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
}

    render() {
        const { robots, searchfield } = this.state;
        const filteredRobots = robots.filter(robots => {
            return robots.name.toLowerCase().includes(searchfield.toLowerCase());
        })    
    if (!robots.length) {
        return <h1>Loading</h1>
    }
        return (
    
        <div className = 'tc'>
        <h1>RoboFriends!</h1>
        <SearchBox searchChange={this.onSearchChange}/>
        <Scroll>
            <ErrorBoundry>
        <CardList robots={filteredRobots}/>
             </ErrorBoundry>
        </Scroll>
       </div>
    );

}
}
export default App;