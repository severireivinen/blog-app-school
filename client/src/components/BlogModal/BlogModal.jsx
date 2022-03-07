import React from 'react'
import Modal from 'react-modal'

import "./BlogModal.scss";
Modal.setAppElement('#root')
const BlogModal = ({modalIsOpen, closeModal}) => {
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
                <input type="text" name="header" />
                <span>BLOG CONTENT</span>
                <textarea type="text" name="content" />
                <a href='/'><button type="submit" value="Post Blog" >Post Blog</button></a>
                
                <a href="/"><button onClick={closeModal}>Close</button></a>
            </form>
            </div>
            
        </Modal>
      </div>
        
  )
}

export default BlogModal