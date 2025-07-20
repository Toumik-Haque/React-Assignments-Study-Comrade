import { useNavigate } from "react-router-dom"
import { useState } from "react"

function Employee() {

    const [employee, setEmployee] = useState([

        { name: 'Jasmin', age: '22', salary: '5000', designation: 'Junior Employee' },
        { name: 'Toumik', age: '22', salary: '7000', designation: 'Junior Employee' },
        { name: 'Sakil', age: '25', salary: '8500', designation: 'Supervisor' },
        { name: 'Deep', age: '27', salary: '10,000', designation: 'Senior Executive' }
    ])

    const navigate = useNavigate()

    function productBtn() {
        navigate('/product')
    }

    return (

        <div className="my-4 d-flex flex-column align-items-center">

            <button className="align-self-end me-4 mb-4 py-0 rounded-0 btn btn-outline-primary" onClick={productBtn}>Check Product Data</button>

            <h1>Employee Data</h1>

            <div className="mt-4 d-flex flex-wrap justify-content-center gap-3">
                {
                    employee.map((ele, index) => (

                        <div className="card" style={{ width: '18rem' }} key={index} >
                            <h5 className="card-title bg-warning p-2 text-center">{ele.name}</h5>
                            <div className="card-body">
                                
                                <p className="card-text">Age: {ele.age}</p>
                                <p className="card-text">Salary: {ele.salary}</p>
                                <p className="card-text">Designation: {ele.designation}</p>
                            </div>
                        </div>

                    ))
                }
            </div>


        </div>

    )

}

export default Employee