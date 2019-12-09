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
            list.push({ key: i, number: i });
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
        const isCompleted = [
            {day: 1, stars: "*"}, 
            {day: 2, stars: "**"},
            {day: 3, stars: "**"},
            {day: 4, stars: "**"},
            {day: 5, stars: "*"}
        ]
        const { overlayActive, displayDay } = this.state;
        console.log(isCompleted[0].day)
        return (
            <div className="calendar-wrapper">
            {overlayActive ? 
                    <div className="calendar-overlay">
                        {/* eslint-disable-next-line */}
                        <a onClick={this.close} className="close-overlay">
                            x
                        </a>
                        {/* eslint-disable-next-line */}
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
                            {(isCompleted[index] && isCompleted[index].day) === number &&
                                    <span className="star">
                                        {isCompleted[index].stars}
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