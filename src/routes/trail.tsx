import { createFileRoute } from '@tanstack/react-router'
import { Moon, Star, Sun } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import { useState } from 'react'

export const Route = createFileRoute('/trail')({
    component: RouteComponent,
})

function RouteComponent() {

    const [theme, setTheme] = useState('light');

    return <div className='flex flex-col min-h-screen w-full items-center justify-center p-4'>
        <div className={`themeChange h-10 w-[90px]  ${theme == 'light' ? 'bg-linear-to-tr from-[#7da9ce] from-35% via-[#b4cac7] to-[#fde9ac]' : 'bg-linear-to-t from-[#192636] to-[#a9b5b9] to-90% '} rounded-full px-[1px] items-center flex justify-between relative overflow-hidden shadow-lg shadow-gray-400`}>
            <AnimatePresence mode='wait'>
                {theme != 'light' &&
                    <>
                        <motion.div className="starts absolute top-0 left-0"
                            key="stars"
                            initial={{ opacity: 0, y: -50 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -50 }}
                            transition={{ duration: 0.5 }}
                        >
                            <Star fill='white' strokeWidth={0} size={5} className='absolute top-2 left-3' />
                            <Star fill='white' strokeWidth={0} size={5} className='absolute top-3.5 left-6 rotate-90' />
                            <Star fill='white' strokeWidth={0} size={4} className='absolute top-1.5 left-5.5 rotate-90' />
                            <Star fill='white' strokeWidth={0} size={3} className='absolute top-1 left-8 rotate-90' />
                        </motion.div>

                        <motion.div className="clouds bg-red-500 "
                            key="clouds"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 20 }}
                            exit={{ opacity: 0, y: 50 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className='h-7 w-7 bg-gray-200 rounded-full absolute bottom-[-8px] left-[8px]' />
                            <div className='h-4 w-4 bg-gray-200 rounded-full absolute bottom-[-5px] left-7' />
                            <div className='h-7 w-7 z-10 bg-linear-to-tr from-[#707d82] to-[#d6dbdc] to-65% rounded-full absolute bottom-[-7px] left-[-2px]' />
                            <div className='h-4 w-4 bg-linear-to-tr from-[#707d82] to-[#d6dbdc] to-10% rounded-full absolute bottom-[-5px] left-5' />

                        </motion.div>
                    </>}
            </AnimatePresence>

            <motion.div className={`z-10 theme h-9 w-9 bg-radial ${theme != 'light' ? 'from-[#ebd3a4] to-[#f4c76a] to-90%' : 'bg-radial from-[#384858] to-[#142132]'} rounded-full box-border my-auto flex items-center justify-center border-2 border-white absolute`}
                animate={{ x: theme != 'light' ? "140%" : "0%" }}
                transition={{ duration: 0.4 }}

                onClick={() => setTheme(theme == 'light' ? 'dark' : 'light')}
            >
                <AnimatePresence mode="wait">
                    <motion.div
                        key={theme == 'light' ? "sun" : "moon"}
                        initial={{ opacity: 0, rotate: -90 }}
                        animate={{ opacity: 1, rotate: 0 }}
                        exit={{ opacity: 0, rotate: 90 }}
                        transition={{ duration: 0.4 }}
                    >
                        {theme != 'light' ? <Sun strokeWidth={0.75} size={20} /> : <Moon strokeWidth={0.5} size={20} color='white' />}
                    </motion.div>
                </AnimatePresence>
            </motion.div>

            <AnimatePresence mode='wait'>
                {theme == 'light' &&
                    <>
                        <motion.div className="clouds bg-red-500 absolute right-0"
                            key="clouds"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 20 }}
                            exit={{ opacity: 0, y: 50 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className='h-7 w-7 bg-gray-200 rounded-full absolute bottom-[-8px] right-[8px]' />
                            <div className='h-4 w-4 bg-gray-200 rounded-full absolute bottom-[-5px] right-7' />
                            <div className='h-7 w-7 bg-white rounded-full absolute bottom-[-7px] right-[-2px]' />
                            <div className='h-4 w-4 bg-white rounded-full absolute bottom-[-5px] right-5' />

                        </motion.div>

                        <motion.div className="sun h-5 w-5 rounded-full bg-[#f2db95] absolute top-[-10px] right-2 shadow shadow-amber-200"
                            initial={{ opacity: 0, y: -50 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -50 }}
                            transition={{ duration: 0.5 }}
                        />
                    </>}
            </AnimatePresence>

        </div>

    </div>
}

