import React from "react";
import Modal from "react-modal";

<<<<<<< HEAD
import modalStyles from "./BlogModal.scss";
/*
const modalStyles = {
    content: {
        top: '35%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        width: '60%',
        transform: 'translate(-40%, -10%)',
        
    }
}
*/
Modal.setAppElement("#root");
const BlogModal = ({ modalIsOpen, closeModal }) => {
  return (
    <div className="">
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        //style={modalStyles}
      >
        <h1>Write a new Blog</h1>
        <form>
          <input type="text" name="header" />
          <textarea type="text" name="content" />
          <button type="submit" value="Post Blog">
            Post Blog
          </button>

          <button onClick={closeModal}>Close</button>
        </form>
      </Modal>
    </div>
  );
};
=======
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
>>>>>>> 08338f0d34155ebca572783e5954cdb1a6235253

export default BlogModal;
