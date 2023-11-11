import React, {useEffect, useState} from 'react'
import HaveShippingCost from "../../components/HaveShippingCost/HaveShippingCost";
import ShippingDetails from "../../components/ShippingDetails/ShippingDetails";
import ShippingResult from "../../components/ShippingResult/ShippingResult";
import NotHaveShippingCost from "./NotHaveShippingCost";

const ShippingCost = ({data,onDataUpload}) => {
    const [shippingData, setShippingData] = useState(undefined)


    useEffect(() => {
        console.log(data)
    }, []);
    return (
        <>

            {shippingData?.haveShippingCost === undefined ?
                <HaveShippingCost
                    onSelection={(value) => {
                        let obj = {
                            haveShippingCost: value
                        }
                        setShippingData(obj)

                    }}/> : null
            }

            {shippingData?.haveShippingCost===true && !shippingData?.shippingDetail ?
                <ShippingDetails onSubmit={(data) => {
                    let obj = {
                        ...shippingData,
                        shippingDetail: data
                    }
                    setShippingData(obj)
                }}/> : null
            }


            {shippingData?.haveShippingCost===false && !shippingData?.shippingDetail ?
                <NotHaveShippingCost onSubmit={(data) => {
                    onDataUpload()
                }}/> : null
            }

            {shippingData?.haveShippingCost && shippingData?.shippingDetail ?
                <ShippingResult
                    onDownloadPDF={() => {
                        onDataUpload()
                    }} data={shippingData}/> : null
            }


        </>
    )
}

export default ShippingCost
