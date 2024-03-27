import React from 'react';
import ReactDOM from 'react-dom';
import App from '../../../task_3/dashboard/src/App';
import Notifications from '../../../task_3/dashboard/src/Notifications';
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <div className='root-notifications'><Notifications /></div>
        <App />
    </React.StrictMode>
);

// reportWebVitals();