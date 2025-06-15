import Projects from '@/components/Projects';
import { Timeline } from '@/components/ui/timeline';
import { createFileRoute } from '@tanstack/react-router'
import { Code, Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'motion/react';
import Skills from '@/components/Skills';
import { InfiniteMovingCardsDemo } from '@/components/Achievement';
import About from '@/components/About';

export const Route = createFileRoute('/')({
  component: RouteComponent,
})


function RouteComponent() {

  const data = [
    {
      title: "Apr 2025 - Present",
      content: (
        <div>
          <p className="text-base font-normal text-neutral-800 md:text-xl capitalize dark:text-neutral-200">
            Apxor technology solutions
          </p>
          <p className='pb-8 text-sm md:text-lg text-muted-foreground'>Associate SDE</p>
          <ul className='text-sm list-disc space-y-4 md:text-base'>
            <li>Gaining hands-on experience with full-stack technologies, primarily focusing on React for frontend and Go for backend
              services, while building scalable web applications and interactive user interfaces.</li>
            <li>Actively learning about Large Language Models (LLMs), AI-driven tools, and integrating cutting-edge AI technologies
              into software solutions to enhance user experiences and product functionalities.</li>
          </ul>
        </div>
      ),
    },
    {
      title: "Oct 2024 – Apr 2025",
      content: (
        <div>
          <p className="text-base font-normal text-neutral-800 md:text-xl capitalize dark:text-neutral-200">
            Apxor technology solutions
          </p>
          <p className='pb-8 text-sm md:text-lg text-muted-foreground'>Associate SDE Intern</p>
          <ul className='text-sm list-disc space-y-4 md:text-base'>
            <li>Gaining hands-on experience with full-stack technologies, primarily focusing on React for frontend and Go for backend
              services, while building scalable web applications and interactive user interfaces.</li>
            <li>Actively learning about Large Language Models (LLMs), AI-driven tools, and integrating cutting-edge AI technologies
              into software solutions to enhance user experiences and product functionalities.</li>
          </ul>
        </div>
      ),
    },
    {
      title: "Apr 2024 – Sep 2024",
      content: (
        <div>
          <p className="text-base font-normal text-neutral-800 md:text-xl capitalize dark:text-neutral-200">
            Workbees technologies
          </p>
          <p className='pb-8 text-sm md:text-lg text-muted-foreground'>Associate SDE Intern</p>
          <ul className='text-sm list-disc space-y-4 md:text-base'>
            <li>As a Flutter development intern, I actively involved in developing mobile applications using Flutter framework, including
              UI design, implementation of features, and integration of backend services.</li>
            <li>Engaged in collaborative efforts with senior developers and designers to understand project requirements, troubleshoot
              issues, and implement effective solutions.</li>
          </ul>
        </div>
      ),
    },
  ];

  return (

    <div className='flex flex-col min-h-screen w-full items-center pt-20'>
      <div className='flex flex-col items-center justify-start h-full w-full overflow-hidden relative box-border'>
        <div className='min-h-[400px] w-full relative flex justify-center' >
          <motion.div className='h-[85%] w-[270px] absolute bg-linear-to-b/decreasing from-gray-300 dark:from-muted to-background rounded-t-full flex justify-center z-0 bottom-0'
            initial={{
              y: -50,
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
          />
          <motion.img src="/assets/images/hero.png" alt="hero" className='h-full max-w-full absolute z-1 bottom-0 mr-3 drop-shadow-lg drop-shadow-muted-foreground dark:drop-shadow-none'
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
              duration: 0.4,
              ease: 'easeIn'
            }}
          />
          {/* <div className='bg-muted h-[80%] w-64 right-0 absolute rounded-bl-[50%] rounded-br-[50%]' /> */}
        </div>
        <motion.h1 className='text-4xl md:text-6xl font-medium uppercase z-20 text-center'
          initial={{
            y: -10,
          }}
          whileInView={{
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.4,
            ease: 'easeIn'
          }}
        >Swaroop Chitturi</motion.h1>
        <motion.h3 className='md:text-2xl text-xl text-muted-foreground z-20 text-center'
          initial={{
            y: -40,
          }}
          whileInView={{
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.4,
            ease: 'easeIn'
          }}
        >Associate Software Development Engineer</motion.h3>
      </div>

      <motion.footer className='w-full flex justify-center my-12'
        initial={{
          scale: 0.5,
          opacity: 0,
          y: 30,
        }}
        whileInView={{
          scale: 1,
          opacity: 1,
          y: 0,
        }}
        viewport={{ once: true }}
        transition={{
          duration: 0.4,
          ease: 'easeIn'
        }}
      >
        <ul className='grid grid-cols-2 md:grid-cols-4 justify-between max-w-4xl w-full text-sm md:text-xl'>
          <li><a href="" className='flex gap-3 items-center justify-center font-medium text-muted-foreground'><Mail />Email</a></li>
          <li><a href="" className='flex gap-3 items-center justify-center font-medium text-muted-foreground'><Github />Github</a></li>
          <li><a href="" className='flex gap-3 items-center justify-center font-medium text-muted-foreground'><Linkedin />LinkedIn</a></li>
          <li><a href="" className='flex gap-3 items-center justify-center font-medium text-muted-foreground'><Code />LeetCode</a></li>
        </ul>
      </motion.footer>


      <About />

      <Projects />

      <Timeline data={data} />
      <Skills />
      <InfiniteMovingCardsDemo />

    </div >
  )
}

