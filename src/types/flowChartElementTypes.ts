// Define types for different flowchart elements
export interface FlowchartElement {
    type: 'circle' | 'rectangle' | 'diamond'|'parallelogram';
    content: string; // Content or label within the shape
  };