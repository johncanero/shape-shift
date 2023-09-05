'use client'

import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from "@/components/ui/input"

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
                        <form
                            className='mb-6 space-y-4 '
                            onSubmit={() => {}}
                        >   
                            {/* Metric & Label */}
                            <div className='flex flex-row gap-4 justify-self-center'>
                                <label
                                    htmlFor='metric'
                                    className='flex items-center flex-1 gap-4 font-semibold'
                                >
                                    <input
                                        className='w-5 h-5'
                                        type='radio'
                                        id='metric'
                                        value='metric'
                                        // checked={value === 'metric'}
                                        onChange={() => {}}
                                    />
                                    Metric
                                </label>
                                
                                <label
                                    htmlFor='imperial'
                                    className='flex items-center flex-1 gap-4 font-semibold'
                                >
                                    <input
                                        className='w-5 h-5'
                                        type='radio'
                                        id='imperial'
                                        value='imperial'
                                        // checked={value === 'imperial'}
                                        onChange={() => { }}
                                    />
                                    Imperial
                                </label>
                            </div>
                            
                            {/* Height and Weight */}
                            <div className='md:flex md:flex-row md:gap-4 md:w-full'>
                                <label
                                    htmlFor='height'
                                    className='flex flex-col w-full text-sm text-gray-500'
                                >
                                    Height
                                    <input
                                        placeholder='cm'
                                        type='number'
                                        className='px-4 py-2 text-lg font-semibold text-gray-900 border border-gray-300 rounded-md placeholder:text-right placeholder:text-blue-700/50 placeholder:font-semibold placeholder:-mr-2'
                                        id='height'
                                        // value={measures.height !== undefined ? measures.height : ''}
                                        onChange={() => { }}
                                    />
                                </label>

                                <label
                                    htmlFor='weight'
                                    className='flex flex-col w-full text-sm text-gray-500'
                                >
                                    Weight
                                    <input
                                        placeholder='kg'
                                        type='number'
                                        id='weight'
                                        name='weight'
                                        className='px-4 py-2 text-lg font-semibold text-gray-900 border border-gray-300 rounded-md placeholder:text-right placeholder:text-blue-700/50 placeholder:font-semibold placeholder:-mr-2'
                                        // value={measures.weight !== undefined ? measures.weight : ''}
                                        onChange={() => { }}
                                    />
                                </label>
                            </div>


                        </form>
                    </CardContent>
                </Card>
            </div>
        </div>
     );
}
 
export default Header;