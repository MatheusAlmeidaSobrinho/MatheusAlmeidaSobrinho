import { useState } from 'react'
import './Form.scss'
import TextField from '../TextField' // if you use index.jsx
import DropDownList from '../DropDownList'
import Button from '../Button'

function Form(props) {
  const toSave = event => {
    event.preventDefault()
    props.whenCharacterRegister({
      name: name,
      classe: classe, // valid above
      image,
      race
    })
    setName('')
    setClasse('')
    setImage('')
    setRace('')
  }

  const [name, setName] = useState('')
  const [classe, setClasse] = useState('')
  const [image, setImage] = useState('')
  const [race, setRace] = useState('')

  return (
    <form className="form-fields" onSubmit={toSave}>
      <h1>Register Your Character Card </h1>
      <TextField
        mandatory={true}
        label="Name"
        value={name}
        whenTyping={value => setName(value)}
      />
      <TextField
        mandatory={true}
        label="Class"
        value={classe}
        whenTyping={value => setClasse(value)}
      />
      <TextField
        label="Image"
        value={image}
        whenTyping={value => setImage(value)}
      />
      <DropDownList
        mandatory={true}
        label="Race"
        itens={props.races}
        value={race}
        whenTyping={value => setRace(value)}
      />
      <Button>Create Card</Button>
    </form>
  )
}

export default Form
