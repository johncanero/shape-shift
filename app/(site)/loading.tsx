"use client";

import { BounceLoader } from "react-spinners";

import Box from "@/components/Box";

const Loading = () => {
    return (
        <Box className=" h-screen w-full flex items-center justify-center">
            <BounceLoader color="#2dd4bf" size={40} />
        </Box>
    );
}

export default Loading;