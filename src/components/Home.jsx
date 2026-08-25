import  "./Home.css";
function Home(props) {
  return (
    <section>
      {props.kawasakiBikes.map((bike, index) => (
        <div key={index}>
          <img
            src={bike.img}
            alt={bike.modelName}
          />

          <div>
            <h4>{bike.companyName}</h4>

            <h2>{bike.modelName}</h2>

            <h3>{bike.price}</h3>

            <p>{bike.description}</p>

            <button>View Details</button>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Home;