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

const routes = [
  {path: '/', action: () =><Home/>},
  {path: '/sponsors', action: () =><Sponsors/>},
]

class App extends Component {
  constructor(){
    super();
    //store all the local state that you don't get from the server here
    this.state={
      nav_visible: false,
      route_changed: false
    };
    this.openNav = this.openNav.bind(this);
    this.hideNav = this.hideNav.bind(this);
    this.Router = this.router.bind(this);
    // this.routeChanged=this.routeChanged.bind(this);
  }

  // router(theRoutes, thePath){
  //   // this works, but I need to figure out a way to trigger a rerender when the route changes
  //   // right now it only updates when I toggle the menu
  //   let returnComponent = 'nuthin';
  //   // let rr = !this.state.route_changed
  //   // console.log("thePath: "+thePath)
  //   for (const aRoute of theRoutes) {
  //     // console.log(aRoute.path )
  //     if (aRoute.path === thePath) {
  //       returnComponent = aRoute.action()
  //       // this.setState({route_changed: rr});
  //     }
  //   }
  //   return returnComponent;
  // }

  openNav(){
    this.setState({nav_visible: true});
  }
  hideNav(){
    this.setState({nav_visible: false});
  }
  // {history.listen((location, action)=>{
  //     return this.Router(routes, location.pathname);
  //     console.log(location.pathname)
  //   })}
  render() {
    return (
      <div id="outer-wrap">
      <HeaderBar onNavToggle={this.openNav}/>
        <div className="site-body">
          <NavBar showNav={this.state.nav_visible}/>
          <main onClick={this.hideNav}>
          </main>
        </div>
      </div>
    );
  }
 }

export default App;
