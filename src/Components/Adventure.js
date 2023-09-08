const Adventure = ({ name, description, picture }) => (
  <div className="col">
    <div className="card h-100">
      <img
        src={`display-${picture}`}
        className="card-img-top"
        alt="Adventure"
      />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{description}</p>
      </div>
    </div>
  </div>
);

export default Adventure;
