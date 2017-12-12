import React, {Component} from 'react';
import './App.css';
import axios from 'axios';

class Quote extends Component {
    constructor(props) {
        super(props)
        this.state = {
            quote: "",
            author: ""
        }
    }

    render() {
        return (
            <blockquote>
                <p>{this.state.quote}</p>
                <footer>{this.state.author}</footer>
            </blockquote>
        );
    }

    componentDidMount() {
        this.getQuote();
    }

    getQuote() {
        axios.get("https://quotes.rest/qod").then(res => {
            let quote = res.data.contents.quotes[0];
            this.setState({
                quote: quote.quote,
                author: quote.author
            });
        })
    }
}

export default Quote;
