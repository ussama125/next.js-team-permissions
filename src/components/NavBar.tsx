import Link from 'next/link'
import { useAuth } from './AuthProvider';

export function NavBar() {
  const { user } = useAuth();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-secondary mb-3">
      <a className="navbar-brand ms-3" href="#">Team Permissions</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item navbar-brand">
            {user ? "Username: " + user.email : <Link href="/signin">Sign In</Link>}
          </li>
          <li className="nav-item navbar-brand">
            {user ? <Link className='navbar-brand' href="/signout">Sign Out</Link> : ""}
          </li>
        </ul>
      </div>
    </nav>
  )
}
