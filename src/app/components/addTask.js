"use client"
import React, { useState } from "react"
import { FaPlus } from "react-icons/fa";
import Modal from "./model";
import { addTodo } from "../api/api";
import { useRouter } from "next/navigation";




export default function AddTask() {
    const router = useRouter();
    const [modalOpen, setModalOpen] = useState(false);
    const [newTaskValue, setNewTaskValue] = useState("");
  
    const handleOpenModal = () => {
      console.log('Setting modalOpen to true'); 
      setModalOpen(true);
    };
    const handleCloseModal = () => {
        setModalOpen(false);
      };
      const handleSubmitNewTodo = async (e) => {
        e.preventDefault();
        console.log(newTaskValue);
        await addTodo({
            id: "10",
            name: newTaskValue, 
            completed: "false",  
        });
        setNewTaskValue("");
        handleCloseModal();
        router.refresh();
      };
  
    return (
      <div>
        <button onClick={handleOpenModal} className="btn btn-primary w-full">
          Add new task <FaPlus className="ml-2" />
        </button>
  
        {modalOpen && (
          
            <Modal modalOpen={modalOpen} onClose={handleCloseModal} >
                <form onSubmit={handleSubmitNewTodo}>   
                    <h3> add your task here</h3>
                    <div className="modal-action">
                    <input  
                    value={newTaskValue}
                    onChange={e => setNewTaskValue(e.target.value)}
                    type="text"
                     placeholder="Type here" 
                     className="input input-bordered w-full max-w-xs" />
                    <button type="submit" className="btn btn-primary ">Submit</button>
              </div>  </form>
                </Modal>
          
        )}
      </div>
    );
  }
 