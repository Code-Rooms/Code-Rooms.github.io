import './App.css';
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Login from './Authentication/Login';
import AuthRouter from './AuthRouter';
import VerifyEmail from './Authentication/VerifyEmail';
import Signup from './Authentication/Signup';
import ChangePassword from './Authentication/ChangePassword';
import AboutUs from './Components/AboutUs';
// import "antd/dist/antd.css";

export default function App() {

  	return (
		<Router basename="/">
			<Switch>
				<Route path="/login" >
					<Login />
				</Route>
				<Route path="/signup">
					<Signup />
				</Route>
				<Route path="/verify_email">
					<VerifyEmail />
				</Route>
				<Route path="/change_password">
					<ChangePassword />
				</Route>
				<Route exact path="/about_us">
					<AboutUs />
				</Route>

				<Route path="/">
					{/* {
                        localStorage.getItem('redirectTo') ? <Redirect to={localStorage.getItem('redirectTo')} /> 
                        : null
                        
                    } */}
					<AuthRouter />
				</Route>
				
			</Switch>
		</Router>
	)
}
