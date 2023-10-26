import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className="w-full px-5 md:px-10 py-9">
      <div className="mx-auto">
        <div className="border-gray-900 text-gray-900">
          <div className="flex flex-row justify-between">
            <Link
              to="/"
              className="text-2xl md:text-3xl font-semibold tracking-wide text-inherit"
            >
              Sean Conroy
            </Link>

            <nav className="invisible md:visible flex align-center gap-5 justify-center text-lg tracking-wide font-light">
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
      </div>
    </header>
  );
};

export default Header;
