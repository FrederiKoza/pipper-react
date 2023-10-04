import React, { useState } from 'react'
import AddButton from './addButton';
import { Pips } from '../entities/pips';
import ReactModal from 'react-modal';

export default function AddPip({pips, setPips}) {
  const [username, setUsername] = useState("");
  const [content, setContent] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [touchedTodo, setTouchedTodo] = useState(false);

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };
  
  
  const handleAddPip = () => {
    if (isValid) {
      const newPip = new Pips(username, content, new Date());
    setPips([...pips, newPip]);

    // Tømmer input felter
    setUsername("");
    setContent("");

    handleCloseModal();
    } else {
      setTouchedTodo(true);
    }
    
  };

  function handleOpenModal() {
    setIsOpen(true);
  };

  function handleCloseModal() {
    setIsOpen(false);
  };

  let isValid = content.trim() !== '';


  return (
    <div>
      <ReactModal isOpen={isOpen}>
        <div>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={handleUsernameChange}
            onBlur={() => setTouchedTodo(true)}
        />
        </div>

        { !isValid && touchedTodo &&
          <div>
            Username cannot be empty. Please fill out the input.
          </div>
        }
        
        <div>
          <input
            type="text"
            placeholder="Content"
            value={content}
            onChange={handleContentChange}
            onBlur={() => setTouchedTodo(true)}
        />
        </div>
        { !isValid && touchedTodo &&
          <div>
            Content cannot be empty. Please fill out the input.
          </div>
        }

        <AddButton buttonText={"Add Pip"} onClick={handleAddPip}></AddButton>
        <AddButton buttonText={"Close"} onClick={handleCloseModal}></AddButton>
      </ReactModal>
      <AddButton buttonText={"Open Pips"} onClick={handleOpenModal}></AddButton>
    </div>
  )
}
