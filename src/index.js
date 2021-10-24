import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from "redux";
import { Provider } from 'react-redux';
import ReduxCombined from './Redux/ReduxCombined';
import axios from 'axios';
import { SnackbarProvider } from 'notistack';
import { backendURL } from './Constants';


axios.defaults.baseURL = backendURL;
axios.defaults.headers.common['Authorization'] = localStorage.getItem('JWTtoken');

const store = createStore(
    ReduxCombined,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(
	<React.StrictMode>
  		<Provider store={store}>
		  	<SnackbarProvider
				maxSnack={3}
				anchorOrigin={{
					vertical: 'bottom',
					horizontal: 'left',
				}}
				autoHideDuration={4000}
			>
			<App />
			</SnackbarProvider>
		</Provider>
	</React.StrictMode>,

	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();



//   const temp = () => {
//     axios.get("/")
//     .then(res => {
//         alert("LOGINNNN");
		
//     })
//     .catch(err => {
//         if(!err.response){
//             // enqueueSnackbar("Some Error occurred while getting " + route, {variant: 'error'});
//             return;
//         }
//         if(err.response.status === 401){
//             dispatch(logoutUser());
//         }
//         else{
//             // enqueueSnackbar("Some Error occurred while getting " + route, {variant: 'error'})
//         }
//     })
//   }