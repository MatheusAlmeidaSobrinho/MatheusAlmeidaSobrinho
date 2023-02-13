import Character from '../Character'
import './Race.scss'

const Race = ({ race, characters, props }) => {
  return characters.length > 0 ? (
    <section className="race" style={props.secundaryColor}>
      <h2 style={{ borderColor: race.primaryColor }}>{race.name}</h2>
      <div className="characters">
        {characters.map(character => (
          <Character
            corDeFundo={race.primaryColor}
            key={character.name}
            name={character.name}
            classe={character.classe}
            image={character.image}
          />
        ))}
      </div>
    </section>
  ) : (
    ''
  )
}

export default Race
