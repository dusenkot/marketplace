import React from 'react';
import App from './form-send/forms-sends';

const StartupIdeas = () => {
  const ideas = [
    {
      name: 'EcoSwap',
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

  return (
    <div>
      <App />
      {ideas.map((idea, index) => (
        <div key={index}>
          <h2>{idea.name}</h2>
          <p>{idea.description}</p>
          <p>Short Description: {idea.shortDescription}</p>
          <p>Team: {idea.team}</p>
          <p>Create Date: {idea.createDate}</p>
          <p>End User Price: {idea.endUserPrice}</p>
          <p>Estimated Finish Date: {idea.estimatedFinishDate}</p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default StartupIdeas;
