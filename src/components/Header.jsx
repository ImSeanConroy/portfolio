import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <header className="w-full px-10 py-9">
        <div className="mx-auto">
          <div className="flex flex-col items-start md:flex-row">
            <Link
              to="/"
              className="text-2xl md:text-3xl font-semibold tracking-wide"
            >
              Sean Conroy
            </Link>

            <nav className="invisible md:visible flex items-center gap-5 justify-center ml-auto text-lg tracking-wide font-light hover:text-gray-900">
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending ? '' : isActive ? 'border-b border-gray-900' : ''
                }
              >
                Work
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive, isPending }) =>
                  isPending ? '' : isActive ? 'border-b border-gray-900' : ''
                }
              >
                About
              </NavLink>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
