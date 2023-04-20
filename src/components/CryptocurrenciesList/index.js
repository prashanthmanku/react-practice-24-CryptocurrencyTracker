// Write your JS code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import CryptocurrencyItem from '../CryptocurrencyItem'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

class CryptocurrenciesList extends Component {
  state = {cryptocurrencyData: [], isLoading: true}

  componentDidMount() {
    this.getCryptocurrencyData()
  }

  getCryptocurrencyData = async () => {
    const responce = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await responce.json()

    const updatedData = data.map(each => ({
      currencyLogo: each.currency_logo,
      currencyName: each.currency_name,
      euroValue: each.euro_value,
      id: each.id,
      usdValue: each.usd_value,
    }))
    console.log(updatedData)
    this.setState({cryptocurrencyData: updatedData, isLoading: false})
  }

  renderCryptocurrenciesList = () => {
    const {cryptocurrencyData} = this.state
    return (
      <>
        <h1 className="main-hedding">Cryptocurrency Tracker</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
          className="cryptocurrency-img"
        />
        <ul className="list-container">
          <div className="header-container">
            <p className="list-header-text header">Coin Type</p>
            <div className="currency-type-container">
              <p className="list-header-text">USD</p>
              <p className="list-header-text type">EURO</p>
            </div>
          </div>
          {cryptocurrencyData.map(each => (
            <CryptocurrencyItem currencyDetails={each} key={each.id} />
          ))}
        </ul>
      </>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <div className="cryptocurrency-list-container">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Rings" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          this.renderCryptocurrenciesList()
        )}
      </div>
    )
  }
}
export default CryptocurrenciesList
