import React from 'react';
import './App.css';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Notifications from '../Notifications/Notifications'

function App() {
    return (
        <div className="App">
            <Notifications/>
            <Header/>
            <div className='App-body'>
                <Login/>
            </div>
            <div className='App-footer'>
                <Footer/>
            </div>
        </div>
    );
}

export default App;
