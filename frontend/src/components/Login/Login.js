import React, { useState } from 'react';

const Login = () => {
    const [credentials, setCredentials] = useState('')

    return (
        <div>
            Login Page
            <form>
                <button>Submit</button>
            </form>
        </div>
    );
};

export default Login;