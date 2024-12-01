import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const Navbar = () => {
  const { user, userSignOut } = useContext(AuthContext);
  const links = (
    <ul className="flex flex-col md:flex-row gap-6">
      <li>
        <NavLink to={'/'}>Home</NavLink>
      </li>

      <li>
        <NavLink to={'/addcoffee'}>Add Coffee</NavLink>
      </li>
    </ul>
  );

  return (
    <div className="navbar bg-base-100 my-4">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">CoffeeCup</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <p>{user?.displayName}</p>
        <p className="mr-2">{user?.email}</p>
        {user && user ? (
          <Link onClick={userSignOut}>Sign-Out</Link>
        ) : (
          <Link to={'/login'}>Login</Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
