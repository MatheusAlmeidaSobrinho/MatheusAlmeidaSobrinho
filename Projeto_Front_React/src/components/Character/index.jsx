import './Character.scss'
// const Character = props => {
const Character = ({ name, image, classe, backgroundColor, whenDeleted }) => {
  return (
    <div className="character">
      <div className="delet" onClick={whenDeleted}></div>
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
