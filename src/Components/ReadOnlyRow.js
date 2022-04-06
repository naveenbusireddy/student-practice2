const ReadOnlyRow = ({student, editClickHandler}) => {
  return (
    <tr key={student.id}>
      <td>{student.studentName}</td>
      <td>{student.university}</td>
      <td>
          <button type="button" onClick={(event) => editClickHandler(event,student)}>Edit</button>
          <button>Delete</button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;
