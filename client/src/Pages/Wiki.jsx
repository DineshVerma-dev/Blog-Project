import React from 'react';

const wikiData = [
  {
    title: "The Origins of Quantum Physics",
    content: "Quantum physics revolutionized how we understand the universe on the smallest scales. Explore the history and discoveries of this fascinating field.",
    image: "https://cdn.mos.cms.futurecdn.net/R8Bfi2Thwq7cnTabi4J2pE.jpg",
    link: "https://example.com/quantum-physics",
  },
  {
    title: "Ancient Civilizations: Mysteries and Wonders",
    content: "Ancient civilizations like the Egyptians, Mayans, and Greeks have left us with incredible legacies and unsolved mysteries.",
    image: "https://media.licdn.com/dms/image/D5612AQHO_56hf1NRBw/article-cover_image-shrink_720_1280/0/1714548193525?e=2147483647&v=beta&t=0_Xxu9uOQpRUKLrf73PkjJbaC-9s5SOcAFisk3kPThE",
    link: "https://example.com/ancient-civilizations",
  },
  {
    title: "The Art of Japanese Calligraphy",
    content: "Japanese calligraphy is more than just writing—it's a revered art form with deep cultural significance.",
    image: "https://www.invaluable.com/blog/wp-content/uploads/sites/77/2018/09/hero-image-2-1.jpg",
    link: "https://example.com/japanese-calligraphy",
  },
  {
    title: "Cryptography: Secrets of Secure Communication",
    content: "From Caesar ciphers to modern encryption, cryptography has been key to securing communication through the ages.",
    image: "https://kinsta.com/wp-content/uploads/2023/07/what-is-encryption.jpg",
    link: "https://example.com/cryptography",
  },
  {
    title: "The Human Brain: A Complex Mystery",
    content: "The human brain is the most complex structure in the known universe, responsible for everything we think, feel, and do.",
    image: "https://naturalsciences.uoregon.edu/sites/default/files/styles/custom_xl/public/2024-03/neuroscience_home_lead.png?itok=mho-68BV",
    link: "https://example.com/human-brain",
  },
];

const Card = ({ title, content, image, link }) => (
  <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white m-4 transform hover:scale-105 transition-transform duration-300 ease-in-out">
    <img className="w-full h-48 object-cover" src={image} alt={title} />
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">{title}</div>
      <p className="text-gray-700 text-base">{content}</p>
    </div>
    <div className="px-6 pt-4 pb-2">
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-blue-500 text-white rounded-full px-3 py-1 text-sm font-semibold hover:bg-blue-700"
      >
        Learn More
      </a>
    </div>
  </div>
);

function Wiki() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-center mb-8">Wiki Topics</h1>
      <div className="flex flex-wrap justify-center">
        {wikiData.map((item, index) => (
          <Card key={index} title={item.title} content={item.content} image={item.image} link={item.link} />
        ))}
      </div>
    </div>
  );
}

export default Wiki;


