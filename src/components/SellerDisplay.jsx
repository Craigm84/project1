import axios from 'axios';
import { useState, useEffect } from "react"
import Seller from "./SellerFilter"


function SellerDisplay() {

    function getSellers() {

        axios.get("http://localhost:3000/sellers")
            .then((response) => { setSellers(response.data) }).catch(console.log)

    }
    useEffect(() => { getSellers() }, [])
    const [sellers, setSellers] = useState([]);
    const sellerList = [];
    for (const seller of sellers) {

        sellerList.push(
            <Seller
                key={seller.firstname + " " + seller.lastname}
                firstname={seller.firstname}
                lastname={seller.lastname}
            />
        )
    }




    useEffect(() => {
   
        // setInterval(() => {
        //     getSellers()
        // }, 2000)

        getSellers();
    }, [])


    function getSellers(){
        axios.get("http://localhost:3000/sellers").then((res) => setSellers(res.data)).catch(console.log)
    }





    return (
        <div>
            {sellerList}
        </div>
    );
}

export default SellerDisplay;