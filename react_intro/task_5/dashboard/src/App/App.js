import logo from '../assets/holberton-logo.jpg';
import './App.css';
import {getFullYear, getFooterCopy} from '../utils/utils'

function App() {
    return (
        <div className="App">
            <header className='App-header'>
                <img className='App-header_logo' src={logo} alt="logo-holberton"/>
                <h1>School dashboard</h1>
            </header>
            <div className='App-body'>
                <p>Login to access the full dashboard</p>

				<div className="form">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" placeholder="Email"/>

                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" placeholder="Password"/>

                    <button type='submir'>OK</button>
                </div>
            </div>
            <div className='App-footer'>
                <p>Copyright { getFullYear() } - { getFooterCopy() }</p>
            </div>
        </div>
    );
}

export default App;
