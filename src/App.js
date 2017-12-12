import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import Quote from './Quote'

class App extends Component {
    constructor() {
        super()
        this.state = {}
    }

    render() {
        return (
            <div class="container">
                <h1>Quote of the day</h1>
                <Quote />
            </div>
        )
    }
}

export default App;
