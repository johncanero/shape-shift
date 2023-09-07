import Image from "next/image";

const Main = () => {
    return ( 
        <div>
            <div className='flex items-center gap-6 mb-10'>
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
        </div>
     );
}
 
export default Main;