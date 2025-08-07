import React, { useEffect, useState } from 'react';
import type { Topic } from '../types';
import './TopicDetails.css';

interface Props {
  topic: Topic;
  onClose: () => void;
}

const TopicDetails: React.FC<Props> = ({ topic, onClose }) => {
  const { label, volume, sentiment } = topic;
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger slide-in animation when component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 10);
    
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    // Wait for slide-out animation to complete before calling onClose
    setTimeout(() => {
      onClose();
    }, 300); // Match the CSS transition duration
  };

  return (
    <div className={`sidebar ${isVisible ? 'slide-in' : 'slide-out'}`}>
      <button onClick={handleClose}>Close</button>
      <h2>{label}</h2>
      <p><strong>Volume:</strong> {volume}</p>
      <p><strong>Sentiment:</strong></p>
      <ul>
        <li>👍 Positive: {sentiment.positive ?? 0}</li>
        <li>😐 Neutral: {sentiment.neutral ?? 0}</li>
        <li>👎 Negative: {sentiment.negative ?? 0}</li>
      </ul>
    </div>
  );
};

export default TopicDetails;
