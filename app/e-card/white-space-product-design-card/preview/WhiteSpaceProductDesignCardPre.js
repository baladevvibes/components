import React from 'react'

export default function WhiteSpaceProductDesignCardPre() {
  return (
    <div>
        <section className={` container mx-auto py-16`}>

        <div className={` grid grid-cols-4`}>
            <div className=' border border-[#eae7e7] rounded-xl shadow drop-shadow-2xl'>
                <div>
                    <img src={`https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`} className={`p-4`} alt="shoes"/>
                </div>

            </div>
        </div>
        </section>
    </div>
  )
}
