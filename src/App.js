// import { version } from 'inferno';
import Component from 'inferno-component';

import './registerServiceWorker';
import history from './history';
// import Logo from './logo';
import HeaderBar from './components/headerBar.jsx';
import NavBar from './components/navigation.jsx';
import Home from './components/home.jsx';
import Sponsors from './components/sponsors.jsx';

// import createHistory from 'history/createBrowserHistory';

// const browserHistory=createHistory();
const routes = [
  {path: '/', action: () =><Home/>},
  {path: '/sponsors', action: () =><Sponsors/>},
]

class App extends Component {
  constructor(){
    super();
    //store all the local state that you don't get from the server here
    this.state={
      nav_visible: false
    };
    this.openNav=this.openNav.bind(this);
    this.hideNav=this.hideNav.bind(this);
  }

  router(theRoutes, thePath){
    let returnComponent = 'nuthin';
    console.log("thePath: "+thePath)
    for (const aRoute of theRoutes) {
      // console.log(aRoute.path )
      if (aRoute.path === thePath) {
        returnComponent = aRoute.action()
      }
    }
    return returnComponent;
  }

  openNav(){
    this.setState({nav_visible: true});
  }
  hideNav(){
    this.setState({nav_visible: false});
  }
  render() {
    return (
      <div id="outer-wrap">
      <HeaderBar onNavToggle={this.openNav}/>
        <div className="site-body">
          <NavBar showNav={this.state.nav_visible}/>
          <main onClick={this.hideNav}>

            {this.router(routes, history.location.pathname)}
          </main>
        </div>
      </div>
    );
  }
}

export default App;
