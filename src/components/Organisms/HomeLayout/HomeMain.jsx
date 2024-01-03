import React from 'react'
import { PrimaryButton } from '../../Atoms/Button/PrimaryButton'

export const HomeMain = () => {
    return (
        <div className="text-center">
            <section className="flex justify-center">
                <div className="text-center">
                    <img src="./img/macron.jpg" alt="" />
                    <PrimaryButton />
                </div>
            </section>
        </div>
    )
}
