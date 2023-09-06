import Image from "next/image"

const Navbar = () => {
    return (
        <div>
            <div className="my-12 md:flex md:mx-12 lg:mx-0 md:justify-between">
                {/* ShapeShift Logo */}
                <div className='flex mx-auto md:mx-0'>
                    <Image
                        className='mx-auto mb-6 md:mx-0'
                        src='/images/shapeShiftIcon.png'
                        alt=''
                        width={50}
                        height={50}
                    />
                    <h1 className='hidden mt-2 ml-3 text-2xl font-extrabold text-center md:block text-neutral-800'>
                        ShapeShift
                    </h1>
                </div>

                <div className="hidden mt-3 md:block">
                    <h2 className="font-medium text-neutral-800">BMI Calculator</h2>
                </div>
            </div>


        </div>
    );
}

export default Navbar;