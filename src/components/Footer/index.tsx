import './styles.css';

const Footer = () => (
  <footer className="main-footer">
    <p>Have a nice trip!</p>
    <p>{new Date().getFullYear()}. All rights reserved.</p>
  </footer>
);

export default Footer;