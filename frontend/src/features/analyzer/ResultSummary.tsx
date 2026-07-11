import type { SegmentAnalysisResponse } from './types';

type ResultSummaryProps = {
    result: SegmentAnalysisResponse;
};

function formatPercent(value: number) {
    return `${Math.round(value * 1000) / 10}%`;
}

export function ResultSummary({ result }: ResultSummaryProps) {
    return (
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-3">
                <span className="block text-xs text-zinc-500">Mean AI</span>
                <strong>{formatPercent(result.summary.meanAiProbability)}</strong>
            </div>

            <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-3">
                <span className="block text-xs text-zinc-500">AI chars</span>
                <strong>{formatPercent(result.summary.aiCharFraction)}</strong>
            </div>

            <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-3">
                <span className="block text-xs text-zinc-500">Segments</span>
                <strong>{result.summary.aiSpanCount}</strong>
            </div>
        </div>
    );
}
