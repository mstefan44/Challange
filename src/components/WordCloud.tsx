import React, { useEffect, useState } from 'react';
import * as d3 from 'd3';
import cloud from 'd3-cloud';
import type { Topic, WordCloudWord } from '../types';
import { getColor } from '../utils';
import { useResizeObserver } from '../hooks/useResizeObserver';

interface Props {
  topics: Topic[];
  onWordClick: (topic: Topic) => void;
}

const WordCloud: React.FC<Props> = ({ topics, onWordClick }) => {
  const [ref, size] = useResizeObserver<HTMLDivElement>();
  const [words, setWords] = useState<WordCloudWord[]>([]);

  useEffect(() => {
    if (size.width === 0 || size.height === 0) return;

    const volumes = topics.map(t => t.volume);
    const min = d3.min(volumes)!;
    const max = d3.max(volumes)!;

    const fontSizeScale = d3.scaleLinear()
      .domain([min, max])
      .range([12, Math.min(size.width, size.height) / 10]);

    // Create a map to store topic data for each word
    const topicMap = new Map<string, Topic>();
    topics.forEach(topic => {
      topicMap.set(topic.label, topic);
    });

    cloud()
      .size([size.width, size.height])
      .words(topics.map(t => ({
        text: t.label,
        size: fontSizeScale(t.volume)
      })))
      .padding(5)
      .rotate(() => ~~(Math.random() * 2) * 90)
      .font('roboto')
      .fontSize((d) => d.size || 12)
      .on('end', (cloudWords) => {
        const wordCloudWords: WordCloudWord[] = cloudWords
          .filter(word => word.text && topicMap.has(word.text))
          .map(word => ({
            text: word.text!,
            size: word.size || 12,
            topic: topicMap.get(word.text!)!,
            x: word.x,
            y: word.y,
            rotate: word.rotate
          }));
        setWords(wordCloudWords);
      })
      .start();
  }, [topics, size]);

  return (
    <div ref={ref} style={{ width: '100%', height: '60vh' }}>
      <svg viewBox={`0 0 ${size.width} ${size.height}`} width="100%" height="100%">
        <g transform={`translate(${size.width / 2}, ${size.height / 2})`}>
          {words.map((word, index) => (
            <text
              key={index}
              fontSize={word.size}
              fontFamily="roboto"
              fill={getColor(word.topic.sentimentScore)}
              textAnchor="middle"
              transform={`translate(${word.x}, ${word.y}) rotate(${word.rotate})`}
              style={{ cursor: 'pointer', userSelect: 'none' }}
              onClick={() => onWordClick(word.topic)}
            >
              {word.text}
            </text>
          ))}
        </g>
      </svg>
    </div>
  );
};

export default WordCloud;
