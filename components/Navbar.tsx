import Image from "next/image"

const Navbar = () => {
    return ( 
      <div>
            {/* Navbar Logo */}
            <div className='mx-auto my-14 md:mx-0'>
                <Image
                    className='mx-auto mb-6 md:mx-0'
                    src='/images/shapeShiftIcon.png'
                    alt=''
                    width={50}
                    height={50}
                />
            </div>
      </div>
     );
}
 
export default Navbar;