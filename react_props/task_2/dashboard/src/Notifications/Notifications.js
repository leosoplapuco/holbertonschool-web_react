import React from 'react';
import './Notifications.css';
import { getLatestNotification } from '../utils/utils';
import closeIcon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';

export default function Notifications() {
	return (
		<div className="Notifications">
			<button style={{ background: 'none', border: 'none', position: 'absolute', right: '25px', top: '20px', cursor: 'pointer', }} aria-label="Close" onClick={(e) => { console.log('Close button has been clicked'); }}>
				<img src={closeIcon} alt="closeicon" style={{ width: '25px', height: '25px', }} />
			</button>
			<p>Here is the list of notifications</p>
			<ul>
				<NotificationItem type="default" value="New course available"/>
				<NotificationItem type="urgent" value="New resume available"/>
				<NotificationItem type="urgent" html={{ __html: getLatestNotification() }} />
      		</ul>
		</div>
	);
};