import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer id="footer">
      <Link to="/home">Home</Link>
      <Link to="/blue">Blue</Link>
      <Link to="/red">Red</Link>
    </footer>
  );
}

export default Footer;
