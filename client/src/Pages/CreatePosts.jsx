// import React, { useRef, useState } from 'react';
// import { Editor } from '@tinymce/tinymce-react';

// export default function CreatePosts() {
//   const editorRef = useRef(null);
//   const [showContent, setshowContent] = useState(null)
//   const log = () => {
//     if (editorRef.current) {
//       console.log(editorRef.current.getContent());
//       setshowContent(editorRef.current.getContent());
//     }
//   };

//   return (

//     <div className="bg-white shadow-lg rounded-xl p-4 w-full max-w-9xl sm:px-8 sm:py-10 ">
//       <h2 className="text-3xl font-bold mb-6 text-center sm:text-4xl lg:text-5xl">Craft Remarkable Content</h2>
//       <Editor
//         apiKey={import.meta.env.VITE_EDITOR_KEY }  
//         init={{
//           plugins: [
//             'anchor', 'autolink', 'charmap', 'codesample', 'emoticons', 'image', 'link', 'lists', 'media', 'searchreplace', 'table', 'visualblocks', 'wordcount',
//             'checklist', 'mediaembed', 'casechange', 'export', 'formatpainter', 'pageembed', 'a11ychecker', 'tinymcespellchecker', 'permanentpen', 'powerpaste',
//             'advtable', 'advcode', 'editimage', 'advtemplate', 'ai', 'mentions', 'tinycomments', 'tableofcontents', 'footnotes', 'mergetags', 'autocorrect', 'typography',
//             'inlinecss', 'markdown',
//           ],
//           toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
//           tinycomments_mode: 'embedded',
//           tinycomments_author: 'Author name',
//           height: 600,
//           menubar: true,
//           mobile: {

//             toolbar: 'undo redo | bold italic underline | link image',
//             menubar: false
//           },
//           ai_request: (request, respondWith) => respondWith.string(() => Promise.reject('See docs to implement AI Assistant')),
//         }}
//         initialValue="Welcome to TinyMCE!"
//       />
//       <button
//         onClick={log}
//         className="mt-6 min-w-min bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 px-5 rounded-lg text-lg font-semibold shadow-lg hover:from-blue-600 hover:to-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 transition-colors"
//       >
//         Log Editor Content
//       </button>
//     </div>

//   );
// }


import React, { useState, useEffect } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { useLocation, useNavigate } from 'react-router-dom';

function CreatePosts() {
  const location = useLocation();
  const navigate = useNavigate();
  const editingBlog = location.state || null; // Get the passed blog data for editing
  const [title, setTitle] = useState(editingBlog ? editingBlog.title : '');
  const [content, setContent] = useState(editingBlog ? editingBlog.content : '');
  const [blogs, setBlogs] = useState([]);
  const [isEditing, setIsEditing] = useState(!!editingBlog);

  useEffect(() => {
    const storedBlogs = localStorage.getItem('blogs');
    if (storedBlogs) {
      setBlogs(JSON.parse(storedBlogs));
    }
  }, []);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (content) => {
    setContent(content);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let updatedBlogs;

    if (isEditing) {
      updatedBlogs = blogs.map((blog) => {
        if (blog.id === editingBlog.id) {
          return { ...blog, title, content };
        }
        return blog;
      });
    } else {
      const newBlog = { id: Date.now(), title, content };
      updatedBlogs = [...blogs, newBlog];
    }

    setBlogs(updatedBlogs);
    localStorage.setItem('blogs', JSON.stringify(updatedBlogs));
    setTitle('');
    setContent('');
    navigate('/blogs'); // Redirect to the /blogs page
  };

  return (
    <div className="max-w-7xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{isEditing ? 'Edit Blog' : 'Create Blog'}</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={handleTitleChange}
          placeholder="Title"
          className="w-full p-2 mb-4 border border-gray-400 rounded"
        />
        <Editor
          apiKey={import.meta.env.VITE_EDITOR_KEY}  
          value={content} // Set the editor content to the current blog content
          init={{
            plugins: [
              'anchor', 'autolink', 'charmap', 'codesample', 'emoticons', 'image', 'link', 'lists', 'media', 'searchreplace', 'table', 'visualblocks', 'wordcount',
              'checklist', 'casechange', 'export', 'formatpainter', 'pageembed', 'a11ychecker', 'tinymcespellchecker', 'permanentpen', 'powerpaste',
              'advtable', 'advcode', 'editimage', 'advtemplate', 'mentions', 'tinycomments', 'tableofcontents', 'footnotes', 'mergetags', 'autocorrect', 'typography',
              'inlinecss', 'markdown',
            ],
            toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
            tinycomments_mode: 'embedded',
            tinycomments_author: 'Author name',
            height: 2000,
            
            menubar: true,
            mobile: {
              toolbar: 'undo redo | bold italic underline | link image',
              menubar: false
            },
          //  ai_request: (request, respondWith) => respondWith.string(() => Promise.reject('See docs to implement AI Assistant')),
          }}
          onEditorChange={handleContentChange}
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
        >
          {isEditing ? 'Update' : 'Post'}
        </button>
      </form>
    </div>
  );
}

export default CreatePosts;
