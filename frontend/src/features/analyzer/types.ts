export type AiSegment = {
    start: number;
    end: number;
    label: 'ai';
    probability: number;
};

export type SegmentAnalysisResponse = {
    summary: {
        documentChars: number;
        meanAiProbability: number;
        maxAiProbability: number;
        aiCharFraction: number;
        aiSpanCount: number;
    };
    aiSegments: AiSegment[];
};