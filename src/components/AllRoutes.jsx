import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import React, { useState, useEffect } from "react";
import { supabase } from "../utils/supabaseClient";
import Register from "../pages/Register";
import SignIn from "../pages/SignIn";
const AllRoutes = () => {
  //state for session
  const [sesion, setSession] = useState(null);
  //check if a session is available or not
  const fetchSession = async () => {
    const currentSession = await supabase.auth.getSession();
    if (currentSession.error) {
      console.error("Session error:", currentSession.error);
    }
    console.log("Current Session:", currentSession.data.session);
    setSession(currentSession.data.session);
  };
  useEffect(() => {
    fetchSession();
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setSession(session);
      }
    );
    return authListener.subscription.unsubscribe();
  }, []);
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={sesion ? <Home /> : <SignIn />} />
          <Route path="/" element={sesion ? <Home /> : <SignIn />} />
          <Route path="/signin" element={sesion ? <Home /> : <SignIn />} />
          <Route path="/register" element={sesion ? <Home /> : <Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AllRoutes;
