import adventureImage from '../assets/images/istockphoto-516449022-612x612.jpg';

const Adventure = ({ name, description }) => {
  return (
    <div className="col">
      <div className="card h-100">
        <img
          src={adventureImage}
          className="card-img-top"
          alt="Adventure"
        ></img>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Adventure;
