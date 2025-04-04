import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import AdminPage from "../pages/AdminPage";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import LoginPage from "../pages/LoginPage";
import SignupPage from "../pages/SignupPage";
import EmailAutomation from "../pages/EmailAutomation";

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [storedUser, setStoredUser] = useState(null);
   const [loading, setLoading] = useState(true); 

  // Check if the user is logged in when the app is loaded
  useEffect(() => {
    try {
      const user = JSON.parse(localStorage.getItem("UserData"));
      setStoredUser(user);
        setLoading(false);
    } catch (error) {
      console.error("Error parsing UserData from localStorage:", error);
      setStoredUser(null);
    }
  }, []);
    if (loading) {
      return <div>Loading...</div>;
    }

  return (
    <BrowserRouter>
      <div className="flex h-screen bg-gray-100">
        {/* Sidebar and Header only if user is logged in */}
        {storedUser && (
          <>
            <Sidebar
              isSidebarOpen={isSidebarOpen}
              setIsSidebarOpen={setIsSidebarOpen}
            />
            <div
              className={`flex flex-col transition-all duration-300 ease-in-out ${
                isSidebarOpen ? "ml-64" : "ml-20"
              }`}
            >
              <Header
                sidebarExtended={isSidebarOpen}
                setSidebarExtended={setIsSidebarOpen}
              />
            </div>
          </>
        )}

        <main className="flex-1 p-6 overflow-y-auto mt-16">
          <Routes>
            {/* Redirect to Admin Page if user is already logged in */}
            <Route
              path="/login"
              element={
                storedUser ? <Navigate to="/admin" replace /> : <LoginPage />
              }
            />

            {/* Protected Route for Admin Page */}
            <Route
              path="/admin"
              element={
                storedUser ? <AdminPage /> : <Navigate to="/login" replace />
              }
            />
            <Route
              path="/emailautomation"
              element={
                storedUser ? <EmailAutomation /> : <Navigate to="/login" replace />
              }
            />

            {/* Signup Route */}
            <Route path="/signup" element={<SignupPage />} />

           

            {/* Catch-all Route to redirect */}
            <Route
              path="*"
              element={
                <Navigate to={storedUser ? "/admin" : "/login"} replace />
              }
            />
           
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
