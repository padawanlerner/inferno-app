// import Inferno from 'inferno';
// import { a } from 'inferno-router';
import '../CSS/nav.css'
import history from '../history'
//use reactcsstransitions group to mount the navbar when something is clicked,
// and unmount it when it is clicked again

const NavBar=(props) => {

  const transition = (theEvent) =>{
    theEvent.preventDefault();
    console.log(theEvent)
    console.log(history)
    history.push({
      pathname: theEvent.currentTarget.pathname,
      search: theEvent.currentTarget.search
    });
  }

  return (
    <nav className={props.showNav ? "open":"closed"}>
      <ul>
        <li>
          <a href="/" onclick = {transition}>
            <span>Home</span>
          </a>
        </li>
        <li>
          <a href="sponsors" onclick = {transition}>
            <span>Sponsors</span>
          </a>
        </li>
        <li>
          <a href="/login" onclick = {transition}>
            <span>Login/My Account</span>
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar;




// <li>
//   <a href="/charities">
//     <span>Causes</span>
//   </a>
// </li>
