import './Character.scss'
// const Character = props => {
const Character = ({ name, image, classe, backgroundColor }) => {
  return (
    <div className="character">
      <div className="header" style={{ backgroundColor: backgroundColor }}>
        <img src={image} alt={name} />
      </div>
      <div className="footer">
        <h4>{name}</h4>
        <h5>{classe}</h5>
      </div>
    </div>
  )
}

export default Character
