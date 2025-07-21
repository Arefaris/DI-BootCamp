import { Link } from "react-router"

const Shop = ()=> {
    return <>
        <h2>Shop</h2>
        <div>
            <h2>Iphone 15</h2>
            <Link to={"/product/123"}>Buy now</Link>
        </div>
          <div>
            <h2>Ipad 15</h2>
            <Link to={"/product/234"}>Buy now</Link>
        </div>
    </>
}

export default Shop