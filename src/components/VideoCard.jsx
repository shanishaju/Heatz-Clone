import React from 'react'
import { Box } from "@mui/material";


function VideoCard() {
    return (
        <>
            <div className="bg-black text-white py-20 px-6 sm:px-12 md:px-20 lg:px-30">

                <Box display="grid" gridTemplateColumns={{ xs: "1fr", md: "1fr 1fr" }} gap={3} >
                    <Box >
                        <h1 className="text-xl md:text-5xl font-bold leading-tight">
                            Trending
                        </h1>
                    </Box>
                    <Box>
                        <p className="text-lg md:text-xl  leading-tight">
                            Experience the perfect balance of style and innovation with Heatz gadgets and accessories. Bringing you the best of the best!
                        </p>
                    </Box>
                </Box>



            </div>

        </>
    )
}

export default VideoCard
