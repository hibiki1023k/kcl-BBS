import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
  return (
    <header className="sticky-top border-bottom bg-white">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <Link href="/">
          Home
        </Link>
        <div>Link</div>
      </div>
    </header>
  );
};

export default Header;