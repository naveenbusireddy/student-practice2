const EditableRow = () => {
  return (
    <tr>
      <td>
        <input
          type="text"
          name="studentName"
          required="required"
          placeholder="Enter Student Name"
        />
      </td>
      <td>
        <input
          type="text"
          name="university"
          required="required"
          placeholder="Enter University Name"
        />
      </td>
    </tr>
  );
};

export default EditableRow;
