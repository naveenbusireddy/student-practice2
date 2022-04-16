import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";

const ReadOnlyRow = () => {
  const [APIData, setAPIData] = useState([]);

  const getData = () => {
    axios.get(`http://localhost:3000/api/getAll`).then((responseData) => {
      setAPIData(responseData.data);
    });
  };
  useEffect(() => {
    getData();
  }, []);

  const setData = (data) => {
    let { _id, studentName, university } = data;
    localStorage.setItem("id", _id);
    localStorage.setItem("studentName", studentName);
    localStorage.setItem("university", university);
  };

  const onDelete = (data) => {
    console.log(`Deleted the ${data.studentName}`);
    axios.delete(`http://localhost:3000/api/delete/${data._id}`).then(() => {
      getData();
    });
  };
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Student Name</th>
            <th>University Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {APIData.map((data) => {
            return (
              <tr key={Math.random()}>
                <td>{data.studentName}</td>
                <td>{data.university}</td>
                <td>
                  <button onClick={() => setData(data)}>Edit</button>

                  <button onClick={() => onDelete(data)}>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default ReadOnlyRow;
