import { Link, useNavigate, useParams } from "react-router-dom"
import React, { useState, useEffect } from "react"


const UpdateStudent = () => {

    const navigate = useNavigate();
    const params = useParams()

    const [name, setName] = useState('');
    const [marks, setMarks] = useState('');
    const [subject, setSubject] = useState('');

    const [StudentData, setStudentData] = useState();


    async function updateMarks(e) {
        e.preventDefault();
        console.log(name, marks, subject);

        let result = await fetch(`http://localhost:3001/students/${params.id}`, {
            method: "put",
            headers: { 'Content-Type': 'application/json', 'x-api-key': JSON.parse(localStorage.getItem("token")) },
            body: JSON.stringify({ name, marks, subject })
        });
        result = await result.json()

        if (result.status === false) {
            alert(result.message)
        } else {
            console.log(result.data, "**");
            setStudentData(result.data)
            navigate('/getStudent')
        }
    }


    return (
        <div className="link">

            <h3>Update Student</h3>
           <Link to="/" >LogOut</Link>

            <div className="login-input">
                <form>
                    <label>name: </label>
                    <input
                        type='text'
                        placeholder="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    /><br />

                    <label>marks: </label>
                    <input
                        type='text'
                        placeholder="marks"
                        value={marks}
                        onChange={(e) => setMarks(e.target.value)}
                    /><br />

                    <label>subject: </label>
                    <input
                        type='number'
                        placeholder="subject"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                    /><br /><br />


                    {/* <Link to="/getStudent" > */}
                    <button className="btn" type="submit" onClick={updateMarks}>Update</button><br />
                    {/* </Link> */}

                    <span>
                        Do you want to go to <Link to="/getStudent">Students page?</Link>
                    </span>
                </form>
            </div>
        </div>
    )
}

export default UpdateStudent