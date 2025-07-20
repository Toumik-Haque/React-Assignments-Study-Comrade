import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { productsContext } from "./productsContext";

function ProductDes() {

    const { id } = useParams() // read the id from url

    // At first, fetch the all Products
    const {products} = useContext(productsContext)


    // Secondly, Filter the Product Data of only the id from url
    const [productData, setProductData] = useState({})
    function filterData() {

        const newData = products.filter((ele) => id == ele.id) // newData is an array of one single obj (filtered obj)

        setProductData(newData[0]) // productData = newData[0] = obj
    }
    useEffect(
        () => {
            filterData()
        }, [products] //
    )

    // console.log(typeof(productData))
    console.log(productData)

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

        <div>

            <div className="container card p-3 rounded-0">
                <div className="row g-0">
                    <div className="col-md-4 card p-3">
                        <img src={productData?.image} className="img-fluid rounded-start" alt="image" style={{ height: '500px' }}/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title text-primary">{productData?.title}</h5>
                            <p className="card-text">{productData?.description}</p>
                            <p className="card-text"><small className="text-body-secondary">{productData?.category}</small></p>
                            <p className="bg-success text-white p-2 py-0 d-inline">{productData?.rating?.rate} <FontAwesomeIcon icon={faStar} size="xs" /></p>
                            <p className="p-2 d-inline">{productData?.rating?.count} Ratings</p>
                            <p className="fw-bold fs-1 mt-2">${productData?.price}</p>
                            <div className="mt-3">
                                <a href="#" className="btn btn-warning me-2" onClick={() => addCart(productData)}>Add To Cart</a>
                                <a href="#" className="btn text-white" style={{ backgroundColor: 'orangered' }}>Buy Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default ProductDes