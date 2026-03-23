import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Catalog from './pages/Catalog';
import RecipeCatalogue from './pages/RecipeCatalogue';
import Login from './pages/Login';
import AdminStudents from './pages/AdminStudents';
import { AccessProvider } from './context/AccessContext';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <AccessProvider>
        <Router>
          <div className="min-h-screen font-sans selection:bg-primary selection:text-white">
            <Routes>
              <Route path="/" element={<Catalog />} />
              <Route path="/produtos" element={<Catalog />} />
              <Route path="/produtos/:productId" element={<RecipeCatalogue />} />
              <Route path="/login" element={<Login />} />
              <Route path="/admin/alunos" element={<AdminStudents />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </div>
        </Router>
      </AccessProvider>
    </AuthProvider>
  );
}

export default App;
