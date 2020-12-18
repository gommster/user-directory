import React, {Component} from 'react'
import Buttons from './buttons'
import data from './data'

class IdCard extends Component {
constructor() {
    super();
    this.state = {
        userIndex: 0,
        userData: data
    };

    this.previous = this.previous.bind(this);
    this.next = this.next.bind(this);
    }

    previous() {
    console.log(this)
    if(this.state.userIndex === 0)
        this.setState({userIndex:24})
    else
        this.setState({userIndex: this.state.userIndex-1})
    }

    next() {
    if(this.state.userIndex === 24)
        this.setState({userIndex: 0})
    else
        this.setState({userIndex: this.state.userIndex+1})
    }

    render() {
        return (
            <div className='idCard'>
                <h1>{this.state.userData[this.state.userIndex].name.first} {this.state.userData[this.state.userIndex].name.last}</h1>
                <p className='index'>{this.state.userData[this.state.userIndex].id}/25</p>
                <p><b>From:</b> {this.state.userData[this.state.userIndex].city}, {this.state.userData[this.state.userIndex].country}</p>
                <p><b>Job Title:</b> {this.state.userData[this.state.userIndex].title}</p>
                <p><b>Employer: </b>{this.state.userData[this.state.userIndex].employer}</p>
                <div>
                    <p><b>Favorite Movies:</b></p>
                    <ol>
                        <li>{this.state.userData[this.state.userIndex].favoriteMovies[0]}</li>
                        <li>{this.state.userData[this.state.userIndex].favoriteMovies[1]}</li>
                        <li>{this.state.userData[this.state.userIndex].favoriteMovies[2]}</li>
                    </ol>
                </div>
                <Buttons previous={this.previous} next={this.next}/>
            </div>
        )
    }
}

export default IdCard