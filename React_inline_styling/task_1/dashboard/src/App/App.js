import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Login from '../Login/Login';
import CourseList from '../CourseList/CourseList';
import Notification from '../Notifications/Notifications'
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import BodySection from '../BodySection/BodySection';
import WithLogging from '../HOC/WithLogging';

const styles = StyleSheet.create({
    root: {
        '--red': '#e11c3e',
    },
    body:{
        boxSizing: 'border-box',
        margin: 0,
        padding: 0,
    },
    contentHeader:{
        display: 'flex',
        flexDirection: 'row-reverse',
        justifyContent: 'space-between',
        padding: '10px 20px',
        borderBottom: '4px solid var(--red)',
    },
    appBody:{
        marginTop: '20px',
        marginLeft: '40px',
    },
    appFooter:{
        textAlign: 'center',
        borderTop: '4px solid var(--red)',
    }
});

class App extends React.Component {
    constructor(props) {
        super(props);

        this.listCourses = [
            { id: 1, name: 'ES6', credit: 60 },
            { id: 2, name: 'Webpack', credit: 20 },
            { id: 3, name: 'React', credit: 40 },
        ];

        this.state = {
            listNotifications: [
                { id: 1, type: 'default', value: 'New course available' },
                { id: 2, type: 'urgent', value: 'New resume available' },
                { id: 3, type: 'urgent', html: { __html: 'Custom notification with HTML' } },
            ],
        };
    }

    static defaultProps = {
        logOut: () => {
        },
    };

    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyDown);
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeyDown);
    }

    handleKeyDown = (event) => {
        event.preventDefault();

        if (event.ctrlKey && event.key === 'h') {
        alert('Logging you out');
        this.props.logOut();
        }
    }

    render() {
        const { isLoggedIn } = this.props;
        const { listNotifications } = this.state;
        let title = isLoggedIn ? 'Course list': 'Log in to continue'

        return (
        <div className={css(styles.root)}>
            <div className={css(styles.contentHeader)}>
                <Notification displayDrawer listNotifications={listNotifications} />
                <Header />
            </div>
            <div className={css(styles.appBody)}>
                <BodySectionWithMarginBottom title={title}>
                    {isLoggedIn ? <CourseList listCourses={this.listCourses} /> : <Login />}
                </BodySectionWithMarginBottom>

                <BodySection title='News from the School'>
                    <p>Some random text about the latest news from the school.</p>
                </BodySection>
            </div>

            <div className={css(styles.appFooter)}><Footer/></div>
        </div>
        )
    }
}

App.propTypes = {
    isLoggedIn: PropTypes.bool,
    logOut: PropTypes.func,
};

export default WithLogging(App);