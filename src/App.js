import React, { useState, useRef } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import StudentForm from "./components/StudentForm";
import StudentsList from "./components/StudentsList";

function App() {
  const [data, setData] = useState([]);

  // Create a ref to hold the reference to the form component
  const formRef = useRef(null);

  const addData = (formData) => {
    // Check if an entry with the given email already exists in contestData
    const index = data.findIndex(
      (item) => item.email === formData.email.trim()
    );

    // If an entry with the email is found, update the existing entry
    if (index !== -1) {
      // Create a copy of the data array
      const updatedData = [...data];
      // Update the existing entry at the found index
      updatedData[index] = formData;
      // Update the state with the updated array
      setData(updatedData);
    } else {
      setData([...data, formData]);
    }
  };

  const editData = (index) => {
    formRef.current.fillWithData(data[index]);
  };

  const deleteData = (index) => {
    const newData = [...data];
    newData.splice(index, 1);
    setData(newData);
  };

  return (
    <div className="App">
      <Navbar />

      <div className="main-container">
        <StudentForm addData={addData} ref={formRef} />
        <StudentsList data={data} editData={editData} deleteData={deleteData} />
      </div>
    </div>
  );
}

export default App;
