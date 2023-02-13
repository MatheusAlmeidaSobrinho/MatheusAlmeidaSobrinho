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

  const inicial = [
    {
      name: 'Elesis',
      classe: 'Espadachim',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn3-TFHQ_tIcuAvSxyWkc3Ppb-tVFgCw549Q&usqp=CAU',
      race: races[0].name
    },
    {
      name: 'Dio',
      classe: 'Profane',
      image:
        'http://vignette2.wikia.nocookie.net/grandchase/images/e/e2/Leviathan_gif.gif/revision/latest?cb=20120528164253&path-prefix=pt-br',
      race: races[1].name
    },
    {
      name: 'Lire',
      classe: 'Hunter',
      image:
        'http://images.wikia.com/grandchase/pt-br/images/8/87/NewArcher.png',
      race: races[2].name
    },
    {
      name: 'Potato',
      classe: 'Potato',
      image: 'Potato',
      race: races[3].name
    }
  ]

  // const [characters, setCharacters] = useState([])
  const [characters, setCharacters] = useState(inicial)

  function deleteCharacter() {
    console.log('delet')
  }

  const whenNewCharacterRegistred = character => {
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

      {races.map((race, index) => (
        <Race
          key={index.name}
          name={race.name}
          primaryColor={race.primaryColor}
          secundaryColor={race.secundaryColor}
          characters={characters.filter(
            character => character.race === race.name
          )}
          whenDeleted={deleteCharacter}
        />
      ))}
      <Footer />
    </div>
  )
}

export default App
