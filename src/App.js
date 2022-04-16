import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import EditableRow from "./Components/EditableRow";
import ReadOnlyRow from "./Components/ReadOnlyRow";
import StudentForm from "./Components/StudentForm";

const App = () => {
  return (
    <>
    <Router>
      <Routes>
        <Route exact path="/" element={<ReadOnlyRow />} />
        <Route exact path="/studentForm" element={<StudentForm />} />
        <Route exact path="/readData" element={<ReadOnlyRow />}/>        
        <Route exact path="/update" element={<EditableRow />}/>
      </Routes>      
    </Router>
    </>
  );
}

export default App;