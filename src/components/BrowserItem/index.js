import './index.css'

const BrowserItem = props => {
  const {historyDetails, onDelete} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = historyDetails

  const DeleteList = () => {
    onDelete(id)
  }
  return (
    <li className="history">
      <p className="time-stamp">{timeAccessed}</p>
      <div className="domain-details-container">
        <div className="domain-details">
          <img src={logoUrl} alt="domain logo" className="domain-logo" />
          <p className="title">{title}</p>
          <p className="domain-url">{domainUrl}</p>
        </div>
        <button type="button" className="delete-button">
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
            onClick={DeleteList}
          />
        </button>
      </div>
    </li>
  )
}

export default BrowserItem
