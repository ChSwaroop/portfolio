
import { CardBody, CardContainer, CardItem } from '@/components/ui/3d-card';
import { createFileRoute } from '@tanstack/react-router'
import { Code, Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'motion/react';

export const Route = createFileRoute('/')({
  component: RouteComponent,
})


function RouteComponent() {


  return <div className='flex flex-col min-h-screen w-full items-center'>


    <div className='flex flex-col items-center justify-start h-full w-full overflow-hidden relative box-border'>



      <div className='min-h-[400px] w-full relative flex justify-center' >
        <motion.div className='h-[85%] w-[270px] absolute bg-linear-to-b from-muted via-muted to-background rounded-t-full flex justify-center z-0 bottom-0'

          initial={{
            y: -50,
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
        />
        <motion.img src="/assets/images/hero.png" alt="hero" className='h-full max-w-full absolute z-1 bottom-0 mr-3'
          initial={{
            y: 50,
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
        />
        {/* <div className='bg-muted h-[80%] w-64 right-0 absolute rounded-bl-[50%] rounded-br-[50%]' /> */}
      </div>
      <motion.h1 className='text-4xl md:text-6xl font-medium uppercase text-white/90 z-20 text-center'
        initial={{
          y: -10,
        }}
        whileInView={{
          y: 0,
        }}
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

    <div className='w-full flex flex-wrap md:flex-nowrap justify-evenly px-5 items-center'>
      <CardContainer className="inter-var place-content-start">
        <CardBody className=" bg-gray-50 group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] md:max-w-[60vh] lg:max-w-full h-auto rounded-2xl p-6 border  ">
          <CardItem
            translateZ="50"
            className="text-xl font-bold text-black dark:text-white"
          >
            Aditya App
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
          >
            Dart , Flutter , Firebase
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
            {/* <CardItem
                            translateZ={20}
                            as="a"
                            href="https://twitter.com/mannupaaji"
                            target="__blank"
                            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                        >
                            Try now →
                        </CardItem> */}
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
      <div>
        <ul className='ml-8 list-disc text-lg' >
          <li>Developed a user-friendly application using the Flutter framework and Firebase database.</li>
          <li>Used Firebase for user authentication and storing the reviews of the users.</li>
        </ul>
      </div>
    </div>
    <div className='w-full flex justify-evenly px-10 items-center'>
      <CardContainer className="inter-var place-content-start">
        <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-2xl p-6 border  ">
          <CardItem
            translateZ="50"
            className="text-xl font-bold text-black dark:text-white"
          >
            2. Aditya App
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
          >
            Dart , Flutter , Firebase
          </CardItem>
          <CardItem translateZ="100" className="w-full mt-4">
            <img
              // src="/assets/images/1.jpg"
              src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              // height="800"
              // width="800"
              className="h-60 w-full object-cover rounded-2xl group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </CardItem>
          <div className="flex justify-end items-center mt-10">
            {/* <CardItem
                            translateZ={20}
                            as="a"
                            href="https://twitter.com/mannupaaji"
                            target="__blank"
                            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                        >
                            Try now →
                        </CardItem> */}
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
      <div className=''>
        <ul className='list-disc' >
          <li>Developed a user-friendly application using the Flutter framework and Firebase database.</li>
          <li>Used Firebase for user authentication and storing the reviews of the users.</li>
        </ul>
      </div>
    </div>
  </div >
}