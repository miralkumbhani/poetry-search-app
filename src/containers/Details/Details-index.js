import React, {Component} from 'react';
class Details extends Component {
  state = {
    details: [],
    choice: '',
    title: '',
    author: '',
    lines: ''
  };

  urlString = 'https://thundercomb-poetry-db-v1.p.rapidapi.com/' ;

  handleSearch = event => {
    switch (this.state.choice) {
      case 'title':
        this.urlString = this.urlString + this.state.choice + '/' + this.state.title;
        break;

      case 'author':
        this.urlString = this.urlString + this.state.choice + '/' + this.state.author;
        break;

      case 'lines':
        this.urlString = this.urlString + this.state.choice + '/' + this.state.lines;
        break;

      default:
        this.urlString = this.urlString + this.state.choice;
    }

    fetch(this.urlString, {
      headers: {
        'X-RapidAPI-Host': 'thundercomb-poetry-db-v1.p.rapidapi.com',
        'X-RapidAPI-Key': '849048fdc9msh7d00635b6a1df99p1fac27jsn4e7ecf77d552'
      }
    })
    .then(response => response.json())
    .then(json => {
      json.map(item => {
        if (item.title === this.state.title) {
          this.setState({ details: item });
        }
      });
    });
  }

  handleRadioBtnChange = event => {
    this.setState({ choice: event.target.value })
  }

  handleInputChange = event => {
    switch(this.state.choice) {
      case 'title':
        this.setState({ title: event.target.value });
        break;

      case 'author':
        this.setState({ author: event.target.value });
        break;

      case 'lines':
        this.setState({ lines: event.target.value });
        break;

      default:
        this.setState({ title: event.target.value });
        break;
    }
  }

  render() {
    return (
      <div className="form-container">
        <div className="form">
          <div className="radio-btn-group form-group">
            <p>Please select what you want to search from the below:</p>
            <input type="radio" name="choice" value="title" onChange={this.handleRadioBtnChange.bind(this)}/>
            <label htmlFor="choice">Title</label>
            <input type="radio" name="choice" value="author" onChange={this.handleRadioBtnChange.bind(this)}/>
            <label htmlFor="choice">Author</label>
            <input type="radio" name="choice" value="lines" onChange={this.handleRadioBtnChange.bind(this)}/>
            <label htmlFor="choice">Lines</label>
          </div>
          <div className="form-group">
            <input className="form-control" type="text" placeholder="Search Poem Title/Author/Lines Here..." onChange={this.handleInputChange.bind(this)} />
          </div>
          <div>
            <button onClick={this.handleSearch.bind(this)}>Submit</button>
          </div>
        </div>
        {
          this.state.details &&
          <div className="details-container">
            <label htmlFor="title">Title</label>:<span name="title">{this.state.details.title}</span><br />
            <label htmlFor="author">Author</label>:<span name="author">{this.state.details.author}</span><br />
            <label htmlFor="linecount">Line Count</label>:<span name="linecount">{this.state.details.linecount}</span><br />
            <label htmlFor="lines">Lines:</label>
            { this.state.details.lines && this.state.details.lines.map(item => {
              return <p>{item}</p>
            }) }
          </div>
        }
      </div>
    )
  }
}

export default Details;
