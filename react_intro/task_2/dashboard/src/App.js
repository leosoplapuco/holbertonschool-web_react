import logo from './logo-holberton.jpg';
import './App.css';
import { getFooterCopy, getFullYear } from './utils';

function App() {
    return (
        <div className="App">
            <div className="App-header">
                <img src={logo} alt="logo" />
                <h1>School dashboard</h1>
            </div>
            <div className="App-body">
                <p>Login to access the full dashboard</p>

                <form className="form">
                    <label for="email">Email:</label>
                    <input type="email" id="email" placeholder="Email"/>

                    <label for="password">Password:</label>
                    <input type="password" id="password" placeholder="Password"/>

                    <input type="submit" value="ok"/>
                </form>
            </div>
            <div className="App-footer">
                <p>Copyright {getFullYear()} - {getFooterCopy()}</p>
            </div>
        </div>
    );
}

export default App;