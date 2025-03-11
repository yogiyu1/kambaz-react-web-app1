import React from 'react';
import { UserProvider } from './context/UserContext';
// ...existing code...

function App() {
    return (
        <UserProvider>
            {/* ...existing code... */}
        </UserProvider>
    );
}

export default App;
