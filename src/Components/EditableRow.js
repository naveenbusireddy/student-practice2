import React from "react";

const EditableRow = ({
  editStudentName,
  editUniversity,
  handleEditStudentName,
  handleEditUniversity,
  cancelClickHandler,
}) => {
  return (
    <tr>
      <td>
        <input
          type="text"
          name="studentName"
          required="required"
          placeholder="Enter Student Name"
          value={editStudentName}
          onChange={handleEditStudentName}
        />
      </td>
      <td>
        <input
          type="text"
          name="university"
          required="required"
          placeholder="Enter University Name"
          value={editUniversity}
          onChange={handleEditUniversity}
        />
      </td>
      <td>
        <button type="submit">Save</button>
        <button type="button" onClick={cancelClickHandler}>
          Cancel
        </button>
      </td>
    </tr>
  );
};

export default EditableRow;
