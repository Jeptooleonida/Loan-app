import { createContext, useEffect, useState } from "react";
import "./App.css";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./components/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CreateLoan from "./components/CreateLoan";
import axios from "axios";
// import Navbar from "./components/Navbar"; // Import Navbar

export const AuthContext = createContext();

function App() {
  const [user, setUser] = useState();
  const [token, setToken] = useState();

  const fetchUser = async (token) => {
    try {
      console.log(token);
      const userDetails = await axios.get(
        "http://localhost:5000/api/v1/auth/",
        {
          headers: {
            "Content-Type": "application/json",
            bearertoken: token,
          },
        }
      );
      if (!userDetails.data) throw "No user found";
      setUser(userDetails.data.user);
      setToken(token);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) fetchUser(token);
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
    {
      path: "/createLoan",
      element: <CreateLoan />,
    },
  ]);

  return (
    <>
     

      <AuthContext.Provider
        value={{
          user,
          setUser,
          token,
          setToken,
        }}
      >
        <RouterProvider router={router} />
      </AuthContext.Provider>
    </>
  );
}

export default App;
