import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

function ProductEdit(props) {
    const [productName, setProductName] = useState("")
    const [price, setPrice] = useState("")
    const [isLoading, setLoading] = useState(false)
    let history = useHistory()

    useEffect(async () => {
        try {
            let product = await axios.get(`https://611574c58f38520017a3850d.mockapi.io/projectA/${props.match.params.id}`);
            setProductName(product.data.productName);
            setPrice(product.data.price)
        } catch (error) {
            console.log(error)
        }
    }, [])

    let handlesubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            let a = await axios.put(`https://611574c58f38520017a3850d.mockapi.io/projectA/${props.match.params.id}`, { productName, price });
            console.log(a);
            setLoading(false); 
            history.push("/product")
        } catch (error) {
            console.log(error);
            setLoading(false)
        }
    }

    return (
        <>
            <div class="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 class="h3 mb-0 text-gray-800">Edit Product</h1>
            </div>
            <div className="conatiner">
                <form onSubmit={handlesubmit}>
                    <div className="row">
                        <div className=" col-lg-6">
                            <label>Product Name</label>
                            <input type="text" value={productName}
                                onChange={(e) => { setProductName(e.target.value) }} className="form-control" />
                        </div>
                        <div className=" col-lg-6">
                            <label>Price</label>
                            <input type="text" value={price}
                                onChange={(e) => { setPrice(e.target.value) }} className="form-control" />
                        </div>
                        <div className=" col-lg-12 mt-3 text-center">
                            <input className="btn btn-primary" type="submit" value="Update" disabled={isLoading} />
                        </div>
                    </div>

                </form>
            </div>
        </>
    )
}

export default ProductEdit