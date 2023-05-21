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
          <span style={{ position: 'absolute', top: 10, right: 10, cursor: 'pointer', fontSize: 24, color: '#aaa' }} onClick={onClose}>
            &times;
          </span>
          <form onSubmit={handleSubmit}>
            <label style={{ marginBottom: 10 }}>
              Name:
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={{ width: '100%', padding: 5 }}
              />
            </label>
            <label style={{ marginBottom: 10 }}>
              Description:
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                style={{ width: '100%', padding: 5 }}
              ></textarea>
            </label>
            <label style={{ marginBottom: 10 }}>
              Short Description:
              <input
                type="text"
                value={shortDescription}
                onChange={(e) => setShortDescription(e.target.value)}
                style={{ width: '100%', padding: 5 }}
              />
            </label>
            <label style={{ marginBottom: 10 }}>
              Team:
              <input
                type="text"
                value={team}
                onChange={(e) => setTeam(e.target.value)}
                style={{ width: '100%', padding: 5 }}
              />
            </label>
            <label style={{ marginBottom: 10 }}>
              Create Date:
              <input
                type="text"
                value={createDate}
                onChange={(e) => setCreateDate(e.target.value)}
                style={{ width: '100%', padding: 5 }}
              />
            </label>
            <label style={{ marginBottom: 10 }}>
              End User Price:
              <input
                type="text"
                value={endUserPrice}
                onChange={(e) => setEndUserPrice(e.target.value)}
                style={{ width: '100%', padding: 5 }}
              />
            </label>
            <label style={{ marginBottom: 10 }}>
              Estimated Finish Date:
              <input
                type="text"
                value={estimatedFinishDate}
                onChange={(e) => setEstimatedFinishDate(e.target.value)}
                style={{ width: '100%', padding: 5 }}
              />
            </label>
            <button type="submit" style={{ backgroundColor: 'blue', color: 'white', padding: '8px 16px', border: 'none', borderRadius: 4 }}>
              Submit
            </button>
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
      {isModalOpen && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 999,
          }}
        ></div>
      )}
      <Modal isOpen={isModalOpen} onClose={closeModal} />
      <button
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          borderRadius: '50%',
          width: '50px',
          height: '50px',
          backgroundColor: 'blue',
          color: 'white',
          border: 'none',
          cursor: 'pointer',
          fontSize: '24px',
          fontWeight: 'bold',
        }}
        onClick={openModal}
      >
        +
      </button>
    </div>
  );
};


export default App1;
