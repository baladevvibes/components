"use client"
import React, { useEffect, useState } from 'react'
import heroData from '../heroData'

export default function page({params}) {
    const [preViewData,setPreViewData]=useState()
    useEffect(()=>{
        heroData?.forEach((el)=>{
            if(el?.slug===params?.slug){
                setPreViewData(el)
            }
        })
    },[])

    // const result = preViewData?.htmlcode.slice(1, -1);
    var yourString = "{JsonString}";
    // var result = yourString.substring(1, yourString.length-1);
    // console.log(typeof result)


  return (
    <div>page{params?.slug}
    <code>
    {yourString}

    </code>
    </div>
  )
}
