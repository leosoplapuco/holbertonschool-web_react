import React from "react";
import { css, StyleSheet } from "aphrodite";
import { symbol } from "prop-types";

const styles = StyleSheet.create({
    bodyLogin: {
        margin: "20px 0 0px 0px",
        flexGrow: 1,
    },
    smallInput: {
        "@media (max-width: 900px)": {
            display: "block",
            marginTop: "10px",
            marginBottom: "5px",
        },
    },
});

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.handleLoginSubmit = this.handleLoginSubmit.bind(this)
        this.handleChangeEmail = this.handleChangeEmail.bind(this)
        this.handleChangePassword = this.handleChangePassword.bind(this)
        this.state = {
        isLoggedIn: false,
        email: '',
        password: '',
        enableSubmit: false
        };
    }

    handleLoginSubmit(event){
        event.preventDefault();
        this.setState({
        isLoggedIn: true
        })
    }

    handleChangeEmail(event) {
        this.setState({
        email: event.target.value
        }, () => {
        if (this.state.email !== '' && this.state.password !== '') {
            this.setState({
            enableSubmit: true
            })
        }
        })
    }

    handleChangePassword(event) {
        this.setState({
        password: event.target.value
        }, () => {
        if (this.state.email !== '' && this.state.password !== '') {
            this.setState({
                enableSubmit: true
            })
        }
        })
    }

    render() {
        return (
            <div className="body-login">
                <div className={css(styles.bodyLogin, styles.smallInput)}>
                    <p>Login to access the full dashboard</p>
                    <form onSubmit={this.handleLoginSubmit}> 
                        <label htmlFor="email" className={css(styles.smallInput)}>Email:</label>
                        <input type="email" id="email" value= {this.state.email} onChange={this.handleChangeEmail} className={css(styles.bodyLoginInput, styles.smallInput)}/>
                        <label htmlFor="password" className={css(styles.smallInput, styles.button)}>Password:</label>
                        <input type="password" id="password" value={this.state.password} onChange={this.handleChangePassword} className={css(styles.bodyLoginInput, styles.smallInput)}/>
                        <button type="submit" disabled={!this.state.enableSubmit} className={css(styles.button, styles.smallInput)}>OK</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Login;