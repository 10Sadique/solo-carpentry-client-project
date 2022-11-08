import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { PhotoProvider } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import AuthProvider from './contexts/AuthProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <AuthProvider>
            <PhotoProvider>
                <App />
            </PhotoProvider>
        </AuthProvider>
    </React.StrictMode>
);
