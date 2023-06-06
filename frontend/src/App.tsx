import './assets/styles/custom.scss';
import './App.css';
import { useState } from 'react';
import Routes from 'routes';
import { AuthContext, AuthContextData } from 'AuthContext';

function App() {
  const [authContextData, setAuthContextData] = useState<AuthContextData>({
    authenticated: false,
  });

  return (
   <AuthContext.Provider value={{ authContextData, setAuthContextData }}>

    <Routes />
    
  </ AuthContext.Provider>
  );
}

export default App;
