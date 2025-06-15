import { useState } from 'react'
import { AnimatePresence, motion } from "motion/react"
import { Download, Menu, Moon, Star, Sun, X } from 'lucide-react'
import { Button } from './ui/button';
import { useThemeStore } from '@/stores/themeStore';

const Header = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { theme, setTheme } = useThemeStore();

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId.toLowerCase());
        element?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className='w-full flex justify-center fixed z-200 backdrop-blur-lg items-center'>
            <header className='flex py-5 max-w-4xl w-full px-4 justify-between mx-auto'>
                {/* logo */}
                <motion.h1 className='text-lg font-medium uppercase flex gap-2 items-center'
                    initial={{
                        y: 30,
                        opacity: 0,
                    }}
                    whileInView={{
                        y: 0,
                        opacity: 1,
                    }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 0.4,
                        ease: 'easeIn'
                    }}
                >
                    {!isMenuOpen ? (<button className='text-muted-foreground cursor-pointer md:hidden' onClick={() => setIsMenuOpen(true)}>
                        <Menu />
                    </button>) : (<button className='text-muted-foreground cursor-pointer md:hidden' onClick={() => setIsMenuOpen(false)}>
                        <X />
                    </button>)}
                    {/* Swaroop */}
                </motion.h1>
                <motion.nav
                    initial={{
                        y: -30,
                        opacity: 0,
                    }}
                    whileInView={{
                        y: 0,
                        opacity: 1,
                    }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 0.4,
                        ease: 'easeIn'
                    }}
                    className='items-center hidden md:flex'
                >
                    <ul className='flex justify-between items-center gap-20 text-muted-foreground'>
                        <li><motion.button className='inline-block hover:text-primary cursor-pointer' whileHover={{
                            scale: 1.1,
                        }} onClick={() => scrollToSection("projects")} >Projects</motion.button></li>
                        <li><motion.button className='inline-block hover:text-primary cursor-pointer' whileHover={{
                            scale: 1.1,
                        }} onClick={() => scrollToSection("experience")}>Experience</motion.button></li>
                        <li><motion.button className='inline-block hover:text-primary cursor-pointer' whileHover={{
                            scale: 1.1,
                        }} onClick={() => scrollToSection("skills")}>Skills</motion.button></li>
                        <li><motion.button className='inline-block hover:text-primary cursor-pointer' whileHover={{
                            scale: 1.1,
                        }} onClick={() => scrollToSection("achievements")}>Acheivements</motion.button></li>
                    </ul>
                </motion.nav>


                <div className='flex items-center gap-4'>
                    <motion.div
                        whileHover={{
                            scale: 1.1,
                            rotate: '-2deg',
                        }}
                        whileTap={{
                            scale: 0.9,
                            rotate: 0,
                        }}
                        initial={{
                            y: 30,
                            opacity: 0,
                        }}
                        whileInView={{
                            y: 0,
                            opacity: 1,
                        }}
                        viewport={{ once: true }}
                        transition={{
                            scale: { duration: 0.2 },
                            y: { duration: 0.4 },
                            ease: 'easeIn'
                        }}
                    >
                        <Button className='rounded-full cursor-pointer'>Resume
                            <Download />
                        </Button>
                    </motion.div>
                    <div className={`themeChange h-10 w-[90px]  ${theme == 'light' ? 'bg-linear-to-tr from-[#7da9ce] from-35% via-[#b4cac7] to-[#fde9ac]' : 'bg-linear-to-t from-[#192636] to-[#a9b5b9] to-90% '} rounded-full px-[1px] items-center flex justify-between relative overflow-hidden shadow-md shadow-gray-400`}>
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

                        <motion.div className={`z-10 theme h-9 w-9 bg-radial ${theme != 'light' ? 'from-[#ebd3a4] to-[#f4c76a] to-90%' : 'bg-radial from-[#384858] to-[#142132]'} rounded-full box-border my-auto flex items-center justify-center border-2 border-white absolute cursor-pointer`}
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
                                    {theme != 'light' ? <Sun strokeWidth={1.25} size={20} color='black' /> : <Moon strokeWidth={1} size={20} color='white' />}
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

                <AnimatePresence>
                    {isMenuOpen && <motion.div className='mobile-menu absolute bg-muted z-40 p-8 inset-x-3 rounded-2xl origin-top top-24'
                        initial={{
                            scale: 0,
                            opacity: 0,
                        }}
                        whileInView={{
                            scale: 1,
                            opacity: 1,
                        }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.2,
                            ease: 'easeIn'
                        }}
                        exit={{
                            scale: 0,
                            opacity: 0,
                        }}
                    >
                        <motion.nav
                            initial={{
                                y: -30,
                                opacity: 0,
                            }}
                            whileInView={{
                                y: 0,
                                opacity: 1,
                            }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.4,
                                ease: 'easeIn'
                            }}
                            className='items-center'
                        >
                            <ul className='flex flex-col justify-between gap-8 text-muted-foreground'>
                                <li><motion.a href="" className='inline-block hover:text-primary' whileHover={{
                                    scale: 1.1,
                                }}>Projects</motion.a></li>
                                <li><motion.a href="" className='inline-block hover:text-primary' whileHover={{
                                    scale: 1.1,
                                }}>Experience</motion.a></li>
                                <li><motion.a href="" className='inline-block hover:text-primary' whileHover={{
                                    scale: 1.1,
                                }}>Skills</motion.a></li>
                                <li><motion.a href="" className='inline-block hover:text-primary' whileHover={{
                                    scale: 1.1,
                                }}>Acheivements</motion.a></li>
                            </ul>
                        </motion.nav>
                    </motion.div>}
                </AnimatePresence>



            </header>
        </div>
    )
}

export default Header