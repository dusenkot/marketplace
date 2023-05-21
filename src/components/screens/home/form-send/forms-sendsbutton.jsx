import React, { useState } from 'react';

const Modal = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [shortDescription, setShortDescription] = useState('');
  const [team, setTeam] = useState('');
  const [createDate, setCreateDate] = useState('');
  const [endUserPrice, setEndUserPrice] = useState('');
  const [estimatedFinishDate, setEstimatedFinishDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Виконайте дії, що ви бажаєте зібрати та використовувати дані
    // наприклад, ви можете відправити їх на сервер або виконати локальні дії
    // після обробки закрийте модальне вікно
    onClose();
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)', zIndex: 9999, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ backgroundColor: 'white', padding: 20, borderRadius: 4, boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)', position: 'relative' }}>
        <div style={{ maxWidth: 400 }}>
          <span style={{ position: 'absolute', top: 10, right: 10, cursor: 'pointer' }} onClick={onClose}>
            &times;
          </span>
          <form onSubmit={handleSubmit}>
            <label>
              Name:
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
            <label>
              Description:
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </label>
            <label>
              Short Description:
              <input
                type="text"
                value={shortDescription}
                onChange={(e) => setShortDescription(e.target.value)}
              />
            </label>
            <label>
              Team:
              <input
                type="text"
                value={team}
                onChange={(e) => setTeam(e.target.value)}
              />
            </label>
            <label>
              Create Date:
              <input
                type="text"
                value={createDate}
                onChange={(e) => setCreateDate(e.target.value)}
              />
            </label>
            <label>
              End User Price:
              <input
                type="text"
                value={endUserPrice}
                onChange={(e) => setEndUserPrice(e.target.value)}
              />
            </label>
            <label>
              Estimated Finish Date:
              <input
                type="text"
                value={estimatedFinishDate}
                onChange={(e) => setEstimatedFinishDate(e.target.value)}
              />
            </label>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

const App1 = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      {isModalOpen && <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)', zIndex: 999 }}></div>}
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default App1;
