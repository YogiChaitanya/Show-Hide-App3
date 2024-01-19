// Write your code here

import {Component} from 'react'

import './index.css'

class ShowHide extends Component {
  state = {isBtnClicked1: false, isBtnClicked2: false}

  onClickHideShow1 = () => {
    this.setState(prevState => ({
      isBtnClicked1: !prevState.isBtnClicked1,
    }))
  }

  onClickHideShow2 = () => {
    this.setState(prevState => ({
      isBtnClicked2: !prevState.isBtnClicked2,
    }))
  }

  render() {
    const {isBtnClicked1, isBtnClicked2} = this.state

    return (
      <div className="bg-container">
        <h1 className="main-heading">Show/Hide</h1>
        <div className="card-container">
          <div className="name-container">
            <button
              onClick={this.onClickHideShow1}
              type="button"
              className="nameBtn"
            >
              Show/Hide Firstname
            </button>
            <div className="name-style">
              <p>{isBtnClicked1 && 'Joe'}</p>
            </div>
          </div>
          <div className="name-container">
            <button
              onClick={this.onClickHideShow2}
              type="button"
              className="nameBtn"
            >
              Show/Hide Lastname
            </button>
            <div className="name-style">
              <p>{isBtnClicked2 && 'Jonas'}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
