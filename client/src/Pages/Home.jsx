import React from 'react'
import { useState } from 'react'

export default function Home() {


  return (
    <div className="bg-white">
      <div className="relative isolate px-4 pt-10 sm:px-6 lg:px-8"> {/* Reduced padding for mobile */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-32 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        ></div>

        <div className="mx-auto max-w-4xl pb-10 sm:py-38 lg:py-46"> {/* Adjusted max-width for better responsiveness */}
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Announcing our next round of funding.{' '}
              <a href="#" className="font-semibold text-indigo-600">
                <span aria-hidden="true" className="absolute inset-0" />
                Read more <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-8xl"> {/* Adjusted for different screen sizes */}
            <span className='text-6xl sm:text-7xl lg:text-9xl'>Human</span> {/* Larger on bigger screens */}
            <div className='text-6xl sm:text-7xl lg:text-9xl'>
              stories & ideas
            </div>
          </h1>

          <div>
            <h2 className="text-lg sm:text-2xl lg:text-4xl font-sans font-bold tracking-tight text-gray-900">
              A place to read, write, and deepen your understanding
            </h2>
          </div>

          <div className="text-center">
            <p className="mt-6 text-base sm:text-lg leading-8 text-gray-600">
            "The best advice I ever got was that knowledge is power and to keep reading." – David Bailey
            Continual reading empowers us with knowledge, reinforcing the idea that learning is a lifelong endeavor that builds strength.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-x-6 gap-y-4 sm:gap-y-0">
              <a
                href="#"
                className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get started
              </a>
              <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>

        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-10rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%+2rem)] aspect-[1155/678] w-[28.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div>
      </div>
    </div>

  )
}

