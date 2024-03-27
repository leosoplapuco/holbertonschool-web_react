import logo from './holberton-logo.jpg';
import './App.css';

function App() {
    return (
        <div className="App">
            <header className='App-header'>
                <img className='App-header_logo' src={logo} alt="logo-holberton"/>
                <h1>School dashboard</h1>
            </header>
            <body className='App-body'>
                <p>Login to access the full dashboard</p>

				<form className="form">
                    <label for="email">Email:</label>
                    <input type="email" id="email" placeholder="Email"/>

                    <label for="password">Password:</label>
                    <input type="password" id="password" placeholder="Password"/>

                    <input type="submit" value="ok"/>
                </form>
            </body>
            <footer className='App-footer'>
                <p>Copyright 2020 - Holberton School</p>
            </footer>
        </div>
    );
}

export default App;
