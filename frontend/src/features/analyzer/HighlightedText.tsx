import type { ReactNode } from 'react';
import type { AiSegment } from './types';

type HighlightedTextProps = {
    text: string;
    segments: AiSegment[];
};

function formatPercent(value: number) {
    return `${Math.round(value * 1000) / 10}%`;
}

function getHighlightColor(probability: number) {
    const confidence = Math.min(1, Math.max(0, (probability - 0.5) / 0.5));
    const alpha = 0.12 + confidence * 0.55;

    return `rgba(239, 68, 68, ${alpha})`;
}

export function HighlightedText({ text, segments }: HighlightedTextProps) {
    const pieces: ReactNode[] = [];
    let cursor = 0;

    const sortedSegments = [...segments]
        .filter((segment) => segment.end > segment.start)
        .sort((a, b) => a.start - b.start);

    for (const segment of sortedSegments) {
        const start = Math.max(cursor, Math.min(segment.start, text.length));
        const end = Math.max(start, Math.min(segment.end, text.length));

        if (start > cursor) {
            pieces.push(<span key={`human-${cursor}`}>{text.slice(cursor, start)}</span>);
        }

        pieces.push(
            <span
                key={`ai-${start}-${end}`}
                className="rounded px-0.5"
                style={{ backgroundColor: getHighlightColor(segment.probability) }}
                title={`AI confidence ${formatPercent(segment.probability)}`}
            >
        {text.slice(start, end)}
      </span>,
        );

        cursor = end;
    }

    if (cursor < text.length) {
        pieces.push(<span key="human-end">{text.slice(cursor)}</span>);
    }

    return (
        <div className="max-h-80 overflow-auto rounded-xl border border-zinc-200 bg-zinc-50 p-4 text-left text-sm leading-7 text-zinc-800">
            <div className="whitespace-pre-wrap">{pieces}</div>
        </div>
    );
}