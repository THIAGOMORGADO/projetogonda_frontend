import { AppRoutes } from './routes';
import { AuthProvider } from './context/AuthContext';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <AuthProvider> 
        <AppRoutes />
    </AuthProvider>
  )
}

export default App;