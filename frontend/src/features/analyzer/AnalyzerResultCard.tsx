import { HighlightedText } from './HighlightedText';
import { ResultSummary } from './ResultSummary';
import type { SegmentAnalysisResponse } from './types';

type AnalyzerResultCardProps = {
  text: string;
  result: SegmentAnalysisResponse;
};

export function AnalyzerResultCard({ text, result }: AnalyzerResultCardProps) {
  return (
    <section className="w-full rounded-2xl border border-zinc-200 bg-white p-7 shadow-2xl shadow-zinc-200/70">
      <div className="mb-5">
        <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
          Segment analysis
        </p>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight text-zinc-900">
          AI-highlighted result
        </h2>
        <p className="mt-3 text-sm leading-6 text-zinc-500">
          Stronger red means the model is more confident that the segment is AI-written.
        </p>
      </div>

      <div className="space-y-4">
        <ResultSummary result={result} />
        <HighlightedText text={text} segments={result.aiSegments} />
      </div>
    </section>
  );
}
