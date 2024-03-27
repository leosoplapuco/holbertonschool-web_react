import React from 'react';
import './Notifications.css';
import { getLatestNotification } from './utils';
import closeIcon from './close-icon.png';

export default function Notifications() {
	return (
		<div className="Notifications">
			<button style={{ background: 'none', border: 'none', position: 'absolute', right: '15px', top: '20px', cursor: 'pointer', }} aria-label="Close" onClick={(e) => { console.log('Close button has been clicked'); }}>
				<img src={closeIcon} alt="closeicon" style={{ width: '25px', height: '25px', }} />
			</button>
			<p style={{ fontSize:'20px',}}>Here is the list of notifications</p>
			<ul>
				<li data-priority="default">New course available</li>
				<li data-priority="urgent">New resume available</li>
				<li data-priority="urgent" dangerouslySetInnerHTML={{__html: getLatestNotification()}}></li>
			</ul>
		</div>
	);
};