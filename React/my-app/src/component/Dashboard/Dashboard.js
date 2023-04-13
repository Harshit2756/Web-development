import React, { useEffect, useState } from "react";
import axios from "axios";
import Productdisplay from "./productDisplay";


const Dashboard = () => {

    const [productdata, setProducts] = useState([]);

    useEffect(() => {
        toGetAllProducts();
    }, [])

    const toGetAllProducts = async () => {

        let res = await axios.get("https://onlinetestapi.gerasim.in/api/Ecomm/GetAllProducts");
            console.log(res);
        setProducts(res.data.data);
    }
    return (
        <div>
            {
                productdata.map((item) => {
                    return (
                        <Productdisplay data={item}></Productdisplay>

                    )
                })
            }

        </div>
    );
}

export default Dashboard;