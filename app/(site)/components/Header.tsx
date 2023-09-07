'use client'

import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from "@/components/ui/input"

type Measures = {
    height?: number
    weight?: number
}

const INITIAL_STATE: Measures = {
    height: undefined,
    weight: undefined
}

export default function Home(): React.ReactNode {
    const [value, setValue] = React.useState('metric')
    const [measures, setMeasures] = React.useState<Measures>(INITIAL_STATE)
    const [bmi, setBMI] = React.useState<number | undefined>(undefined)
    
    // calculateBMI
    const calculateBMI = (weight?: number, height?: number) => {
        if (!height || !weight) {
            setBMI(undefined)
            return
        }

        if (value === 'metric') {
            let heightInMeters = height / 100
            if (isNaN(heightInMeters)) {
                setBMI(undefined)
            } else {
                setBMI(weight / (heightInMeters * heightInMeters))
            }
        } else {
            let heightInInches = height * 12
            if (isNaN(heightInInches)) {
                setBMI(undefined)
            } else {
                setBMI((weight / (heightInInches * heightInInches)) * 703)
            }
        }
    }

    // calculateIdealWeightRange
    function calculateIdealWeightRange(height?: number): [string, string] {
        let lowerRange
        let upperRange
        if (value === 'metric') {
            let heightInMeters = height! / 100
            lowerRange = 18.5 * (heightInMeters * heightInMeters)
            upperRange = 24.9 * (heightInMeters * heightInMeters)
        } else {
            let heightInInches = height! * 12
            lowerRange = 18.5 * (heightInInches * heightInInches)
            upperRange = 24.9 * (heightInInches * heightInInches)
        }
        return [lowerRange.toFixed(2), upperRange.toFixed(2)]
    }

    return (
        <div>
            <div className='flex flex-col py-2 mb-10 lg:flex-row md:items-center'>
                {/* Body Mass Index Calculator */}
                <div className='flex-1 gap-4 md:mx-12 lg:mx-0 lg:mr-16 md:text-left lg:flex md:flex-col'>
                    <h1 className='text-5xl font-bold tracking-tighter text-center md:text-left'>
                        Body Mass <br /> Index Calculator
                    </h1>
                    
                    <div className='mx-4 md:mx-0'>
                        <p className='mt-6 text-center text-gray-600 md:text-left lg:mt-0'>
                            <span className='font-semibold'>Better understand your weight in relation to your height</span> using our
                            body mass index calculator.
                        </p>
                        <p className='mt-2 mb-8 text-center text-gray-600 md:text-left lg:mt-0 lg:mb-0'>
                            While BMI is not the sole determinant of healthy weight, <span className='font-semibold'>it offers a valuable starting point to evaluate your overall health and well-being.</span>
                        </p>
                    </div>
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
                            onSubmit={e => {
                                e.preventDefault()
                                calculateBMI(measures.weight, measures.height)
                            }}
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
                                        checked={value === 'metric'}
                                        onChange={event => {
                                            setValue(event.target.value)
                                        }}
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
                                        checked={value === 'imperial'}
                                        onChange={event => {
                                            setValue(event.target.value)
                                        }}
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
                                    <Input
                                        type='number'
                                        placeholder='cm'
                                        className='px-4 py-2 text-lg font-semibold text-gray-900 border border-gray-300 rounded-md placeholder:text-right placeholder:text-blue-700/50 placeholder:font-semibold placeholder:-mr-2'
                                        id='height'
                                        value={measures.height !== undefined ? measures.height : ''}
                                        onChange={event => {
                                            const newHeight = Number(event.target.value)
                                            setMeasures(measures => ({
                                                ...measures,
                                                height: newHeight
                                            }))
                                            calculateBMI(measures.weight, newHeight)
                                        }}
                                    />


                                </label>

                                <label
                                    htmlFor='weight'
                                    className='flex flex-col w-full text-sm text-gray-500'
                                >
                                    Weight
                                    <Input
                                        placeholder='kg'
                                        type='number'
                                        className='px-4 py-2 text-lg font-semibold text-gray-900 border border-gray-300 rounded-md placeholder:text-right placeholder:text-blue-700/50 placeholder:font-semibold placeholder:-mr-2'
                                        id='height'
                                        name='weight'
                                        value={measures.weight !== undefined ? measures.weight : ''}
                                        onChange={event => {
                                            const newWeight = Number(event.target.value)
                                            setMeasures(measures => ({
                                                ...measures,
                                                weight: newWeight
                                            }))
                                            calculateBMI(newWeight, measures.height)
                                        }}
                                    />
                                </label>
                            </div>
                        </form>

                        {/* Welcome - Enter your Height and Weight */}
                        <div className='p-6 text-white bg-gradient-to-r from-teal-600 to-teal-400 md:rounded-r-[100px] rounded-r-xl rounded-l-xl'>
                            {!bmi ? (
                                <>
                                    <span className='flex mb-2 text-xl font-semibold'>
                                        Welcome!
                                    </span>
                                    <p className='text-sm'>
                                        Enter your height and weight to see your BMI result here.
                                    </p>
                                </>
                            ) : (
                                <div className='flex items-center gap-4'>
                                    <div>
                                        <span>Your BMI is... </span>
                                        <span className='text-xl font-semibold'>
                                            {bmi.toFixed(1)}
                                        </span>
                                    </div>
                                    <div>
                                        <p className='text-sm overflow-clip'>
                                            Your BMI suggests you&apos;re{' '}
                                            <span>
                                                {bmi < 18.5
                                                    ? 'underweight'
                                                    : bmi < 24.9
                                                        ? 'normal weight'
                                                        : bmi < 29.9
                                                            ? 'overweight'
                                                            : 'obese'}
                                            </span>
                                            . Your ideal weight is between{' '}
                                            {calculateIdealWeightRange(measures.height).join(
                                                'kg and '
                                            )}
                                            kg
                                        </p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}

