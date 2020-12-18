import React, {Component} from 'react'

export default class Buttons extends Component {
  render() {
    return (
      <div className='buttons'>
          <button className='prev' onClick={this.props.previous}>Previous</button>
          <button className='next' onClick={this.props.next}>Next</button>
      </div>
    )
  }
} 