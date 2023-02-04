import './TextField.scss'

const TextField = props => {
  // const placeholderModified = `Type ${props.label} of the character`

  const whenTyping = event => {
    props.whenTyping(event.target.value)
  }

  return (
    <div className="campo-texto">
      <label>{props.label}</label>
      <input
        value={props.value}
        onChange={whenTyping}
        required={props.mandatory} // the basic verification
        placeholder={`Type ${props.label} of the character`}
      />
      {/* <input placeholder={placeholderModified} />  */}
    </div>
  )
}

export default TextField // for job
