import Image from "next/image";

import Health from "@/components/ui/healthy";

const bodyText = [
    {
        title: 'Healthy eating',
        description:
            'Healthy eating promotes weight control, disease prevention, better digestion, immunity, mental clarity, and mood.',
        src: './images/icon-eating.svg'
    },
    {
        title: 'Regular exercise',
        description:
            'Exercise improve fitness, aids weight control, elevates mood, and reduces disease risk, fostering wellness and longevity.',
        src: './images/icon-exercise.svg'
    },
    {
        title: 'Adequate sleep',
        description:
            'Sleep enhances mental clarity, emotional stability, and physical wellness, promoting overall restoration and rejuvenation.',
        src: './images/icon-sleep.svg'
    }
]

const Main = () => {
    return ( 
        <div>
            <div className='md:flex items-center gap-6 mb-10'>
                <Image
                    className='mx-auto mb-20'
                    src='/images/shapeShift/shapeShiftGroup.png'
                    alt=''
                    width={430}
                    height={430}
                />
                {/* What your BMI result means */}
                <div className='text-center'>
                    <h2 className='mb-4 text-3xl font-bold tracking-tighter text-center'>
                        What your BMI result means
                    </h2>
                    <p className='text-center text-gray-500'>
                        A BMI range of 18.5 to 24.9 is considered a &apos;healthy
                        weight&apos;. Mantaining a healthy weight may lower your chances
                        of experiencing health issues later on, such as obesity and type 2
                        diabetes. Aim for a nutritious diet with reducer fat and sugar
                        content, incorporating ample fruits and vegetables. Additionally,
                        strive for regular physical activity, ideally about 30 minutes
                        daily for five days a week.
                    </p>
                </div>
            </div>

            <div className='md:flex flex-col mb-20 md:flex-row'>
                {bodyText.map(({ title, description, src }) => (
                    <Health
                        key={title}
                        title={title}
                        description={description}
                        src={src}
                    />
                ))}
            </div>
        </div>
     );
}
 
export default Main;