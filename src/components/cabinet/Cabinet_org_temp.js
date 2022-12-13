import PropTypes from 'prop-types';
import React, {useState} from 'react';

function Cabinet({setToken}) {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

    async function loginUser(credentials) {
        return fetch('http://localhost:8585/v1/atm/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(credentials)
        })
            .then(data => data.json())
    }

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
            username,
            password
        });
        setToken(token);
    }
    return (
        <>
            <div className="Auth-form-container">
                <form className="Auth-form" onSubmit={handleSubmit}>
                    <div className="Auth-form-content">
                        <h3 className="Auth-form-title">Personal cabinet</h3>
                        <div className="form-group mt-3">
                            <label>Login</label>
                            <input
                                type="text"
                                className="form-control mt-1"
                                placeholder="Login"
                                onChange={e => setUserName(e.target.value)}/>
                        </div>
                        <div className="form-group mt-3">
                            <label>Password</label>
                            <input
                                type="password"
                                className="form-control mt-1"
                                placeholder="Password"
                                onChange={e => setPassword(e.target.value)}/>
                        </div>
                        <div className="d-grid gap-2 mt-3">
                            <button type="submit" className="btn btn-primary">
                                Submit
                            </button>
                        </div>

                    </div>
                </form>
            </div>
            )
            }


        </>);
}

Cabinet.propTypes = {
    setToken: PropTypes.func.isRequired
}
export default Cabinet;
