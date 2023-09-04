import { useParams } from 'react-router-dom';
import adventureImage from '../assets/images/istockphoto-516449022-612x612.jpg';

const AdventureShow = () => {
  const { id } = useParams();
  return (
    <>
      <h1 className="text-center mb-5">Latest Adventures</h1>
      <div className="card mb-3" style={{ maxWidth: '80%' }}>
        <div className="row g-0">
          <div className="col-md-8">
            <img
              src={adventureImage}
              className="img-fluid rounded-start"
              alt="Adventure-img"
            ></img>
          </div>
          <div className="col-md-4">
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <p className="card-text">
                <small className="text-body-secondary">
                  Last updated 3 mins ago
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdventureShow;
