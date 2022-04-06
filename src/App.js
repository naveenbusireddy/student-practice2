import React, { useState } from "react";
import { nanoid } from "nanoid";
import "./App.css";

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
    console.log(studentFormData); 
  };

  return (
    <div className="app-container">
      <h1>React-Student App-Practice2</h1>
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
            <tr key={student.id}>
              <td>{student.studentName}</td>
              <td>{student.university}</td>
            </tr>
          ))}
        </tbody>
      </table>
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
