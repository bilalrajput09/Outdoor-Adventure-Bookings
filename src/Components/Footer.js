import { Link } from 'react-router-dom';

<<<<<<< HEAD
const Footer = () => {
  return (
    <>
      <footer className="bg-secondary text-white text-center py-3 mt-5 sticky-footer">
        <div className="container">
          <p>
            &copy; Made with ❤ by
            <Link
              to="https://github.com/bilalrajput09"
              className="link-warning"
            >
              {' Bilal Ahmed '}
            </Link>
            <Link
              to="https://github.com/Daniel-Kigozi"
              className="link-warning"
            >
              {' Daniel Kigozi '}
            </Link>
            <Link
              to="https://github.com/kalbek"
              className="link-warning"
            >
              {' Bekele Kaleb '}
            </Link>
          </p>
          <p>
            <Link to="/" className="text-white">
              Privacy Policy
            </Link>{' '}
            |
            <Link to="/" className="text-white">
              Terms of Service
            </Link>
          </p>
        </div>
      </footer>
    </>
  );
};
=======
const Footer = () => (
  <>
    <footer className="bg-secondary text-white text-center py-3 mt-5 sticky-footer">
      <div className="container">
        <p>
          &copy; Made with ❤ by
          <Link
            to="https://github.com/bilalrajput09"
            className="link-warning"
            style={{ textDecoration: 'none' }}
          >
            {' Bilal Ahmed'}
          </Link>
          &nbsp;
          <Link
            to="https://github.com/kalbek"
            className="link-warning"
            style={{ textDecoration: 'none' }}
          >
            ,
            {' Kaleb B. '}
          </Link>
        </p>
        <p>
          <Link to="/" className="text-white">
            Privacy Policy
          </Link>
          {' '}
          |
          <Link to="/" className="text-white">
            Terms of Service
          </Link>
        </p>
      </div>
    </footer>
  </>
);
>>>>>>> 208e49bfd4d242cc51821291ed4b46c6d5f5c1fe

export default Footer;
