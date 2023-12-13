function Card(props) {
    return (
        <div className="card-block">
            {props.countries.map((country) =>
                <div className="card">
                    <img src={country.flags.png} alt="" />
                    <h1>Name : {country.name.official}</h1>
                    <h2>Region: {country.region}</h2>
                    <p>Description: {country.flags.alt}</p>
                </div>

            )}
        </div>
    )
}

export default Card