import React, { useState, useRef, useEffect } from 'react'
import Swal from 'sweetalert2';

function Add({ students, setStudents, setIsAdding }) {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [marks, setMarks] = useState('');
    const [phone, setPhone] = useState('');
    const [result, setResult] = useState('');
    const [date, setDate] = useState('');

    const textInput = useRef(null);

    useEffect(() => {
        textInput.current.focus();
    }, [])

    const handleAdd = e => {
        e.preventDefault();
        if (!firstName || !lastName || !email || !marks || !phone || !result || !date) {
            return Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'All fields are required.',
                showConfirmButton: true
            });
        }

        const id = students.length + 1;
        const newStudent = {
            id,
            firstName,
            lastName,
            email,
            marks,
            phone,
            result,
            date
        }
        students.push(newStudent);
        setStudents(students);
        setIsAdding(false);

        Swal.fire({
            icon: 'success',
            title: 'Added!',
            text: `${firstName} ${lastName}'s data has been Added.`,
            showConfirmButton: false,
            timer: 1500
        });
    }

  
    return (
        
        <div className="small-container">
            <form onSubmit={handleAdd}>
                <h1>Add Student</h1>
                <label htmlFor="firstName">First Name</label>
                
                <input
                    id="firstName"
                    type="text"
                    ref={textInput}
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
                    <input type="submit" value="Add" />
                    <input
                        style={{ marginLeft: '12px' }}
                        className="muted-button"
                        type="button"
                        value="Cancel"
                        onClick={() => setIsAdding(false)}
                    />
                </div>
            </form>
        </div>
    );
}

export default Add