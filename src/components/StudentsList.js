import React from "react";
import "./StudentsList.css";
import EditIcon from "../assets/pencil.png";
import DeleteIcon from "../assets/delete.png";

const StudentsList = ({ data, editData, deleteData }) => {
  return (
    <div className="detailed-table">
      <h3 className="centered-heading">Students List</h3>
      <br />
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Date of Birth</th>
            <th>Class</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.firstName}</td>
              <td>{item.lastName}</td>
              <td>{item.email}</td>
              <td>{item.gender}</td>
              <td>{item.dob}</td>
              <td>{item.class}</td>
              <td>
                <button onClick={() => editData(index)}>
                  <img
                    src={EditIcon}
                    style={{ width: 16, height: 16 }}
                    alt="Edit"
                  />
                </button>
                <button onClick={() => deleteData(index)}>
                  <img
                    src={DeleteIcon}
                    style={{ width: 16, height: 16 }}
                    alt="Delete"
                  />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentsList;
