import React from 'react';
import { Link } from 'react-router-dom';

export function Login() {
    return (
        <div id='login'>
            <h1>Login</h1>
            <p>
                <Link to='/register'>
                    Noch kein Konto? Dann erstelle jetzt eins
                </Link>
            </p>
        </div>
    );
}
