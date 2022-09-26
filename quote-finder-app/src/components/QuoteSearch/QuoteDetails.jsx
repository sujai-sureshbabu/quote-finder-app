import React from 'react'
import NumFormatter  from '../../helpers/helpers';
import PositiveOrNegativeIndicator  from '../../helpers/helpers';
import '../QuoteSearch/Quote.css'

const QuoteDetails = ({quoteData}) => {

    if(quoteData){

    return (
        <div id="quotecontent">
          <h1>{quoteData.Name} ({quoteData.Symbol})</h1>
          <div className="row">
            <div className="col-md-2" style={{ fontSize: "35px" }}>
              {quoteData.LastPrice}
            </div>
            <div className="col-md-1 quoteDetailsStyle" style={{ fontSize: "35px" }}>
              {Math.round(quoteData.Change * 100) / 100}
            </div>
            <div className="col-md-1 quoteDetailsStyle" style={{ fontSize: "35px" }}>
              (%{Math.round(quoteData.ChangePercent * 100) / 100})
            </div>
          </div>
          <p>As of {new Date(quoteData.TimeStamp).toTimeString()}</p>
          <hr />
          <div className="row">
            <div className="col-md-2">Range </div>
            <div className="col-md-2">{quoteData.Low} - {quoteData.High} </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-md-2">Open </div>
            <div className="col-md-2">{quoteData.Open} </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-md-2">Volume </div>
            <div className="col-md-2">{NumFormatter(quoteData.Volume)} </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-md-2">MarketCap </div>
            <div className="col-md-2">{NumFormatter(quoteData.MarketCap)} </div>
          </div>
          <hr />

        </div>
    );
    }
    else{
        return <p data-testid="quote-error">Please enter valid symbol</p>
    }
    

}

export default QuoteDetails;