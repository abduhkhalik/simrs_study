import React, { useContext } from "react";
import { BrowserRouter as Routers, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboards from "./pages/Dashboards";
import Sidebar from "./components/sidebar";
import { Context } from "./context/Context";

function App() {
  const { user } = useContext(Context);
  return (
    <>
      <Routers>
        {user ? <Sidebar /> : <></>}
        <Routes>
          <Route path="/" element={user ? <Dashboards /> : <Login />} />
          <Route path="/login" element={user ? <Dashboards /> : <Login />} />
        </Routes>
      </Routers>
    </>
  );
}

export default App;
