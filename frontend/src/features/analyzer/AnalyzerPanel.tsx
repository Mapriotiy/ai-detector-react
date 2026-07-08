import { useState } from 'react';
import { ExampleChips } from './ExampleChips';

export function AnalyzerPanel() {
    const [text, setText] = useState('');

    return (
        <section className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-2xl shadow-zinc-200/70">
            <div className="border-b border-zinc-100 p-4">
                <div className="inline-flex rounded-full bg-zinc-100 p-1">
                    <button className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-emerald-700 shadow-sm">
                        AI Detector
                    </button>

                    <button className="rounded-full px-6 py-3 text-sm font-semibold text-zinc-500">
                        Writing Quality
                    </button>
                </div>
            </div>

            <div className="p-6">
        <textarea
            value={text}
            onChange={(event) => setText(event.target.value)}
            placeholder="Paste your text here..."
            maxLength={10000}
            className="h-72 w-full resize-none rounded-xl border border-transparent bg-white text-base leading-7 text-zinc-800 outline-none placeholder:text-zinc-400 focus:border-emerald-200 focus:bg-emerald-50/20"
        />

                <ExampleChips onSelect={setText} />
            </div>

            <footer className="flex items-center justify-between border-t border-zinc-100 px-6 py-4">
                <span className="text-sm text-zinc-500">{text.length}/10,000 characters</span>

                <button
                    disabled={text.trim().length === 0}
                    className="rounded-full bg-zinc-900 px-7 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700 disabled:cursor-not-allowed disabled:bg-zinc-300"
                >
                    Scan
                </button>
            </footer>
        </section>
    );
}