import React from 'react';
import { Link } from 'react-router-dom';

export function Register() {
    return (
        <div id='register'>
            <h1>Register</h1>
            <p>
                <Link to='/login'>Lieber einloggen?</Link>
            </p>
        </div>
    );
}
