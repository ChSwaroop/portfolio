import { useState } from 'react'
import { AnimatePresence, motion } from "motion/react"
import { Download, Menu, X } from 'lucide-react'
import { Button } from './ui/button';

const Header = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <header className='flex py-5 max-w-4xl w-full px-4 justify-between mx-auto relative'>
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
                Swaroop
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
                transition={{
                    duration: 0.4,
                    ease: 'easeIn'
                }}
                className='items-center hidden md:flex'
            >
                <ul className='flex justify-between items-center gap-20 text-muted-foreground'>
                    <li><motion.a href="" className='inline-block hover:text-primary' whileHover={{
                        scale: 1.1,
                    }}>Services</motion.a></li>
                    <li><motion.a href="" className='inline-block hover:text-primary' whileHover={{
                        scale: 1.1,
                    }}>Portfolio</motion.a></li>
                    <li><motion.a href="" className='inline-block hover:text-primary' whileHover={{
                        scale: 1.1,
                    }}>About</motion.a></li>
                    <li><motion.a href="" className='inline-block hover:text-primary' whileHover={{
                        scale: 1.1,
                    }}>Contact Me</motion.a></li>
                </ul>
            </motion.nav>
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
                        transition={{
                            duration: 0.4,
                            ease: 'easeIn'
                        }}
                        className='items-center'
                    >
                        <ul className='flex flex-col justify-between gap-8 text-muted-foreground'>
                            <li><motion.a href="" className='inline-block hover:text-primary' whileHover={{
                                scale: 1.1,
                            }}>Services</motion.a></li>
                            <li><motion.a href="" className='inline-block hover:text-primary' whileHover={{
                                scale: 1.1,
                            }}>Portfolio</motion.a></li>
                            <li><motion.a href="" className='inline-block hover:text-primary' whileHover={{
                                scale: 1.1,
                            }}>About</motion.a></li>
                            <li><motion.a href="" className='inline-block hover:text-primary' whileHover={{
                                scale: 1.1,
                            }}>Contact Me</motion.a></li>
                        </ul>
                    </motion.nav>
                </motion.div>}
            </AnimatePresence>
        </header>
    )
}

export default Header