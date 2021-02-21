import React from 'react';
import { render } from 'react-dom';
import { App } from './App';
import { RecoilRoot } from 'recoil';
import { HashRouter } from 'react-router-dom';
import { UserContextProvider } from './components/menu/provider/UserContextProvider';

render(
    <RecoilRoot>
        <UserContextProvider>
            <HashRouter>
                <App />
            </HashRouter>
        </UserContextProvider>
    </RecoilRoot>,
    document.getElementById('root'),
);
