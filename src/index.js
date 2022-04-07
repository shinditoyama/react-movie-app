import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider as StoreProvider } from 'react-redux';
import './global.css';

import Routes from './routes';
import store from './store';

const App = () => {
    return (
        <StoreProvider store={store}>
            <Routes />
        </StoreProvider>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);