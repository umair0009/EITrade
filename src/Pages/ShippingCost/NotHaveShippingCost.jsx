import React, {useEffect, useState} from 'react'
import HaveShippingCost from "../../components/HaveShippingCost/HaveShippingCost";
import ShippingDetails from "../../components/ShippingDetails/ShippingDetails";
import ShippingResult from "../../components/ShippingResult/ShippingResult";
import ShippingType from "../../components/NotHaveShippingCost/ShippingType/ShippingType";
import TypeOfPacking from "../../components/NotHaveShippingCost/ByAir/TypeOfPacking/TypeOfPacking";
import TypeOfCargo from "../../components/NotHaveShippingCost/BySea/TypeOfCargo/TypeOfCargo";

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

            {shippingData?.ShippingType==="BY_AIR"?
                <TypeOfPacking onSubmit={(data) => {
                    let obj = {
                        ...shippingData,
                        shippingDetail: data
                    }
                    setShippingData(obj)
                }}/> :

                <TypeOfCargo onSubmit={(data) => {
                    let obj = {
                        ...shippingData,
                        shippingDetail: data
                    }
                    setShippingData(obj)
                }}/>


            }


            {shippingData?.haveShippingCost===false && !shippingData?.shippingDetail ?
                <ShippingDetails onSubmit={(data) => {
                    let obj = {
                        ...shippingData,
                        shippingDetail: data
                    }
                    setShippingData(obj)
                }}/> : null
            }

            {shippingData?.haveShippingCost && shippingData?.shippingDetail ?
                <ShippingResult
                    onDownloadPDF={() => {
                        onSubmit()
                    }} data={shippingData}/> : null
            }


        </>
    )
}

export default NotHaveShippingCost
