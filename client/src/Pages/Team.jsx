import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import dinesh from "/dinesh.jpeg"

const Founder = () => {

  useEffect(() => {
    ScrollReveal().reveal('.dinesh ,.abhishek ,.pranay .sahil', {
      duration: 1000,
      distance: '50px',
      origin: 'top',
      opacity: 0,
      delay: 200,
      reset: true, // Ensures animation resets when scrolled out and back into view
    });

    ScrollReveal().reveal('.dinesh img , .abhishek img ,.pranay img ,.sahil img', {
      duration: 1200,
      distance: '50px',
      origin: 'left',
      opacity: 0,
      delay: 400,
      reset: true,
    });

    ScrollReveal().reveal('.dinesh h3, .dinesh p , .abhishek h3 , .abhishek p , .pranay h3 , .pranay p , .sahil h3 , .sahil p', {
      duration: 1400,
      distance: '50px',
      origin: 'right',
      opacity: 0,
      delay: 600,
      reset: true,
    });
  }, []); // Empty dependency array ensures this runs once on mount

  return (
    <>
      <section className=" bg-purple-200 py-16 px-4 sm:px-6 lg:px-8 dinesh">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 font-sans sm:text-4xl">Meet the Founder</h2>
          <div className="mt-8 flex flex-col items-center lg:flex-row lg:justify-center">
            <div className="lg:w-1/3">
              <img
                src={dinesh} // Replace with your founder's image
                alt="Founder"
                className="w-full h-auto rounded-full shadow-lg object-cover"
              />
            </div>
            <div className="mt-8 lg:mt-0 lg:ml-8 lg:w-2/3">
              <h3 className="text-2xl font-bold text-gray-800">DINESHKUMAR VERMA</h3>
              <p className="text-lg text-gray-600 mt-2">Founder & React developer</p>
              <p className="text-base text-gray-700 mt-4">
                Dineshkumar verma  is the visionary behind BlogApp, dedicated to fostering a vibrant community
                of readers and writers. With a passion for storytelling and innovation, Dinesh has
                spearheaded the creation of a platform that empowers individuals to share their ideas
                and connect with like-minded individuals.
              </p>
            </div>
          </div>
        </div>
      </section>


      <section className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8 abhishek">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 font-sans sm:text-4xl">Meet the Developer</h2>
          <div className="mt-8 flex flex-col items-center lg:flex-row lg:justify-center">
            <div className="mt-8 lg:mt-0 lg:mr-8 lg:w-2/3">
              <h3 className="text-2xl font-bold text-gray-800">ABHISHEK YADAV</h3>
              <p className="text-lg text-gray-600 mt-2">Frontend Developer</p>
              <p className="text-base text-gray-700 mt-4">
                Abhishek Yadav is our skilled Frontend Developer, responsible for bringing our design concepts to life
                with clean, responsive code. With a strong understanding of modern web technologies and a passion for user
                interface design, abhishek ensures that BlogApp provides a seamless and engaging experience for all users.
              </p>
            </div>
            <div className="lg:w-1/3">
              <img
                src="https://avatars.githubusercontent.com/u/173982694?v=4" // Replace with your CTO's image
                alt="CTO"
                className="w-full h-auto rounded-full shadow-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>


      <section className=" bg-purple-200 py-16 px-4 sm:px-6 lg:px-8 pranay">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 font-sans sm:text-4xl">Meet the Designer</h2>
          <div className="mt-8 flex flex-col items-center lg:flex-row lg:justify-center">
            <div className="lg:w-1/3">
              <img
                src="https://avatars.githubusercontent.com/u/173799331?v=4" // Replace with your founder's image
                alt="Founder"
                className="w-full h-auto rounded-full shadow-lg object-cover"
              />
            </div>
            <div className="mt-8 lg:mt-0 lg:ml-8 lg:w-2/3">
              <h3 className="text-2xl font-bold text-gray-800">PRANAY VERMA</h3>
              <p className="text-lg text-gray-600 mt-2"> Designer and react developer </p>
              <p className="text-base text-gray-700 mt-4">
                Pranay verma is our talented Designer, responsible for crafting the visual identity of BlogApp. With an eye for
                detail and a passion for aesthetics, pranay ensures that our platform is not only functional but also visually
                appealing. Alex’s designs enhance user experience and strengthen our brand's presence.
              </p>
            </div>
          </div>
        </div>
      </section>


      <section className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8 sahil">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 font-sans sm:text-4xl">Meet the Product Designer</h2>
          <div className="mt-8 flex flex-col items-center lg:flex-row lg:justify-center">
            <div className="mt-8 lg:mt-0 lg:mr-8 lg:w-2/3">
              <h3 className="text-2xl font-bold text-gray-800">SAHIL YADAV</h3>
              <p className="text-lg text-gray-600 mt-2">Designer and react developer</p>
              <p className="text-base text-gray-700 mt-4">
                Sahil yadav is our talented Product Designer, dedicated to crafting seamless and engaging user experiences.
                With a keen eye for detail and a passion for design, Alex transforms ideas into intuitive and visually appealing
                interfaces, ensuring that BlogApp offers a user-friendly and aesthetically pleasing platform.
              </p>
            </div>
            <div className="lg:w-1/3">
              <img
                src='https://via.placeholder.com/300' // Replace with your CTO's image
                alt="CTO"
                className="w-full h-auto rounded-full shadow-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>


    </>



  );
};

export default Founder;
