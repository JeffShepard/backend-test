import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import  './index.css'

import Home from './pages/home.js'
import ChangeNotes from './pages/notes.js'
import Navbar from './components/navbar.js'
import Blah from './pages/blah.js'

function App() {

  return (
    <div>

	<Router> 
  <Navbar/>
    <div className = 'App'>
	{/* put in Routes - use Switch */}
		<Switch>
			<Route exact path="/" component={Home}/>
			<Route exact path="/notes">
				<ChangeNotes/>
			</Route>
			<Route exact path="/blah" component={Blah}/>
		</Switch>
    </div>
	</Router>
    </div>
  );
}

export default App;
