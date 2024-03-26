import CardComponent from '@/components/card/CardComponent';
import React from 'react'

type PropsParams = {
    params: {
        id: number;
    };
    searchparams: any;
}

const ENDPOINT = "https://fakestoreapi.com/products/";

export const getData = async (id: number) => {
    const res = await fetch(`${ENDPOINT} ${id}`);
    const data = await res.json();
    return data;
}




export default async function detail(props: PropsParams) {
    let data = await getData(props.params.id);

    return (
        <>
            <div className=' h-screen  flex place-content-center items-center bg-[#f5f5f5] '>
                <div className=' '>
                    <CardComponent title={data?.title || "No title"} description={data.description} image={data.image} />
                </div>
            </div>
        </>
    )
}
