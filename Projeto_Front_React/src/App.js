import { useState } from 'react'
import './App.scss'
import Banner from './components/Banner/Banner'
import Footer from './components/Footer'
import Form from './components/Form'
import Menu from './components/Menu'
import Race from './components/Race'

function App() {
  const races = [
    {
      name: 'Humans',
      primaryColor: '#57C278',
      secundaryColor: '#D9F7E9'
    },
    {
      name: 'Demons',
      primaryColor: '#82CFFA',
      secundaryColor: '#E8F8FF'
    },
    {
      name: 'Imortals',
      primaryColor: '#A6D157',
      secundaryColor: '#F0F8E2'
    },
    {
      name: 'Undeads',
      primaryColor: '#E06B69',
      secundaryColor: '#FDE7E8'
    }
  ]

  const [characters, setCharacters] = useState([])

  const whenNewCharacterRegistred = character => {
    debugger
    setCharacters([...characters, character])
  }

  return (
    <div className="App">
      <Menu />
      <Banner />
      <Form
        races={races.map(race => race.name)}
        whenCharacterRegister={character =>
          whenNewCharacterRegistred(character)
        }
      />

      {races.map(race => (
        <Race
          key={race.name}
          name={race.name}
          primaryColor={race.primaryColor}
          secundaryColor={race.secundaryColor}
          characters={characters.filter(
            character => character.race === race.name
          )}
        />
      ))}
      <Footer />
    </div>
  )
}

export default App
