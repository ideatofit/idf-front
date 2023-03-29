import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

const ComingSoon = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-gradient-to-r from-backgroundColor via-Midnight to-MidnightOcean">
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 1 }}
                transition={{ duration: 0.5 }}
                className="text-center bg-slate-900 p-8 rounded-lg shadow-lg text-white"
            >
                <motion.h1
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className="text-6xl font-bold mb-4"
                >
                    Coming Soon
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 0.5 }}
                    className="text-xl mb-4"
                >
                    This feature is under development and will be available soon.
                </motion.p>
                <div className='w-full h-fit flex justify-center'>
                <Link href='/'>
                <button className="bg-slate-800 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded flex items-center gap-3">
                    <FontAwesomeIcon icon={faHome} className='h-4 w-4'/>
                    Return to Home
                </button>
                </Link>
                </div>
            </motion.div>
        </div>
    );
};

export default ComingSoon;