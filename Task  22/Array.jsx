import { useNavigate } from "react-router-dom"
import { useState } from "react"

function Array() {

    const [products, setProducts] = useState([
        { name: "Laptop", price: "50000" },
        { name: "Mobile", price: "20000" },
        { name: "Tablet", price: "30000" }
    ])

    const [modal, setModal] = useState(false)
    const navigate = useNavigate()

    const [newName, setNewName] = useState('')
    const [newPrice, setNewPrice] = useState('')

    function objBtn() {
        navigate('/object')
    }

    function updateBtn() {
        console.log('trying')
        setNewName(products[1].name)
        console.log('clicked')
        setNewPrice(products[1].price)
        setModal(true)
        console.log('clicked')
    }

    function saveBtn() {
        setModal(false)
        const newProducts = [...products] // newProducts is copy of products
        newProducts[1] = {
            ...newProducts[1],
            name: newName,
            price: newPrice
        }
        setProducts(newProducts)
    }

    return (

        <div className="my-4 d-flex flex-column align-items-center">

            <button className="align-self-end me-4 mb-4 py-0 rounded-0 btn btn-outline-primary" onClick={objBtn}>Check Task 22.2</button>

            <h1>Task 22.1</h1>

            <button className="mt-3 btn btn-warning" onClick={updateBtn}>Update 2nd Data</button>

            <div className="mt-4 d-flex flex-wrap justify-content-center gap-3">
                {
                    products.map((ele, index) => (

                        <div className="card" style={{ width: '18rem' }} key={index} >
                            <div className="card-body">

                                {index + 1}. {ele.name} - ₹{ele.price}
                            </div>
                        </div>

                    ))
                }
            </div>

            {
                modal ? (

                    <div className="modal d-block modal-bg" tabIndex="-1">
                        <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content">
                                <div className="modal-body d-flex flex-column align-items-center mx-3">
                                    <h4 className="my-4">Update 2nd Data</h4>

                                    <div className="mt-3 d-flex align-items-center justify-content-between w-100">
                                        <label>Name :</label>
                                        <input type="text" className="p-1 px-2 border-1 rounded" onChange={(e) => setNewName(e.target.value)} value={newName} />
                                    </div>

                                    <div className="mt-3 d-flex align-items-center justify-content-between w-100">
                                        <label>Price :</label>
                                        <input type="text" className="p-1 px-2 border-1 rounded" onChange={(e) => setNewPrice(e.target.value)} value={newPrice} />
                                    </div>

                                </div>
                                <div className="mt-3 modal-footer align-self-center">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={() => setModal(false)}>Cancel</button>
                                    <button type="button" className="btn btn-primary" onClick={saveBtn}>Save Update</button>
                                </div>
                            </div>
                        </div>
                    </div>

                ) : null
            }


        </div>

    )

}

export default Array