import './DropDownList.scss'

const DropDownList = props => {
  return (
    <div className="dropdown-list">
      <label>{props.label}</label>
      <select
        onChange={event => props.whenTyping(event.target.value)}
        required={props.mandatory}
        value={props.value}
      >
        <option value=""></option>
        {props.itens.map(item => {
          return <option key={item}>{item}</option>
        })}
      </select>
    </div>
  )
}

export default DropDownList
