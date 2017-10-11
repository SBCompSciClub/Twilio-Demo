import React, { Component } from 'react';
import WordCloud from 'wordcloud'
import authentication from './authentication.json';
//const client = require('twilio')(authentication.sid, authentication.token);
class App extends Component
{
    render()
    {
        return (
            <div className="App">
                
            </div>
        );
    }
    componentDidMount()
    {
        /*client.messages.create(
            {
                to: '+17323050757',
                from: '+19083325411',
                body: "Loaded",
            })
            .then((message) => console.log(message.sid));*/
        WordCloud(document.getElementById("wordle-container"), { list: [['test', 10], ['testing', 50]] });
    }
}

export default App;
