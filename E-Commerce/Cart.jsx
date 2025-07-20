import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

function Cart() {

    const navigate = useNavigate()

    useEffect(
        () => {
            const token = localStorage.getItem("token")

            if (token == null) {
                navigate('/');
                return;
            }
        }
    )

    const [cart, setCart] = useState([])
    const username = localStorage.getItem('token')

    async function fetchCart() {
        const res = await fetch(`http://localhost:5000/cart/${username}`)
        const data = await res.json()
        setCart(data)
    }

    useEffect(
        () => {
            fetchCart()
        }, []
    )

    async function clearAll() {
        await fetch('http://localhost:5000/cart/clear', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ token: username })
        })
        fetchCart()
    }

    async function removeItem(itemId) {
        await fetch('http://localhost:5000/cart/remove', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ token: username, itemId })
        })
        fetchCart()
        console.log(itemId)
    }

    return (
        <div className="d-flex flex-column align-items-center pb-5">
            <h3 className="my-4">Your Cart</h3>

            {
                cart.length > 1 && (
                    <button className="btn btn-danger mb-4" onClick={clearAll}>Remove All Products</button>
                )
            }


            {

                cart.length === 0 ? (
                    <p>Your Cart is empty.</p>
                ) : (
                    <div className="card">
                        {
                            cart.map((item, index) => (
                                <div className="d-flex p-3" key={index} style={{ borderBottom: '1px solid' }}>
                                    <div className="d-flex flex-column gap-3 ">
                                        <div>
                                            <img src={item.img} alt="" height="100" width="100" className="me-4" />
                                        </div>

                                        <h5>${item.price}</h5>
                                    </div>
                                    <p className="me-3" style={{ width: '40vw' }}>{item.title}</p>
                                    <button className="btn btn-danger" onClick={() => removeItem(item._id)}>Remove</button>
                                </div>
                            ))
                        }
                    </div>
                )
            }
        </div>
    )
}

export default Cart