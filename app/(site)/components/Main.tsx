import Image from "next/image";

import Health from "@/components/ui/healthy";
import Box from "@/components/ui/boxes";

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

const boxesText = [
    {
        title: 'Gender',
        description:
            'The development and body fat composition of girls and boys may vary with age. Consequently, a child&apos;s age and gender are considered when evalating their BMI.',
        src: './images/icon-gender.svg'
    },
    {
        title: 'Age',
        description:
            'In aging individuals, increased body fat and muscle loss may cause BMI to underestimate body fat content.',
        src: './images/icon-age.svg'
    },
    {
        title: 'Muscle',
        description:
            "BMI may misclassify muscular individuals as overweight or obese, as it doesn't distinguish between fat and muscle.",
        src: './images/icon-muscle.svg'
    },
    {
        title: 'Pregnancy',
        description:
            'Expectant mothers experience weight gain due to their growing baby. Mantaining a healthy pre-pregnancy BMI is advisable to minimise health risks for both mother and child.',
        src: './images/icon-pregnancy.svg'
    },
    {
        title: 'Race',
        description:
            'Certain health concerns may affect individuals of some Black and Asian origins at lower BMI levels than others. To learn more, it is advised to discuss this with your GP or practice nurse.',
        src: './images/icon-race.svg'
    }
]

const Main = () => {
    return ( 
        <div>
            {/* shapeShiftGroup */}
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

            {/* bodyText.map */}
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
            
            {/* boxesText.map */}
            <div className='mb-20'>
                <h2 className='mb-6 text-3xl font-bold tracking-tighter text-center'>
                    Limitations of BMI
                </h2>
            </div>
            <p className='mb-20 text-center text-gray-500'>
                Although BMI is often a practical indicator of healthy weight, it is
                not suited for every person. Specific groups should carefully
                consider their BMI outcomes, and in certain cases, the measurement
                may not be beneficial to use.
            </p>
            <div className='flex flex-wrap justify-center gap-4 mb-10 '>
                {boxesText.map(({ title, description, src }) => (
                    <Box
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