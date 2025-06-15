// import React, { useEffect, useState } from "react};
import { motion } from "motion/react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
    return (
        <motion.div className="h-[25rem] w-full rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden"
            id="achievements"
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
                delay: 0.2,
                type: 'spring',
            }}
        >
            <h1 className="text-lg md:text-4xl mb-4 text-black dark:text-white max-w-7xl w-full px-4  ">Acheivements</h1>
            <InfiniteMovingCards
                items={achievements}
                direction="right"
                speed="slow"
            />
        </motion.div>
    );
}

const achievements = [
    {
        quote:
            "Won 1st place in the college-wide Appathon competition by building a fully functional productivity app using Flutter and Firebase.",
        platform: "College Event",
        category: "Appathon Winner",
        logo: "/logos/college.svg",
    },
    {
        quote:
            "Achieved 5-star rating in Problem Solving on HackerRank by consistently solving algorithmic challenges and participating in weekly contests.",
        platform: "HackerRank",
        category: "Problem Solving",
        logo: "/logos/hackerrank.svg",
    },
    {
        quote:
            "Earned 2-star coder rating on CodeChef by solving time-constrained competitive programming problems under real contest environments.",
        platform: "CodeChef",
        category: "Competitive Programming",
        logo: "/logos/codechef.svg",
    },
    {
        quote:
            "Secured 6th rank in ECET-2022 (Engineering Common Entrance Test), a state-level competitive exam in Andhra Pradesh for diploma and B.Sc. students seeking lateral entry into engineering programs, demonstrating academic excellence and technical proficiency.",
        platform: "ECET - Andhra Pradesh",
        category: "Rank #6",
        logo: "/logos/ecet.svg", // Use a placeholder if you don't have an official logo
    }

];


