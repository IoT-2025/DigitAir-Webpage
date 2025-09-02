import React from 'react'
import { Card } from '.'

const Contacts = () => {
    return (
        <>
            <div className="flex flex-col text-secondary pt-20 gap-3 w-1/2 h-full pl-2">
                <div className="text-md flex w-full justify-start">
                    Se non ti abbiamo ancora convinto
                </div>
                <div className="text-4xl w-full justify-start ">
                    Contattaci
                </div>
                <div className="text-md w-full font-bold justify-start">
                    Un membro del nostro team ti risponderà appena possibile
                </div>
            </div>
            <Card/>
        </>
    )
}

export default Contacts