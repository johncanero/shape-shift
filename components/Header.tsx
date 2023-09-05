'use client'

import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'


const Header = () => {
    return ( 
        <div>
            <div className='flex flex-col py-2 mb-10 md:flex-row md:items-center'>
                {/* Body Mass Index Calculator */}
                <div className='flex-1 gap-4 mr-12 md:text-left md:flex md:flex-col'>
                    <h1 className='text-5xl font-bold tracking-tighter text-center md:text-left'>
                        Body Mass <br /> Index Calculator
                    </h1>
                    <p className='text-center text-gray-600 md:text-left'>
                        Better understand your weight in relation to your height using our
                        body mass index calculator. While BMI is not the sole determinant of
                        healthy weight, it offers a valuable starting point to evaluate your
                        overall health and well-being.
                    </p>
                </div>

                <Card className='max-w-prose'>
                    <CardHeader>
                        <CardTitle className='text-lg font-semibold text-gray-900'>
                            Enter your details below
                        </CardTitle>
                    </CardHeader>

                    <CardContent>


                    </CardContent>
                </Card>
            </div>
        </div>
     );
}
 
export default Header;