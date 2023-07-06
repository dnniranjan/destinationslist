import {Component} from 'react'
import DestinationItem from '../DestinationItem'
import './index.css'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  onSearchInput = event => {
    this.state({searchInput: event.target.value.toLowerCase()})
  }

  render() {
    const {destinationsList} = this.props
    const {searchInput} = this.state
    const searchResults = destinationsList.filter(eachItem =>
      eachItem.name.includes(searchInput),
    )

    return (
      <div>
        <div className="container">
          <h1>Destination Search</h1>
          <div className="searchcard">
            <input
              className="inputeleme"
              type="search"
              onChange={this.onSearchInput}
              value={searchInput}
            />
            <img
              className="searchimage"
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
              alt="searchicon"
            />
          </div>
          <ul className="cardalign">
            {searchResults.map(eachItem => (
              <DestinationItem destinationsList={eachItem} key={eachItem.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default DestinationSearch
