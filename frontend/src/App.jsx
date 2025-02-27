import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';
import Landingpage from './pages/Landingpage';
import Home from './pages/Home';
import FruitSlideshow from './pages/Motion';

// Remove AuthProvider if it's specific to TypeScript 
// or ensure you have a working AuthContext.js file
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/home" element={<Home />} /> 
          <Route path="/motion" element={<FruitSlideshow />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/dashboard/*" element={<Dashboard />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
