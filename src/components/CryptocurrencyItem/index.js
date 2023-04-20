// Write your JS code here
import './index.css'

const CryptocurrencyItem = props => {
  const {currencyDetails} = props
  const {currencyLogo, currencyName, euroValue, usdValue} = currencyDetails
  return (
    <li className="CryptocurrencyItem-container">
      <div className="coin-type-container">
        <img
          src={currencyLogo}
          alt={currencyName}
          className="currency-type-img"
        />
        <p className="currence-name">{currencyName}</p>
      </div>
      <div className="currency-type-values-container">
        <p className="type-value value-usd">{usdValue}</p>
        <p className="type-value value-Euro">{euroValue}</p>
      </div>
    </li>
  )
}
export default CryptocurrencyItem
