import React from "react";
import { useState  } from "react";
import axios from 'axios';

const StudentForm = () => {  

  const [enteredStudentName, setEnteredStudentName] = useState("");
  const [enteredUniversity, setEnteredUniversity] = useState("");

  const postData = () => {
    
    axios.post(`http://localhost:3000/api/saveDetails`, {
      studentName: enteredStudentName,
      university: enteredUniversity
    })
    setEnteredStudentName('');
    setEnteredUniversity('');
  }

  return (
    <div>
    <form>
      <input
        type="text"
        name="studentName"
        required="required"
        placeholder="Enter Student Name"
        value={enteredStudentName}
        onChange={(e) => setEnteredStudentName(e.target.value)}
      />
      <input
        type="text"
        name="university"
        required="required"
        placeholder="Enter University Name"
        value={enteredUniversity}
        onChange={(e) => setEnteredUniversity(e.target.value)}
      />
      <button onClick={postData} type="submit">
        Add
      </button>
    </form>
    </div>
  )
};

export default StudentForm;
