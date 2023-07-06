import './index.css'

const DestinationItem = props => {
  const {destinationsList} = props
  const {name, imgUrl} = destinationsList
  return (
    <li className="list">
      <div className="desItem">
        <img className="img" src={imgUrl} alt="destinationsList" />
        <p>{name}</p>
      </div>
    </li>
  )
}

export default DestinationItem
