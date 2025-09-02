import React, { useState, useEffect } from "react";
import {
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  onSnapshot,
} from "firebase/firestore";
import { db } from "./firebase";

export default function Office() {
  const [employees, setEmployees] = useState([]);
  const [form, setForm] = useState({
    name: "",
    department: "",
    email: "",
    phone: "",
  });

  const employeesCollection = collection(db, "officeDetails");

  
  useEffect(() => {
    const instant = onSnapshot(employeesCollection, (snapshot) => {
      setEmployees(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });

    return () => instant();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Add
  const addEmployee = async () => {
    if (!form.name || !form.department || !form.email || !form.phone) {
      return alert("Please fill all fields");
    }
    await addDoc(employeesCollection, form);
    setForm({ name: "", department: "", email: "", phone: "" });
  };

  // Update
  const updateEmployee = async (id, oldData) => {
    const name = prompt("Update Name:", oldData.name) || oldData.name;
    const department =
      prompt("Update Department:", oldData.department) || oldData.department;
    const email = prompt("Update Email:", oldData.email) || oldData.email;
    const phone = prompt("Update Phone:", oldData.phone) || oldData.phone;

    const employeeDoc = doc(db, "officeDetails", id);
    await updateDoc(employeeDoc, { name, department, email, phone });
  };

  // Delete
  const deleteEmployee = async (id) => {
    const employeeDoc = doc(db, "officeDetails", id);
    await deleteDoc(employeeDoc);
  };

  return (
    <div align="center">
      <h2> TCS </h2>

      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          name="name"
          placeholder="Employee Name"
          value={form.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="department"
          placeholder="Department"
          value={form.department}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone"
          value={form.phone}
          onChange={handleChange}
        />
        <button className="btn btn-outline-primary" onClick={addEmployee}>
          ADD
        </button>
      </div>

      
      <table border="1" style={{ marginTop: "20px", width: "80%" }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Department</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp) => (
            <tr key={emp.id}>
              <td>{emp.name}</td>
              <td>{emp.department}</td>
              <td>{emp.email}</td>
              <td>{emp.phone}</td>
              <td>
                <button
                  className="btn btn-outline-success"
                  onClick={() => updateEmployee(emp.id, emp)}
                >
                  EDIT
                </button>
                <button
                  className="btn btn-outline-danger"
                  onClick={() => deleteEmployee(emp.id)}
                >
                  DELETE
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}