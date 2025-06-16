import Link from 'next/link';
import './styles.css';

const Header = () => (
  <header className="main-header">
    <h1><Link href="/">Flying Free</Link></h1>
  </header>
);

export default Header;