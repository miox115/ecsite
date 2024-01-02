import React from 'react'

import { PrimaryButton } from '../Atoms/Button/PrimaryButton'

export const FirstPromote = () => {
    return (
        <div className="text-center">
            <h1>大切なものが入っています</h1>
            <div className='flex justify-center m-2'>
                <img src="https://dummyimage.com/250x/250/fff" alt="goods" />
            </div>
            <div className="flex  justify-center m-2">
                <img className='m-2' src="https://dummyimage.com/50x/50/fff" alt="icon" />
                <img className='m-2' src="https://dummyimage.com/50x/50/fff" alt="icon" />
                <img className='m-2' src="https://dummyimage.com/50x/50/fff" alt="icon" />
            </div>
            <p className='m-2'>※売上ランキングで登場</p>
            <PrimaryButton />
        </div>
    )
}
