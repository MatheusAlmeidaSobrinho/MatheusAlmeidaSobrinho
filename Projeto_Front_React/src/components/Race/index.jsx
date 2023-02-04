import Character from '../Character'
import './Race.scss'

const Race = props => {
  const css = { backgroundColor: props.secundaryColor }

  return props.characters.length > 0 ? (
    <section className="race" style={css}>
      <h2 style={{ borderColor: props.primaryColor }}>{props.name}</h2>
      <div className="characters">
        {props.characters.map(character => (
          <Character
            corDeFundo={props.primaryColor}
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
