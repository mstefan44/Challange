import React, { useState } from 'react';
import topicsData from './data/topics.json';
import type { Topic } from './types';
import TopicDetails from './components/TopicDetails';
import WordCloud from './components/WordCloud';

const App: React.FC = () => {
  const [selectedTopic, setSelectedTopic] = useState<Topic | null>(null);

  const topics: Topic[] = topicsData.topics;

  return (
    <main>
      <h1>My Topics Challenge</h1>

      <WordCloud topics={topics} onWordClick={setSelectedTopic} />

      {selectedTopic && (
        <TopicDetails
          topic={selectedTopic}
          onClose={() => setSelectedTopic(null)}
        />
      )}
    </main>
  );
};

export default App;
