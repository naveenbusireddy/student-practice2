import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const EditableRow = () => {
  const navigate = useNavigate();
  const [enteredStudentName, setEnteredStudentName] = useState("");
  const [enteredUniversity, setEnteredUniversity] = useState("");
  const [_id, setId] = useState(null);

  const handleStudentNameChange = (event) => {
    setEnteredStudentName(event.target.value);
  };
  const handleUniversityChange = (event) => {
    setEnteredUniversity(event.target.value);
  };

  useEffect(() => {
    setId(localStorage.getItem('id'));
    setEnteredStudentName(localStorage.getItem('studentName'));
    setEnteredUniversity(localStorage.getItem('university'));
  }, []);

  const updateAPIData = (event) => {
    event.preventDefault();
    axios.patch(`http://localhost:3000/api/update/${_id}`, {
      studentName: enteredStudentName,
      university: enteredUniversity
    })
    .then(() => {
      navigate('/readData');   
    })
  }

  const cancelUpdate = () => {
    navigate('/readData');
  }

  return (
    <>
      <form>
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

          <button type="submit" onClick={updateAPIData}>
            Update
          </button>
  
        <button type="button" onClick={cancelUpdate}>
            Cancel
          </button>
      </form>
    </>
  );
};

export default EditableRow;
