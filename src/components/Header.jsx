const Header = () => {
  return (
    <>
      <header className="w-full px-10 py-9">
        <div className="mx-auto">
          <div className="flex flex-col items-start md:flex-row">
            
            <p className="text-2xl md:text-3xl font-semibold tracking-wide">
              Sean Conroy
            </p>

            <nav className="invisible md:visible flex items-center justify-center ml-auto text-lg tracking-wide">
              <a
                href="#"
                className="font-light hover:text-gray-900 border-b border-gray-900 mr-5 "
              >
                Work
              </a>
              <a href="#" className="font-light hover:text-gray-900">
                About
              </a>
            </nav>

          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
