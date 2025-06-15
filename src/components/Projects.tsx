import { motion } from 'motion/react';
import { CardBody, CardContainer, CardItem } from './ui/3d-card'

const Projects = () => {

    const projects = [
        {
            title: 'Aditya App',
            technologies: ['Flutter', 'Dart', 'Firebase'],
            description: ['Developed a user-friendly application using the Flutter framework and Firebase database.',
                'Used Firebase for user authentication and storing the reviews of the users.'
            ],
        },
        {
            title: 'NOTES APP',
            technologies: ['Flutter', 'Dart', 'Firebase'],
            description: [' Developed a feature-rich notes app using Flutter, integrated with Firebase for seamless storage of notes, user data, and images.',
                'Implemented functionality for easy note sharing, promoting collaboration and knowledge sharing among users.',
                'Designed an intuitive user interface with support for light/dark modes, enabling enhanced user experience and ease of navigation.'
            ],
        },
        {
            title: 'Learn Online',
            technologies: ['Flutter', 'Dart'],
            description: ['Developed ”Learn Online,” a Flutter app offering comprehensive insights on universities, courses, exams, and career options.',
                'Designed an intuitive, responsive frontend using FlutterFlow,enabling seamless navigation through detailed QA pages.',
                'Successfully deployed the app on the Google Play Store, enhancing accessibility and user engagement in education'
            ],
        }
    ];

    return (
        <div className='max-w-7xl' id="projects">
            <motion.h2 className="text-lg md:text-4xl mb-4 text-black dark:text-white max-w-7xl px-5"
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
                    duration: 0.6,
                }}
            >
                Projects
            </motion.h2>

            {projects.map((project, index) => (
                <motion.div
                    key={index}
                    className="w-full flex flex-wrap md:flex-nowrap justify-center md:justify-start gap-3.5 px-5 items-center"
                >
                    {/* Description */}
                    <motion.div
                        className={`w-full md:w-auto ${index % 2 === 1 ? 'order-2 md:order-1' : 'order-2 md:order-2'
                            }`}
                        initial={{
                            y: 50,
                            opacity: 0,
                        }}
                        whileInView={{
                            y: 0,
                            opacity: 1,
                        }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.6,
                            delay: index * 0.2,
                        }}
                    >
                        <ul className="ml-8 list-disc text-sm md:text-lxl lg:text-lg">
                            {project.description.map((des, ind) => (
                                <li key={ind}>{des}</li>
                            ))}
                        </ul>
                    </motion.div>


                    {/* Card */}
                    <motion.div
                        className={`w-full md:w-auto ${index % 2 === 1
                            ? 'order-1 md:order-2'
                            : 'order-1 md:order-1'
                            }`}

                        initial={{
                            y: 50,  // Right slide for even index
                            opacity: 0,
                        }}
                        whileInView={{
                            y: 0,
                            opacity: 1,
                        }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.6,
                            delay: index * 0.2,
                        }}
                    >
                        <CardContainer className="inter-var place-content-start">
                            <CardBody className="bg-gray-50 group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] md:max-w-[60vh] lg:max-w-full h-auto rounded-2xl p-6 border">
                                <CardItem
                                    translateZ="50"
                                    className="text-xl font-bold text-black dark:text-white"
                                >
                                    {project.title}
                                </CardItem>
                                <CardItem
                                    as="p"
                                    translateZ="60"
                                    className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                                >
                                    {project.technologies.map((tech, ind) => (
                                        <span key={ind}>
                                            {tech}
                                            {ind !== project.technologies.length - 1 && ', '}
                                        </span>
                                    ))}
                                </CardItem>
                                <CardItem translateZ="100" className="w-full mt-4">
                                    <img
                                        src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                        height="800"
                                        width="800"
                                        className="h-60 w-full object-cover rounded-2xl group-hover/card:shadow-xl"
                                        alt="thumbnail"
                                    />
                                </CardItem>
                                <div className="flex justify-end items-center mt-10">
                                    <CardItem
                                        translateZ={20}
                                        as="button"
                                        className="px-4 py-2 rounded-2xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                                    >
                                        Sign up
                                    </CardItem>
                                </div>
                            </CardBody>
                        </CardContainer>
                    </motion.div>
                </motion.div>
            ))}
        </div>

    )
}

export default Projects