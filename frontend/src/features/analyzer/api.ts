import type { SegmentAnalysisResponse } from './types';

const API_URL = import.meta.env.VITE_API_URL ?? 'http://127.0.0.1:8002';

export async function analyzeSegments(text: string): Promise<SegmentAnalysisResponse> {
    const response = await fetch(`${API_URL}/api/analyze-segments`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            text,
            threshold: 0.95,
            minSpanChars: 40,
        }),
    });

    if (!response.ok) {
        throw new Error(`Analysis failed: ${response.status}`);
    }

    return response.json();
}