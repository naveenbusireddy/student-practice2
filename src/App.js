import React, { Fragment, useState } from "react";
import { nanoid } from "nanoid";
import "./App.css";
import ReadOnlyRow from "./Components/ReadOnlyRow";
import EditableRow from "./Components/EditableRow";

const studentStaticData = [
  {
    id: 1,
    studentName: "Student-1",
    university: "ABC University",
  },
  {
    id: 2,
    studentName: "Student-2",
    university: "DEF University",
  },
];

const App = () => {
  const [studentList, setStudentList] = useState(studentStaticData);

  const [enteredStudentName, setEnteredStudentName] = useState("");
  const [enteredUniversity, setEnteredUniversity] = useState("");

  const handleStudentNameChange = (event) => {
    setEnteredStudentName(event.target.value);
  };
  const handleUniversityChange = (event) => {
    setEnteredUniversity(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    const studentFormData = {
      id: nanoid(),
      studentName: enteredStudentName,
      university: enteredUniversity,
    };

    setEnteredStudentName("");
    setEnteredUniversity("");

    const newStudentFormData = [...studentList, studentFormData];
    setStudentList(newStudentFormData);
    // console.log(studentFormData);
  };

  const [editStudentId, setEditStudentId] = useState(null);

  const [editStudentName, setEditStudentName] = useState('');
  const [editUniversity, setEditUniversity] = useState('');

  const handleEditStudentName = (event) => {
    setEditStudentName(event.target.value);
  }
  const handleEditUniversity = (event) => {
    setEditUniversity(event.target.value);
  }

  const editClickHandler = (event,student) => {
    event.preventDefault();
    setEditStudentId(student.id);
  };

  const editFormSubmitHandler = (event) => {
    event.preventDefault();

    const editedStudentData = {
      id: editStudentId, 
      studentName: editStudentName,
      university: editUniversity,
    };

    const newStudentFormData = [...studentList];
    const index = studentList.findIndex((student) => student.id === editStudentId);
    newStudentFormData[index] = editedStudentData;

    setStudentList(newStudentFormData);
    setEditStudentId(null);    
  };

  
  const cancelClickHandler = () => {
    setEditStudentId(null);
  };

  
  return (
    <div className="app-container">
      <h1>React-Student App-Practice2</h1>
      <form onSubmit={editFormSubmitHandler}>
      <table>
        <thead>
          <tr>
            <th>Student Name</th>
            <th>University Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {studentList.map((student) => (
            <Fragment>
              {editStudentId === student.id ? (
                <EditableRow 
                handleEditStudentName={handleEditStudentName}
                handleEditUniversity={handleEditUniversity}
                cancelClickHandler={cancelClickHandler}
                />
              ) : (
                <ReadOnlyRow
                  student={student}
                  editClickHandler={editClickHandler}
                  
                />
              )}
            </Fragment>
          ))}
        </tbody>
      </table>
      </form>

      <h2>Add Student Details</h2>
      <form onSubmit={formSubmitHandler}>
        <input
          type="text"
          name="studentName"
          required="required"
          placeholder="Enter Student Name"
          value={enteredStudentName}
          onChange={handleStudentNameChange}
        />
        <input
          type="text"
          name="university"
          required="required"
          placeholder="Enter University Name"
          value={enteredUniversity}
          onChange={handleUniversityChange}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default App;
