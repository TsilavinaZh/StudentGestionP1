import React from "react";
import './style/style.css';
import { BrowserRouter, Routes,Route } from "react-router-dom"

import Add from "./Page/add"
import AdminTable from "./Page/AdminTable"
import Calendrier from "./Page/calendrier"
import Dashboard from "./Page/Dashboard"
import Historique from "./Page/Historique"
import Login from "./Page/Login"
import Registre from "./Page/Registre";
import Profil from "./Page/Profil"
import Seemore from "./Page/Seemore";
import Table1 from "./Page/Table1"
import TableClass from "./Page/Tableclass.jsx";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path="*" element={<Dashboard />} />
          <Route path="/Add" element={<Add />} />
          <Route path="/AdminTable" element={<AdminTable />} />
          <Route path="/Calendrier" element={<Calendrier />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Historique" element={<Historique />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Registre" element={<Registre />} />
          <Route path="/Table1" element={<Table1 />} />
          <Route path="/Profil" element={<Profil />} />
          <Route path="/TableClass" element={<TableClass />} />
          <Route path="/TableClass/Seemore" element={<Seemore />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;




