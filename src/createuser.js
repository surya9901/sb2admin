import React, { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import UserContext from './usercontext'

function Createuser(props) {
    const [userName, setUserName] = useState("")
    const [position, setPosition] = useState("")
    const [office, setOffice] = useState("")
    const [age, setAge] = useState("")
    const [startDate, setStartDate] = useState("")
    const [salary, setSalary] = useState("")

    const userContext = useContext(UserContext)

    const history = useHistory()

    let handlesubmit = (e) => {
        e.preventDefault()
        let userData = { userName, position, office, age, startDate, salary }

        userContext.setUserList([...userContext.userList, userData])

        history.push("/users")

        setUserName("")
        setPosition("")
        setOffice("")
        setAge("")
        setStartDate("")
        setSalary("")
    }

    return (
        <>
            <div class="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 class="h3 mb-0 text-gray-800">Create User</h1>
            </div>
            <div className="conatiner">
                <form onSubmit={handlesubmit}>
                    <div className="row">
                        <div className=" col-lg-6">
                            <label>UserName</label>
                            <input type="text" value={userName}
                                onChange={(e) => { setUserName(e.target.value) }} className="form-control" />
                        </div>
                        <div className=" col-lg-6">
                            <label>Position</label>
                            <input type="text" value={position}
                                onChange={(e) => { setPosition(e.target.value) }} className="form-control" />
                        </div>
                        <div className=" col-lg-6">
                            <label>Office</label>
                            <input type="text" value={office}
                                onChange={(e) => { setOffice(e.target.value) }} className="form-control" />
                        </div>
                        <div className=" col-lg-6">
                            <label>Age</label>
                            <input type="number" value={age}
                                onChange={(e) => { setAge(e.target.value) }} className="form-control" />
                        </div>
                        <div className=" col-lg-6">
                            <label>Start Date</label>
                            <input type="date" value={startDate}
                                onChange={(e) => { setStartDate(e.target.value) }} className="form-control" />
                        </div>
                        <div className=" col-lg-6">
                            <label>Salary</label>
                            <input type="text" value={salary}
                                onChange={(e) => { setSalary(e.target.value) }} className="form-control" />
                        </div>
                        <div className=" col-lg-12 mt-3 text-center">
                            <input className="btn btn-primary" type="submit" value="Submit" />
                        </div>
                    </div>

                </form>
            </div>
        </>
    )
}

export default Createuser
