import React from "react";
import LoginPage from "./Pages/loginPage";
import RegisterPage from "./Pages/RegisterPage";
import Layout from "./Pages/LayoutPage";
import ProfilePage from './Pages/ProfilePage'
import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./Pages/HomePage";

function App() {
  const ValidUser = true;
  const ProtectedRoute = ({ children }) => {
    if (!ValidUser) return <Navigate to="/login" />;
    return children;
  };

  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />

      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Layout />
          </ProtectedRoute>
        }
      >
        <Route path="" element={<HomePage />} />
        <Route path='/profile/:id' element={<ProfilePage/>}/>
      </Route>
    </Routes>
  );
}

export default App;
