import "../style/pokemonApp.css";

function Pokemon({ data }) {
  return (
    <div className="pokemon-container">
      <h2>{data.name.toUpperCase()}</h2>
      <img src={data.sprites.front_default} alt={data.name} />
      <p>Type: {data.types.map((type) => type.type.name) + ""}</p>
      <p>Weight: {data.weight / 10} kg</p>
      <p>Height: {data.height / 10} m</p>
    </div>
  );
}

export default Pokemon;
