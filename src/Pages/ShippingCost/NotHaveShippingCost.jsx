import React, {useEffect, useState} from 'react'
import HaveShippingCost from "../../components/HaveShippingCost/HaveShippingCost";
import ShippingDetails from "../../components/ShippingDetails/ShippingDetails";
import ShippingResult from "../../components/ShippingResult/ShippingResult";
import ShippingType from "../../components/NotHaveShippingCost/ShippingType/ShippingType";
import TypeOfPacking from "../../components/NotHaveShippingCost/ByAir/TypeOfPacking/TypeOfPacking";
import TypeOfCargo from "../../components/NotHaveShippingCost/BySea/TypeOfCargo/TypeOfCargo";
import CartonDetails from "../../components/NotHaveShippingCost/ByAir/CartonDetails/CartonDetails";

const NotHaveShippingCost = ({data,onSubmit}) => {
    const [shippingData, setShippingData] = useState(undefined)


    useEffect(() => {
        console.log(data)
    }, []);



    return (
        <>

            {shippingData?.ShippingType === undefined ?
                <ShippingType
                    onSelection={(value) => {
                        let obj = {
                            ShippingType: value
                        }
                        setShippingData(obj)

                    }}/> : null
            }


            {shippingData?.ShippingType&&shippingData?.typeOfPacking===undefined?
            <>

            {shippingData?.ShippingType==="BY_AIR"?
                <TypeOfPacking onSelection={(data) => {
                    let obj = {
                        ...shippingData,
                        typeOfPacking: data
                    }
                    setShippingData(obj)
                }}/> :

                (shippingData?.typeOfCargo===undefined&&
                <TypeOfCargo onSelection={(data) => {
                    let obj = {
                        ...shippingData,
                        typeOfCargo: data
                    }
                    setShippingData(obj)
                }}/>)


            }
            </>:null}

            {shippingData?.ShippingType&&!shippingData?.shippingResult&&
            <>
            {shippingData?.typeOfPacking==="CARTON"||shippingData?.typeOfPacking==="GROUPAGE"?
                <CartonDetails onSubmit={(data)=>{
                    let obj = {
                        ...shippingData,
                        shippingResult: data
                    }
                    setShippingData(obj)
                }}/>:null}

            {shippingData?.typeOfPacking==="PALLET"||shippingData?.typeOfPacking==="CONTENEUR"?
                <CartonDetails onSubmit={(data)=>{
                    let obj = {
                        ...shippingData,
                        shippingResult: data
                    }
                    setShippingData(obj)
                }}/>:null}

            </>}


            {shippingData?.ShippingType==="BY_SEA"&&!shippingData?.typeOfPacking?
            <>
            {shippingData?.typeOfCargo==="GROUPAGE"?
                <TypeOfPacking onSelection={(data) => {
                    let obj = {
                        ...shippingData,
                        typeOfPacking: data
                     }
                    setShippingData(obj)
                }}/>:null}

            {shippingData?.typeOfCargo==="CONTENEUR"?


                <CartonDetails onSubmit={(data)=>{
                    let obj = {
                        ...shippingData,
                        shippingResult: data
                    }
                    setShippingData(obj)
                }}/>

                :null}

            </>:null}




            {shippingData?.shippingResult?
                <ShippingResult
                    onDownloadPDF={() => {
                        onSubmit()
                    }} data={shippingData}/> : null
            }


        </>
    )
}

export default NotHaveShippingCost
