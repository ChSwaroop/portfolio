import { motion } from 'framer-motion';
import { Card, CardContent } from './ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar';

const About = () => {
    return (
        <section id="about" className="py-20">
            <div className="container px-4">
                <motion.h2
                    className="text-4xl font-bold mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    About Me
                </motion.h2>

                <div className="max-w-7xl mx-auto">
                    <Card className="overflow-hidden">
                        <CardContent className="p-8">
                            <div className="grid md:grid-cols-3 gap-8 items-center">
                                <motion.div
                                    className="flex justify-center"
                                    whileHover={{ scale: 1.05, rotate: 3 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <Avatar className="w-48 h-48 rounded-full shadow-lg">
                                        <AvatarImage src="/assets/images/one-s.jpg" alt="Chitturi Swaroop" className='rounded-full shadow-lg object-cover h-48 w-48' />
                                        <AvatarFallback className="text-4xl">CS</AvatarFallback>
                                    </Avatar>
                                </motion.div>

                                <div className="md:col-span-2 space-y-6 text-sm md:text-base lg:text-lg">
                                    <motion.p
                                        className="text-gray-700 dark:text-gray-300 leading-relaxed"
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: 0.2 }}
                                        viewport={{ once: true }}
                                    >
                                        I'm a passionate Software Engineer who loves building scalable, full-stack web applications. I hold a Bachelor's in Computer Science and Engineering from Aditya Engineering College.

                                        My expertise lies in crafting elegant, responsive user interfaces with React and building robust backend services in Go — with a foundation in mobile development using Flutter.
                                    </motion.p>

                                    <motion.p
                                        className="text-gray-700 dark:text-gray-300 leading-relaxed"
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: 0.4 }}
                                        viewport={{ once: true }}
                                    >
                                        Currently, I'm working as a Software Engineer I at Deeptha.ai, where I build scalable web applications with React and Go and work with cutting-edge AI technologies — Large Language Models, prompt engineering, and Retrieval-Augmented Generation (RAG).

                                        I'm driven by a love for clean UI, thoughtful UX, and scalable systems—always aiming to bridge the gap between design and engineering.
                                    </motion.p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
};

export default About;