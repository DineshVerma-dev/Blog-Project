import React, { useRef, useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';

export default function CreatePosts() {
  const editorRef = useRef(null);
  const [showContent, setshowContent] = useState(null)
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
      setshowContent(editorRef.current.getContent());
    }
  };

  return (

    <div className="bg-white shadow-lg rounded-xl p-4 w-full max-w-9xl sm:px-8 sm:py-10 ">
      <h2 className="text-3xl font-bold mb-6 text-center sm:text-4xl lg:text-5xl">Craft Remarkable Content</h2>
      <Editor
        apiKey={import.meta.env.VITE_EDITOR_KEY || ezkmz50g0kwq03emoli3bi4gmdnilusikhe1ahk7ybk92olq}  
        init={{
          plugins: [
            'anchor', 'autolink', 'charmap', 'codesample', 'emoticons', 'image', 'link', 'lists', 'media', 'searchreplace', 'table', 'visualblocks', 'wordcount',
            'checklist', 'mediaembed', 'casechange', 'export', 'formatpainter', 'pageembed', 'a11ychecker', 'tinymcespellchecker', 'permanentpen', 'powerpaste',
            'advtable', 'advcode', 'editimage', 'advtemplate', 'ai', 'mentions', 'tinycomments', 'tableofcontents', 'footnotes', 'mergetags', 'autocorrect', 'typography',
            'inlinecss', 'markdown',
          ],
          toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
          tinycomments_mode: 'embedded',
          tinycomments_author: 'Author name',
          height: 600,
          menubar: true,
          mobile: {

            toolbar: 'undo redo | bold italic underline | link image',
            menubar: false
          },
          ai_request: (request, respondWith) => respondWith.string(() => Promise.reject('See docs to implement AI Assistant')),
        }}
        initialValue="Welcome to TinyMCE!"
      />
      <button
        onClick={log}
        className="mt-6 min-w-min bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 px-5 rounded-lg text-lg font-semibold shadow-lg hover:from-blue-600 hover:to-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 transition-colors"
      >
        Log Editor Content
      </button>
    </div>

  );
}

