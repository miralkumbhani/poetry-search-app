import React, {Component} from 'react';
import './Lists.css';
class Lists extends Component {

  constructor() {
    super();
    this.handleSelectedItem = this.handleSelectedItem.bind(this);
  }

  handleSelectedItem = (event) => {
    this.props.callBackDetails(event);
  }

  render() {
    return (
      <div className="list-of-links">
        <ol className="ordered-list">
        {
          this.props.stateObj.listOfResults && this.props.stateObj.listOfResults.map((item, index) => {
            return (
              <li key={index} className="list-item">
                <span>
                  <a className="result-link" value={item.author} key={index} onClick={() => this.handleSelectedItem(item)}>
                    {item.title}
                  </a> - {item.author}
                </span>
              </li>
            )
          })
        }
        </ol>
      </div>
    )
  }
}

export default Lists;
