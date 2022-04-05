import "./App.css";
import React, { useState } from "react";

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
            <tr>
              <td>{student.studentName}</td>
              <td>{student.university}</td> 
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
