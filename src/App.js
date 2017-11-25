// import { version } from 'inferno';
import Component from 'inferno-component';
// import { Router, Route, IndexRoute } from 'inferno-router';

import './registerServiceWorker';
// import Logo from './logo';
import HeaderBar from './components/headerBar.jsx';
import NavBar from './components/navigation.jsx';

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
            <p>howdy howdy howdy</p>
          </main>
        </div>
      </div>
    );
  }
}

export default App;
