import { useContext } from "react"
import { Link } from "react-router-dom"
import { productsContext } from "./productsContext"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

function Products() {

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

    const { products } = useContext(productsContext)

    console.log(products) // Check products

    const username = localStorage.getItem('token')

    async function addCart(product) {

        const data = {
            token: username,
            product: {
                img: product.image,
                title: product.title,
                price: product.price
            }
        }

        const res = await fetch('http://localhost:5000/cart/add', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        })

        if(res.ok){
            console.log('Added to Cart')
        }

    }

    return (

        <div className="container my-5">

            <div className="d-flex flex-wrap gap-4 products-body">
                {/* Use {} to implement JavaScript within html of React Js */}

                {
                    products.map((product) => (

                        <div className="card products-card" style={{ width: '18rem' }} key={product.id}>
                            <Link to={`/product-description/${product.id}`}>
                                <img src={product.image} className="card-img-top p-3 pb-0" alt="image" height={'250px'} />
                            </Link>
                            <div className="card-body">
                                <p className="text-secondary mt-2 mb-1">{product.category}</p>
                                <h5 className="card-title text-primary text-truncate">{product.title}</h5>
                                <p className="fw-bold fs-3">${product.price}</p>
                                <button className="btn btn-warning me-2" onClick={() => addCart(product)}>Add To Cart</button>
                                <button className="btn text-white" style={{ backgroundColor: 'orangered' }}>Buy Now</button>
                            </div>

                        </div>
                    ))
                }
            </div>
        </div>

    )
}

export default Products