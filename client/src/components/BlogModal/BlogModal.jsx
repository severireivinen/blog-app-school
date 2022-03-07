import React, { useState } from "react";
import Modal from "react-modal";

import blogService from "../../services/blogService";
import "./BlogModal.scss";
Modal.setAppElement('#root')
const BlogModal = ({modalIsOpen, closeModal}) => {

    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")

    const handleTitleChange = (event) => {
        setTitle(event.target.value)
    }
    const handleContentChange= (event) => {
        setContent(event.target.value)
    }

    const postBlog = async () => {
        const newBlog = {
            title: title,
            content: content
        }
        try {
            await blogService.createBlog(newBlog)
            closeModal()
        } catch (error) {
            console.log(error)
        }

        setTitle=''
        setContent=''
    }

  return (
      <div className='Modalbase'>
        <Modal 
            isOpen={modalIsOpen} 
            onRequestClose={closeModal} 
            className="blogmodal"
            overlayClassName="modaloverlay"
        >
            <div className='modal'>
            <h1>New Blog</h1>
            <form>
                <span>BLOG TITLE</span>
                <input type="text" name="header" value={title} onChange={handleTitleChange}/>

                <span>BLOG CONTENT</span>
                <textarea type="text" name="content" value={content} onChange={handleContentChange}/>

                <a ><button onClick={postBlog} type="button" value="Post Blog" >Post Blog</button></a>
                
                <a ><button onClick={closeModal}>Close</button></a>
            </form>
            </div>
            
        </Modal>
      </div>
        
  )
}

export default BlogModal;
