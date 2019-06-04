import React, {Component} from 'react';

class Results extends Component {
  state = {
    showBlock: false,
    showErrorBlock: false,
    showList: false,
    inputVal: '',
    details: [],
    choice: 'title',
    title: '',
    author: '',
    lines: '',
    linecount: 0,
    listOfResults: []
  };

  handleReset = () => {
    this.setState({
      showBlock: false,
      showErrorBlock: false,
      showList: false,
      inputVal: '',
      details: [],
      choice: 'title',
      title: '',
      author: '',
      lines: '',
      linecount: 0,
      listOfResults: []
    });
    this.urlString = 'https://thundercomb-poetry-db-v1.p.rapidapi.com/';
    this.props.callBackFromDetails(this.state);
  }

  render() {
    return(
      <div className="details-container">
        <div className="label-container">
          <label htmlFor="title" className="label-text">
            Title
          </label>:
          <span name="title" className="content-text">
            {this.props.stateObj.details.title}
          </span><br />
        </div>
        <div className="label-container">
          <label htmlFor="author" className="label-text">
            Author
          </label>:
          <span name="author" className="content-text">
            {this.props.stateObj.details.author}
          </span><br />
        </div>
        <div className="label-container">
          <label htmlFor="linecount" className="label-text">
            Line Count
          </label>:
          <span name="linecount" className="content-text">
            {this.props.stateObj.details.linecount}
          </span><br />
        </div>
        <div className="label-container">
          <label htmlFor="lines" className="label-text">
            Lines
          </label>:
          { this.props.stateObj.details.lines && this.props.stateObj.details.lines.map((item, index) => {
            return <p key={index}>{item}</p>
          })}
        </div>
        <div className="search-btn-container mb-3">
          <button className="search-btn" onClick={this.handleReset.bind(this)}>Go Back</button>
        </div>
      </div>
    )
  }
}

export default Results;
