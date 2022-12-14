import React, { useState } from 'react'
import Swal from 'sweetalert2';

function Edit({ students, selectedStudent, setStudents, setIsEditing }) {

    const id = selectedStudent.id;

    const [firstName, setFirstName] = useState(selectedStudent.firstName);
    const [lastName, setLastName] = useState(selectedStudent.lastName);
    const [email, setEmail] = useState(selectedStudent.email);
    const [marks, setMarks] = useState(selectedStudent.marks);
    const [phone, setPhone] = useState(selectedStudent.phone);
    const [result, setResult] = useState('');
    const [date, setDate] = useState(selectedStudent.date);

    const handleUpdate = e => {
        e.preventDefault();

        if (!firstName || !lastName || !email || !marks || !phone || !result || !date) {
            return Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'All fields are required.',
                showConfirmButton: true
            });
        }

        const student = {
            id,
            firstName,
            lastName,
            email,
            marks,
            phone,
            result,
            date
        };

        for (let i = 0; i < students.length; i++) {
            if (students[i].id === id) {
                students.splice(i, 1, student);
                break;
            }
        }

        setStudents(students);
        setIsEditing(false);

        Swal.fire({
            icon: 'success',
            title: 'Updated!',
            text: `${student.firstName} ${student.lastName}'s data has been updated.`,
            showConfirmButton: false,
            timer: 1500
        });
    };

    return (
        <div className="small-container">
            <form onSubmit={handleUpdate}>
                <h1>Edit Student</h1>
                <label htmlFor="firstName">First Name</label>
                <input
                    id="firstName"
                    type="text"
                    name="firstName"
                    value={firstName}
                    onChange={e => setFirstName(e.target.value)}
                />
                <label htmlFor="lastName">Last Name</label>
                <input
                    id="lastName"
                    type="text"
                    name="lastName"
                    value={lastName}
                    onChange={e => setLastName(e.target.value)}
                />
                <label htmlFor="email">Email</label>
                <input
                    id="email"
                    type="email"
                    name="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <label htmlFor="marks">Marks</label>
                <input
                    id="marks"
                    type="number"
                    name="marks"
                    min={0}
                    max={100}
                    value={marks}
                    onChange={e => setMarks(e.target.value)}
                />
                <label htmlFor="result">Result</label>
                <select
                    id="result"
                    name="result"
                    value={result}
                    onChange={e => setResult(e.target.value)}>
                    
                    <option value="PASS">PASS</option>
                    <option value="FAIL">FAIL</option>
                </select>
                <label htmlFor="phone">Phone</label>
                <input
                    id="phone"
                    type="number"
                    name="phone"
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                />
                <label htmlFor="date">Date</label>
                <input
                    id="date"
                    type="date"
                    name="date"
                    value={date}
                    onChange={e => setDate(e.target.value)}
                />
                <div style={{ marginTop: '30px' }}>
                    <input type="submit" value="Update" />
                    <input
                        style={{ marginLeft: '12px' }}
                        className="muted-button"
                        type="button"
                        value="Cancel"
                        onClick={() => setIsEditing(false)}
                    />
                </div>
            </form>
        </div>
    );
}

export default Edit