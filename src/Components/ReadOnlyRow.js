const ReadOnlyRow = ({ student, editClickHandler, deleteClickHandler }) => {
  return (
    <tr>
      <td>{student.studentName}</td>
      <td>{student.university}</td>
      <td>
        <button
          type="button"
          onClick={(event) => editClickHandler(event, student)}
        >
          Edit
        </button>
        <button type="button">
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;
