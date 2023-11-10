import React, {useEffect, useState} from 'react'
import HaveShippingCost from "../../components/HaveShippingCost/HaveShippingCost";
import ShippingDetails from "../../components/ShippingDetails/ShippingDetails";
import ShippingResult from "../../components/ShippingResult/ShippingResult";

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

            {shippingData?.haveShippingCost && !shippingData?.shippingDetail ?
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
                        onDataUpload()
                    }} data={shippingData}/> : null
            }


        </>
    )
}

export default ShippingCost
