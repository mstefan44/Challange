export interface Topic {
    id: string;
    label: string;
    volume: number;
    sentimentScore: number;
    sentiment: {
      positive?: number;
      neutral?: number;
      negative?: number;
    };
  }

export interface WordCloudWord {
  text: string;
  size: number;
  topic: Topic;
  x?: number;
  y?: number;
  rotate?: number;
}

// Type for the d3-cloud word data
export interface CloudWord {
  text: string;
  size: number;
  topic: Topic;
  x?: number;
  y?: number;
  rotate?: number;
}
  