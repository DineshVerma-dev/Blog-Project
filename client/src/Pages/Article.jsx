import React from 'react';

const articleData = [
  {
    title: "The Future of Artificial Intelligence",
    content: "AI is rapidly transforming industries and reshaping how we interact with technology. Discover the limitless possibilities of AI.",
    image: "https://marvel-b1-cdn.bc0a.com/f00000000294549/www.bluefin.com/wp-content/uploads/2020/08/ai-future.jpg",
    link: "https://example.com/ai-future",
  },
  {
    title: "Space Exploration: Beyond the Stars",
    content: "Space exploration unlocks the mysteries of the universe. Explore how humanity is pushing the boundaries of the final frontier.",
    image: "https://r2.erweima.ai/imgcompressed/compressed_b326c7c37d5ee07dace7984e62635c4c.webp",
    link: "https://example.com/space-exploration",
  },
  {
    title: "Sustainable Living: A Greener Tomorrow",
    content: "From renewable energy to eco-friendly practices, sustainable living paves the way for a healthier planet.",
    image: "https://www.rythmfoundation.org/wp-content/uploads/2022/06/RYTHM_Sustainable-habits_01-WB.jpg",
    link: "https://example.com/sustainable-living",
  },
  {
    title: "Blockchain: Revolutionizing Finance",
    content: "Blockchain technology is changing how we think about money, data, and trust. Dive into its disruptive potential.",
    image: "https://community.nasscom.in/sites/default/files/styles/960_x_600/public/media/images/loud%20%2822%29.png?itok=ktzbN1re",
    link: "https://example.com/blockchain-revolution",
  },
  {
    title: "The Psychology of Happiness",
    content: "Understanding what makes us truly happy is a journey through science, philosophy, and mindfulness practices.",
    image: "https://www.psychologs.com/wp-content/uploads/2023/11/website-9.jpg",
    link: "https://example.com/psychology-of-happiness",
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
        Read More
      </a>
    </div>
  </div>
);

function Article() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-center mb-8">Interesting Topics</h1>
      <div className="flex flex-wrap justify-center">
        {articleData.map((item, index) => (
          <Card key={index} title={item.title} content={item.content} image={item.image} link={item.link} />
        ))}
      </div>
    </div>
  );
}

export default Article;
