import { render } from "@testing-library/react"
import React from "react"
import quotes from '../../data/quoteData.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import NumFormatter  from '../../helpers/helpers';
import QuoteDetails from './QuoteDetails';

class Quote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quoteData: [],
      isLoaded: false,
      searchKey: "",
      validSymbol : false
    };
  }

  
   handleSearchKeyChange = (e) => {
       this.setState({
           searchKey : e.target.value

       })
  };

  // To handle the "enter" key event after user types symbol
  handleKeyDown = (e) => {
      this.handleSearchClick(); 
  }

  handleSearchClick = (e) => {
      var searchResult = quotes.data.filter(quote => quote.Symbol === this.state.searchKey.toUpperCase())
      this.setState({
          quoteData : searchResult[0],
          validSymbol : true
      })
  }

  render() {

    let content = null
    var { isLoaded, quoteData } = this.state;

      return (
        <div datatest-id="quotesearch" className="mt-5">

          <div className="input-group mb-3">
            <input type="text" id="symbol-lookup" onChange={this.handleSearchKeyChange}
              onKeyDown={this.handleKeyDown}
              value={this.state.searchVal} placeholder="Symbol Lookup" aria-label="Symbol Lookup" aria-describedby="basic-addon2" />
            <div className="input-group-append">
              <span className="input-group-text" id="basic-addon2">
                <FontAwesomeIcon icon={faMagnifyingGlass} onClick={this.handleSearchClick} id="search-click"/>
              </span>
            </div>
          </div>
          <hr />
          {this.state.validSymbol ? <QuoteDetails quoteData={quoteData}></QuoteDetails> : ""}
          
        </div>
      );
    
  }
}

export default Quote;