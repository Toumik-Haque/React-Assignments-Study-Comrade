import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Product() {

    const [product, setProduct] = useState({

        name: 'LG Double Door Fridge',
        category: 'Electronics',
        build: '2025',
        price: '12,499.00',
        ratings: { stars: '4.4', people: '876' }
    })

    const [showModal, setShowModal] = useState(false)

    const [newPrice, setNewPrice] = useState('')
    const [newBuild, setNewBuild] = useState('')


    const navigate = useNavigate()

    function empBtn() {
        navigate('/employee')
    }

    function editBtn() {
        setShowModal(true)
        setNewBuild(product.build)
        setNewPrice(product.price)
        console.log('edit btn clicked')
    }

    function updateBtn() {

        setProduct(previous => (  // change prev to ({ ...prev, ... })
            {
                ...previous,      // copy all previous properties
                build: newBuild,  // overwrite property
                price: newPrice   // overwrite property
            }
        ))
        setShowModal(false)

    }

    return (

        <div className="my-4 d-flex flex-column align-items-center">

            <button className="align-self-end me-4 mb-4 py-0 rounded-0 btn btn-outline-primary" onClick={empBtn}>Check Employee Data</button>

            <h1 className="mb-5 mt-4">Product Data</h1>

            <div className="card" style={{ width: '18rem' }} >
                <h5 className="card-title bg-info p-2 text-white py-3 text-center">{product.name}</h5>
                <div className="card-body">

                    <p className="card-text">Category: {product.category}</p>
                    <p>Build in: {product.build}</p>
                    <div className="d-flex align-items-start gap-2">
                        <p className="card-text bg-success text-white p-1 px-2">{product.ratings.stars} Star</p>
                        <p className="card-text bg-whitepx-0 py-1">Ratings ( by {product.ratings.people} people )</p>
                    </div>
                    <h4>Price: {product.price}</h4>

                </div>
                <button className="btn btn-warning align-self-end mb-3 me-3" onClick={editBtn}>Edit</button>
            </div>

            {
                showModal ? (

                    <div className="modal d-block modal-bg" tabIndex="-1">
                        <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content">
                                <div className="modal-body d-flex flex-column align-items-center mx-3">
                                    <h4 className="my-4 text-warning">Edit Product Data</h4>

                                    <div className="mt-3 d-flex align-items-center justify-content-between w-100">
                                        <label htmlFor="price">Build :</label>
                                        <input type="text" className="p-1 px-2 border-1 rounded" onChange={(e) => setNewBuild(e.target.value)} value={newBuild}/>
                                    </div>

                                    <div className="mt-3 d-flex align-items-center justify-content-between w-100">
                                        <label htmlFor="price">Price :</label>
                                        <input type="text" className="p-1 px-2 border-1 rounded" onChange={(e) => setNewPrice(e.target.value)} value={newPrice}/>
                                    </div>
                                    
                                </div>
                                <div className="mt-3 modal-footer align-self-center">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={() => setShowModal(false)}>Cancel</button>
                                    <button type="button" className="btn btn-primary" onClick={updateBtn}>Save Edits</button>
                                </div>
                            </div>
                        </div>
                    </div>

                ) : null
            }

        </div>

    )
}

export default Product