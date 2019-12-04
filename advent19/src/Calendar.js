import React, { Component } from 'react';
import './App.css';

const list25 = () => {
    let list = [];
    for (var i = 1; i <= 25; i++) {
        list.push(i);
    }
    return list;
}

class Calendar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displayDay: "0.html",
            overlayActive: false
        };
    }
    list25 = () => {
        let list = [];
        for (var i = 1; i <= 25; i++) {
            list.push({ key: i, number: i, star: false });
        }
        return list;
    }
    onClick = (num) => {
        let filestring = num + ".html"
        this.setState(state => ({
            displayDay: filestring,
            overlayActive: true
        }));
    }
    close = () => {
        this.setState(state => ({
            overlayActive: false,
            displayDay: "0.html"
        }))
    }
    render() {
        let numbers = list25();
        let isCompleted = [1, 2]
        const { overlayActive, displayDay } = this.state;
        return (
            <div className="calendar-wrapper">
            {overlayActive ? 
                    <div className="calendar-overlay">
                        <a onClick={this.close} className="close-overlay">
                            x
                        </a>
                        <iframe src={displayDay}/>
                    </div>
            : null }
                <div className="advent-grid">
                    {numbers && numbers.map((number, index) => (
                        <button
                            className="App-link"
                            key={index}
                            onClick={() => this.onClick(number)}
                        >
                            {number}
                            {isCompleted.indexOf(index+1) !== -1 &&
                                <span className="star">
                                    *
                                </span> 
                            }
                        </button>
                    ))}
                </div>
            </div>
        );
    }
}

export default Calendar