// import Inferno from 'inferno';
import { Link } from 'inferno-router';
import '../CSS/nav.css'
//use reactcsstransitions group to mount the navbar when something is clicked,
// and unmount it when it is clicked again

const NavBar=(props) => {
  return (
    <nav className={props.showNav ? "open":"closed"}>
      <ul>
        <li>
          <Link to="/">
            <span>Home</span>
          </Link>
        </li>
        <li>
          <Link to="/feedlist">
            <span>Feeds</span>
          </Link>
        </li>
        <li>
          <Link to="/sponsors">
            <span>Sponsors</span>
          </Link>
        </li>
        <li>
          <Link to="/login">
            <span>Login/My Account</span>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar;




// <li>
//   <Link to="/charities">
//     <span>Causes</span>
//   </Link>
// </li>
