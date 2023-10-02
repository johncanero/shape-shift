"use client";

import Image from "next/image"
import Link from "next/link";
import { motion } from "framer-motion"

const Navbar = () => {
    return (
        <div>
            <div className="my-12 md:flex md:mx-12 lg:mx-0 md:justify-between">
                {/* ShapeShift Logo */}
                <div className='flex mx-auto md:mx-0'>
                    <Image
                        className='mx-auto mb-6 md:mx-0'
                        src='/images/shapeShift/shapeShiftIcon.png'
                        alt='shapeShiftIcon.png'
                        width={50}
                        height={50}
                    />
                    <h1 className='hidden mt-2 ml-3 text-2xl font-extrabold text-center md:block text-neutral-800'>
                        ShapeShift
                    </h1>
                </div>

                {/* Navbar Links */}
                <motion.div className="flex gap-x-6"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        delay: 0.1,
                        duration: 0.4,
                    }}
                >
                    <Link
                        href="/"
                        prefetch={false}
                    >
                        <div className="hidden mt-3 md:block">
                            <h2 className="font-semibold text-neutral-700 hover:text-neutral-900">BMI Calculator</h2>
                        </div>
                    </Link>

                    {/* <Link
                        href="/shape-healthy"
                        prefetch={false}
                    >
                        <div className="hidden mt-3 md:block">
                            <h2 className="font-semibold text-neutral-800 text-neutral-700 hover:text-neutral-900">ShapeHealthy</h2>
                        </div>
                    </Link> */}
                </motion.div>
            </div>
        </div>
    );
}

export default Navbar;