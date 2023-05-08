import { motion } from 'framer-motion'
import React from 'react'

function Videobanner(props:{
    video: string
}) {
  return (
    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} className='min-w-[100vw] h-fit flex items-center justify-center gap-4 max-sm:p-2 p-24'>
    <iframe className='xl:h-[85vh] max-xl:h-[85vh] xl:w-[85vw] max-xl:w-[85vw] max-sm:h-[24vh] max-sm:w-[100vw] rounded-xl' src={props['video']} title="YouTube video player" frameBorder="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
  </motion.div>
  )
}

export default Videobanner