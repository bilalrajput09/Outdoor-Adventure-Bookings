import { Link } from 'react-router-dom';

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
            and TEAM
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

export default Footer;
