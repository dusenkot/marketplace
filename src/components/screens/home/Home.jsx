import React, { useState } from 'react';
import App from './form-send/forms-sends';
import App1 from './form-send/forms-sendsbutton';
import backgroundImage from './form-send/star.jpg';

const SellerProfile = ({ name, email, phone }) => {
  return (
    <div style={styles.profile}>
      <h2>{name}</h2>
      <p>Email: {email}</p>
      <p>Phone: {phone}</p>
    </div>
  );
};
const StartupIdeas = () => {
  const [selectedIdea, setSelectedIdea] = useState(null);
  const [selectedSeller, setSelectedSeller] = useState(null);

  const ideas = [
    {name: 'EcoSwap',
      description: 'EcoSwap is a mobile application that enables users to exchange pre-loved items and promote sustainability...',
      shortDescription: 'A mobile app for sustainable item exchange.',
      team: 'Co-founded by a software engineer, a UX designer, and a marketing specialist.',
      createDate: 'February 1, 2023',
      endUserPrice: 'Free to download with in-app purchase options for premium features.',
      estimatedFinishDate: 'August 31, 2023'
      
    },
    {
      name: 'MedConnect',
      description: 'MedConnect is an online platform that connects patients with qualified healthcare professionals through secure video consultations...',
      shortDescription: 'Online video consultations with healthcare professionals.',
      team: 'Founded by a doctor, a tech entrepreneur, and a user experience expert.',
      createDate: 'March 15, 2023',
      endUserPrice: 'Pay-per-consultation or subscription-based plans.',
      estimatedFinishDate: 'November 30, 2023'
    },
    {
      name: 'PetPal',
      description: 'PetPal is a smart pet collar that tracks the activity, health, and location of pets in real-time...',
      shortDescription: 'Smart collar for tracking and monitoring pets.',
      team: 'Founded by an electrical engineer, a veterinarian, and a product designer.',
      createDate: 'April 5, 2023',
      endUserPrice: 'One-time purchase with optional subscription for advanced features.',
      estimatedFinishDate: 'December 31, 2023'

    },
    {
      name: 'LearnHub',
      description: 'LearnHub is an online learning platform that connects students with expert tutors in various subjects...',
      shortDescription: 'Online platform for personalized tutoring.',
      team: 'Founded by a former teacher, a software developer, and a marketing strategist.',
      createDate: 'May 10, 2023',
      endUserPrice: 'Subscription-based pricing for access to tutors and learning resources.',
      estimatedFinishDate: 'February 28, 2024'
    },
    {
      name: 'FitFuel',
      description: 'FitFuel is a subscription-based meal delivery service that provides nutritious and customized meal plans to individuals based on their dietary preferences and fitness goals...',
      shortDescription: 'Personalized meal delivery for a healthy lifestyle.',
      team: 'Founded by a nutritionist, a chef, and a logistics expert.',
      createDate: 'June 20, 2023',
      endUserPrice: 'Subscription-based pricing with different plan options.',
      estimatedFinishDate: 'April 30, 2024'
      
    }
  ];

  const openDescription = (index) => {
    setSelectedIdea(ideas[index]);
  };

  const closeDescription = () => {
    setSelectedIdea(null);
  };

  return (
    <div style={{ backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100%',}}>
      <App />
      <App1 />
      {ideas.map((idea, index) => (
        <div key={index} style={styles.idea}>
          <h2 style={styles.name}>{idea.name}</h2>
          <p style={styles.description}>{idea.shortDescription}</p>
          <button onClick={() => openDescription(index)}>View Description</button>
        </div>
      ))}

      {selectedIdea && (
        <div style={styles.modal}>
          <div style={styles.modalContent}>
            <span style={styles.closeButton} onClick={closeDescription}>
              &times;
            </span>
            <h2 style={styles.name}>{selectedIdea.name}</h2>
            <p style={styles.description}>{selectedIdea.description}</p>
            <p style={styles.team}>{selectedIdea.team}</p>
            <p style={styles.createDate}>Created: {selectedIdea.createDate}</p>
            <p style={styles.endUserPrice}>End User Price: {selectedIdea.endUserPrice}</p>
            <p style={styles.estimatedFinishDate}>Estimated Finish Date: {selectedIdea.estimatedFinishDate}</p>
            <button style={styles.contactButton} onClick={() => openProfile(selectedIdea.team)}>Contact Seller</button>
          </div>
        </div>
      )}

      {selectedSeller && (
        <div style={styles.modal}>
          <div style={styles.modalContent}>
            <span style={styles.closeButton} onClick={closeDescription}>
              &times;
            </span>
            <SellerProfile {...selectedSeller} />
          </div>
        </div>
      )}
    </div>
  );
};


const styles = {

  idea: {
    backgroundColor: 'rgba(255,255,255,0.25)',
    color: '#ffffff',
    padding: '20px',
    marginBottom: '10px',
    borderRadius: '15px',
    maxWidth: '70%',
    marginLeft: '15%',
    marginTop: '5%',
  },
  name: {
    fontSize: '24px',
    marginBottom: '10px',
  },
  description: {
    marginBottom: '10px',
  },
  team: {
    marginBottom: '10px',
  },
  createDate: {
    fontStyle: 'italic',
    marginBottom: '10px',
  },
  endUserPrice: {
    marginBottom: '10px',
  },
  estimatedFinishDate: {
    marginBottom: '10px',
  },
  modal: {
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: '9999',
  },
  modalContent: {
    backgroundColor: '#ffffff',
    padding: '20px',
    borderRadius: '10px',
    maxWidth: '80%',
    maxHeight: '80%',
    overflow: 'auto',
    position: 'relative',
  },
  closeButton: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    fontSize: '24px',
    fontWeight: 'bold',
    cursor: 'pointer',
  },
  contactButton: {
    marginTop: '10px',
    backgroundColor: '#0FE0EB',
    color: '#ffffff',
    padding: '8px 16px',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer',
  },
  profile: {
    padding: '20px',
    borderRadius: '10px',
    backgroundColor: '#f0f0f0',
  },
};


export default StartupIdeas;
