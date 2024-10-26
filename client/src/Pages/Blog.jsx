// import React from 'react'

// const posts = [
//     {
//       id: 1,
//       title: 'Boost your conversion rate',
//       href: '#',
//       date: 'Mar 16, 2020',
//       datetime: '2020-03-16',
//       thumbnail: 'https://images.unsplash.com/photo-1726402919430-a4521f2b1fa6?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//       category: { title: 'Marketing', href: '#' },
//       author: {
//         name: 'Michael Foster',
//         role: 'Co-Founder / CTO',
//         href: '#',
//         imageUrl:
//           'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//       },
//     },
//     {
//         id: 1,
//         title: 'Boost your conversion rate',
//         href: '#',
//         date: 'Mar 16, 2020',
//         datetime: '2020-03-16',
//         thumbnail: 'https://images.unsplash.com/photo-1726402919430-a4521f2b1fa6?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//         category: { title: 'Marketing', href: '#' },
//         author: {
//           name: 'Michael Foster',
//           role: 'Co-Founder / CTO',
//           href: '#',
//           imageUrl:
//             'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//         },
//       },
//       {
//         id: 1,
//         title: 'Boost your conversion rate',
//         href: '#',
//         date: 'Mar 16, 2020',
//         datetime: '2020-03-16',
//         thumbnail: 'https://images.unsplash.com/photo-1726402919430-a4521f2b1fa6?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//         category: { title: 'Marketing', href: '#' },
//         author: {
//           name: 'Michael Foster',
//           role: 'Co-Founder / CTO',
//           href: '#',
//           imageUrl:
//             'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//         },
//       },
    
//   ]
  
//   export default function Example() {
//     return (
//       <div className="bg-white py-24 sm:py-32">
//         <div className="mx-auto max-w-7xl px-6 lg:px-8">
//           <div className="mx-auto max-w-2xl lg:mx-0">
//             <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">From the blog</h2>
//           </div>
//           <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
//             {posts.map((post) => (
//               <article key={post.id} className="flex max-w-xl flex-col items-start justify-between ">
//                 <div className=''>
//                 <img alt="" src={post.thumbnail} className="" />
//                 </div>
//                 <div className="flex items-center gap-x-4 text-xs">
//                   <time dateTime={post.datetime} className="text-gray-500">
//                     {post.date}
//                   </time>
//                   <a
//                     href={post.category.href}
//                     className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
//                   >
//                     {post.category.title}
//                   </a>
//                 </div>
//                 <div className="group relative">
//                   <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
//                     <a href={post.href}>
//                       <span className="absolute inset-0" />
//                       {post.title}
//                     </a>
//                   </h3>
//                 </div>
//                 <div className="relative mt-8 flex items-center gap-x-4">
//                   <img alt="" src={post.author.imageUrl} className="h-10 w-10 rounded-full bg-gray-50" />
//                   <div className="text-sm leading-6">
//                     <p className="font-semibold text-gray-900">
//                       <a href={post.author.href}>
//                         <span className="absolute inset-0" />
//                         {post.author.name}
//                       </a>
//                     </p>
//                     <p className="text-gray-600">{post.author.role}</p>
//                   </div>
//                 </div>
//               </article>
//             ))}
//           </div>
//         </div>
//       </div>
//     )
//   }



// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';

// function BlogList() {
//   const [blogs, setBlogs] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const storedBlogs = localStorage.getItem('blogs');
//     if (storedBlogs) {
//       setBlogs(JSON.parse(storedBlogs));
//     }
//   }, []);

//   const handleDelete = (id) => {
//     const updatedBlogs = blogs.filter((blog) => blog.id !== id);
//     setBlogs(updatedBlogs);
//     localStorage.setItem('blogs', JSON.stringify(updatedBlogs));
//   };

//   const handleEdit = (blog) => {
//     navigate('/create', { state: blog });
//   };

//   const handleViewBlog = (blog) => {
//     navigate(`/blog/${blog.id}`, { state: blog });
//   };

//   return (
//     <div className="max-w-7xl mx-auto p-4">
//       <h1 className="text-3xl font-bold mb-8">Blog Posts</h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//         {blogs.map((blog) => (
//           <div
//             key={blog.id}
//             className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer"
//             onClick={() => handleViewBlog(blog)}
//           >
//             <div className="p-4">
//               <h2 className="text-2xl font-semibold mb-2">{blog.title}</h2>
//               <div
//                 className="text-gray-700 mb-4 line-clamp-3"
//                 dangerouslySetInnerHTML={{ __html: blog.content }}
//               />
//               <div className="flex justify-between mt-4">
//                 <button
//                   onClick={(e) => {
//                     e.stopPropagation();
//                     handleEdit(blog);
//                   }}
//                   className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//                 >
//                   Edit
//                 </button>
//                 <button
//                   onClick={(e) => {
//                     e.stopPropagation();
//                     handleDelete(blog.id);
//                   }}
//                   className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
//                 >
//                   Delete
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default BlogList;


import React from 'react';

const posts = [
  {
    id: 1,
    title: 'Boost your conversion rate',
    href: '#',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    thumbnail: 'https://images.unsplash.com/photo-1726402919430-a4521f2b1fa6?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: { title: 'Marketing', href: '#' },
    author: {
      name: 'Michael Foster',
      role: 'Co-Founder / CTO',
      href: '#',
      imageUrl: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  // Add more posts as needed...
];

export default function Example() {
  return (
    <div className="bg-white dark:bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            From the blog
          </h2>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
              <div>
                <img alt="" src={post.thumbnail} className="rounded-lg" />
              </div>
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={post.datetime} className="text-gray-500 dark:text-gray-400">
                  {post.date}
                </time>
                <a
                  href={post.category.href}
                  className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
                >
                  {post.category.title}
                </a>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600 dark:text-white">
                  <a href={post.href}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </a>
                </h3>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4">
                <img alt="" src={post.author.imageUrl} className="h-10 w-10 rounded-full bg-gray-50" />
                <div className="text-sm leading-6">
                  <p className="font-semibold text-gray-900 dark:text-white">
                    <a href={post.author.href}>
                      <span className="absolute inset-0" />
                      {post.author.name}
                    </a>
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">{post.author.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}


