import React from "react";
import Modal from "react-modal";

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

export default BlogModal;
