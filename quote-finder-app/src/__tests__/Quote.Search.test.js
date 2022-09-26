import React from 'react'
import { render, fireEvent, cleanup } from '@testing-library/react'
import { screen, within } from '@testing-library/dom'


afterEach(cleanup); 
import Quote from '../components/QuoteSearch/Quote'
import QuoteDetails from '../components/QuoteSearch/QuoteDetails'


it('should render quote component without crashing', () => {
  const div = document.createElement("div");
  render(<Quote />)

})

it('should render quote details component without crashing', () => {
    render(<QuoteDetails />);
    
  })

  // it('should render content', () => {
  //   const quoteData = {
  //     "data":
  //       {
  //         "id": "1",
  //         "Name": "Microsoft",
  //         "Symbol": "MSFT",
  //         "LastPrice": "72.55",
  //         "Change" : "0.51999999996",
  //         "ChangePercent" : "0.72463769811594415",
  //         "MSDate" : "42891",
  //         "MarketCap":"558038824200",
  //         "Volume" : "33316760",
  //         "ChangeYTD": "62.14",
  //         "ChangePercentYTD" : "16.3179916317992",
  //         "High" : "72.89",
  //         "Low" : "71.87",
  //         "Open": "71.97",
  //         "TimeStamp": "2022-09-21T23:26:41.923Z"
  
  
  //       }
  //   };
  //   screen.debug();
  //   const {getByTestId} = render(<QuoteDetails quoteData={quoteData}/>);
  //   expect(getByTestId('quotecontent')).toBeInTheDocument();
    
  // })

  // it('should throw error message to enter valid symbol', () => {
  //   const quoteData = {};
  //   //const el = screen.getByText('Please', { exact: false })
  //   //expect(el.textContent).toEqual('Please enter valid symbol');
  //   const {queryByTestId} =render(<QuoteDetails quoteData={quoteData}/>);
  //   expect(queryByTestId('quote-error').textContent).toBe('Please enter valid symbol')
  //   //const linkElement = screen.getByText(/Please enter valid symbol/i);
  //   //expect(linkElement).not.toBeInTheDocument()//toHaveTextContent(/Please enter valid symbol/);
  //   //expect(getByTestId('quote-content')).not.toBeInTheDocument();

  // })

  // it('should throw error to enter valid symbol', () => {
  //   const quoteData = {};
  //   const {getByTestId} = screen.getByText()
  //   //expect(getByTestId('quote-error')).toBeInTheDocument()
  //   //const linkElement = screen.getByText("Please enter valid symbol");
  //   expect(linkElement).toBeInTheDocument();

  // })