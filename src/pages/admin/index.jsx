import React, { useState } from 'react'
import './style.css'
import Layout from '@theme/Layout'
import { useHistory } from '@docusaurus/router';

const index = () => {

    const [isAlertVisible, setAlertVisible] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();

        const username = e.target.elements.username.value;
        const password = e.target.elements.password.value;

        console.log('Username:', username);
        console.log('Password:', password);
        if (username !== 'linhlinh' || password !== '@12345678') {
            setAlertVisible(true);
            setTimeout(() => {
                setAlertVisible(false);
            }, 1500);
        } else {
            history.push('/admin/importfile');
        }
    };

    const closeAlert = () => {
        setAlertVisible(false);
    };

    return (
        <Layout
            title={`Document For Me`}
            description="Description will go into a meta tag in <head />"
        // noFooter
        >
            <div className='login-admin'>
                <div>
                    {isAlertVisible && (
                        <div className="login-alert">
                            <span className="closebtn" onClick={closeAlert}>&times;</span>
                            <strong>Error!</strong> UserName or Password is wrong.
                        </div>
                    )}
                    {/* Your other content */}
                </div>
                <div className="login-page">
                    <div className="form">
                        {/* <form className="register-form" >
                        <input type="text" placeholder="name" />
                        <input type="password" placeholder="password" />
                        <input type="text" placeholder="email address" />
                        <button>create</button>
                        <p className="message">Already registered? <a href="#">Sign In</a></p>
                    </form> */}
                        <form className="login-form" onSubmit={handleSubmit}>
                            <input type="text" name="username" placeholder="username" />
                            <input type="password" name="password" placeholder="password" />
                            <button>login</button>
                            <p className="message">Not registered? <a href="#">Create an account</a></p>
                        </form>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default index