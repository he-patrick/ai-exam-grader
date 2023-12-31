'use client';

import Image from 'next/image';
import NavLink from './NavLink';

let heroImage = '/ai-example.png'; // Display homepage images here

export default function Hero() {
  return (
    <section>
      <div className="custom-screen pt-28 text-gray-600">
        <div className="space-y-5 max-w-4xl mx-auto text-center">
          <h1 className="text-4xl text-gray-800 font-extrabold mx-auto sm:text-6xl">
            Grade exams using AI
          </h1>
          <p className="max-w-xl mx-auto">
            ExamGPT makes it easy to grade hundreds of exams at once, without the need for TAs and the tedious hours of marking. 
          </p>
          <div className="flex items-center justify-center gap-x-3 font-medium text-sm">
            <NavLink
              href="/start"
              className="text-white bg-gray-800 hover:bg-gray-600 active:bg-gray-900 "
            >
              Get Started
            </NavLink>
            <NavLink
              target="_blank"
              href="https://github.com/he-patrick/ai-exam-grader"
              className="text-gray-700 border hover:bg-gray-50"
              scroll={false}
            >
              Learn more
            </NavLink>
          </div>
          <div className=""> {/* grid sm:grid-cols-3 grid-cols-2 gap-4 pt-10 */}
              <Image
                alt="image"
                src={heroImage}
                width={1000}
                height={1000}
                className="rounded-lg"
              />
          </div>
        </div>
      </div>
    </section>
  );
}
