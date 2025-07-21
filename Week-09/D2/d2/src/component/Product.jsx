import {useParams} from "react-router"
import { Link } from "react-router"

const Product = ()=> {
    const params = useParams()
    console.log(params)
    return (
        <>
        <h2>Product N: {params.id}</h2>
        <Link to="/shop">Continue shoping</Link>
        </>
    )
}

export default Product