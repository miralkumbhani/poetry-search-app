import React, {Component} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Details.css';
class Details extends Component {
  state = {
    showBlock: false,
    showErrorBlock: false,
    inputVal: '',
    details: [],
    choice: 'title',
    title: '',
    author: '',
    lines: '',
    linecount: 0
  };

  urlString = 'https://thundercomb-poetry-db-v1.p.rapidapi.com/' ;

  handleSearch = event => {
    if (this.state.choice && (this.state.title || this.state.author || this.state.lines || this.state.linecount)) {
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

        case 'linecount':
          this.urlString = this.urlString + this.state.choice + '/' + this.state.linecount;
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
        if (json) {
          if (json.length === 1 && json.status !== 404) {
            json.map(item => {
              if (item.title === this.state.title ||
                  item.author.includes(this.state.author) ||
                  item.lines.includes(this.state.lines)) {
                this.setState({ details: item, showBlock: true, showErrorBlock: false });
                toast.success('Data found successfully.')
              }
              return this.state.details;
            });
          } else if (json.status === 404) {
            this.handleReset();
            this.setState({ showBlock: false });
            toast.error('Data not found.');
          } else if (json.length !== 1) {
            this.setState({ showBlock: false });
            toast.info('There are ' + json.length + ' results found for your search!', { autoClose: 3000 });
          }
        }
      });
    } else {
      this.handleReset();
      this.setState({ showErrorBlock: true });
    }
  }

  handleRadioBtnChange = event => {
    this.setState({ choice: event.target.value });
  }

  handleInputChange = event => {
    this.setState({ inputVal: event.target.value });
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

      case 'linecount':
        this.setState({ linecount: event.target.value });
        break;

      default:
        this.setState({ title: event.target.value });
        break;
    }
  }

  handleReset = () => {
    this.setState({
      showBlock: false,
      showErrorBlock: false,
      inputVal: '',
      details: [],
      choice: 'title',
      title: '',
      author: '',
      lines: ''
    });
    this.urlString = 'https://thundercomb-poetry-db-v1.p.rapidapi.com/';
  }

  render() {
    return (
      <div className="form-container">
        <ToastContainer position={toast.POSITION.TOP_CENTER} hideProgressBar={true} autoClose={1500}/>
        {
          !this.state.showBlock &&
          <div className="form">
            <div className="radio-btn-group form-group">
              <p>Please select what you want to search from the below:</p>
              <div className="radio-btn-container">
                <input type="radio" name="choice" value="title" onChange={this.handleRadioBtnChange.bind(this)} checked={this.state.choice === 'title'}/>
                <label className="form-label" htmlFor="choice">Title</label>
                <input type="radio" name="choice" value="author" onChange={this.handleRadioBtnChange.bind(this)} checked={this.state.choice === 'author'}/>
                <label className="form-label" htmlFor="choice">Author</label>
                <input type="radio" name="choice" value="lines" onChange={this.handleRadioBtnChange.bind(this)} checked={this.state.choice === 'lines'}/>
                <label className="form-label" htmlFor="choice">Lines</label>
                <input type="radio" name="choice" value="linecount" onChange={this.handleRadioBtnChange.bind(this)} checked={this.state.choice === 'linecount'}/>
                <label className="form-label" htmlFor="choice">Line Count</label>
                </div>
            </div>
            <div className="form-group">
              <input className="form-control" type="text" placeholder="Search Poem Title/Author/Lines Here..." value={this.state.inputVal} onChange={this.handleInputChange.bind(this)} />
            </div>
            { this.state.showErrorBlock &&
              <div className="error-block">
                <span>Please select the category and enter valid search text...</span>
              </div>
            }
            <div className="submit-btn-container">
              <button className="submit-btn" onClick={this.handleSearch.bind(this)}>Search</button>
            </div>
          </div>
        }
        {
          this.state.showBlock && this.state.details &&
          <div className="details-container">
            <div className="label-container">
              <label htmlFor="title" className="label-text">
                Title
              </label>:
              <span name="title" className="content-text">
                {this.state.details.title}
              </span><br />
            </div>
            <div className="label-container">
              <label htmlFor="author" className="label-text">
                Author
              </label>:
              <span name="author" className="content-text">
                {this.state.details.author}
              </span><br />
            </div>
            <div className="label-container">
              <label htmlFor="linecount" className="label-text">
                Line Count
              </label>:
              <span name="linecount" className="content-text">
                {this.state.details.linecount}
              </span><br />
            </div>
            <div className="label-container">
              <label htmlFor="lines" className="label-text">
                Lines
              </label>:
              { this.state.details.lines && this.state.details.lines.map((item, index) => {
                return <p key={index}>{item}</p>
              })}
            </div>
            <div className="search-btn-container mb-3">
              <button className="search-btn" onClick={this.handleReset.bind(this)}>Go Back</button>
            </div>
          </div>
        }
      </div>
    )
  }
}

export default Details;
