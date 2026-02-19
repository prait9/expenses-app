import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./features/auth/login";
import RequireAuth from "./features/auth/requireAuth";
import Dashboard from "./pages/Dashboard";
import Register from "./features/auth/register";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route
          path="/"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
