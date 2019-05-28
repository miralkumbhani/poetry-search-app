import React, {Component} from 'react';

class Details extends Component {
  state = {
    details: []
  };

  componentDidMount() {
    fetch('https://thundercomb-poetry-db-v1.p.rapidapi.com/title/Sonnet%2018', {
      headers: {
        'X-RapidAPI-Host': 'thundercomb-poetry-db-v1.p.rapidapi.com',
        'X-RapidAPI-Key': '849048fdc9msh7d00635b6a1df99p1fac27jsn4e7ecf77d552'
      }
    })
    .then(response => response.json())
    .then(json => this.setState({ details: json }))
  }

  render() {
    return (
      <div>
        { this.state.details.map((item, index) => <h3 key={index}>{item.title}</h3>) }
      </div>
    )
  }
}

export default Details;
