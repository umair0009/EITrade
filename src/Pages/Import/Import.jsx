import React, {useEffect, useState} from 'react'
import Home from '../../components/Home/Home'
import ImportThrough from "../../components/ImportThrough/ImportThrough";
import ProductType from "../../components/ProductType/ProductType";
import SelectProduct from "../../components/SelectProduct/SelectProduct";
import HaveShippingCost from "../../components/HaveShippingCost/HaveShippingCost";
import ShippingCost from "../ShippingCost/ShippingCost";

const Import = () => {
    const [data, setData] = useState(undefined)


    const onSelectValue = (e) => {
        let obj = {
            isImport: e,
        }
        setData(obj)
    }


    return (
        <>
            <section id='import'>
                {data === undefined ?
                    <Home onSelect={onSelectValue}
                    /> : (
                        <>
                            {data?.isImport && !data?.importThrough ?
                                <ImportThrough getSelection={(value) => {

                                    let obj = {
                                        ...data,
                                        importThrough: {
                                            value: value,
                                        }
                                    }

                                    setData(obj)
                                }}/> : null
                            }

                            {data?.isImport && (data?.importThrough?.value === 'COI' && !data?.importThrough?.importType) ?
                                <ProductType getImportType={(value) => {
                                    let temp = {
                                        ...data?.importThrough,
                                        importType: value
                                    }
                                    let obj = {
                                        ...data,
                                        importThrough: temp
                                    }
                                    setData(obj)
                                }}/> : null

                            }
                            {data?.isImport &&
                            (data?.importThrough?.value === 'COI' && data?.importThrough?.importType&&!data?.importThrough?.uploadImageData) ?

                                <SelectProduct
                                    onDataUpload={(value) => {

                                        let temp = {
                                            ...data?.importThrough,
                                            uploadImageData: value
                                        }
                                        let obj = {
                                            ...data,
                                            importThrough: temp
                                        }
                                        setData(obj)

                                    }}/> : null
                            }






                            {data?.isImport &&
                            (data?.importThrough?.value === 'COI' && data?.importThrough?.importType&&data?.importThrough?.uploadImageData) ?

                                <ShippingCost
                                    data={data}
                                    onDataUpload={(obj) => {

                                        setData(undefined)

                                    }}/> : null
                            }

                        </>)}


            </section>
        </>
    )
}

export default Import
