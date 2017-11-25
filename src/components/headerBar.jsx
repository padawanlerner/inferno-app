// import {version} from 'inferno'
import '../CSS/header.css'

const headerBar = (props) => {
  return (
    <header>
        <div className="branding">
          <div className="menu-button menu-toggle nav" onClick={props.onNavToggle}>
            <i className="material-icons">menu</i>
          </div>
        </div>
        <div className="page-details">
          <div className="title">WokeRSS</div>
        </div>
        <div className="settings">
          <div className="menu-button profile">
            <i className="material-icons">person</i>
          </div>
        </div>
    </header>

  )
}

export default headerBar;
