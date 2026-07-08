import { Header } from '../../components/Header';
import { AnalyzerPanel } from './AnalyzerPanel';

export function AnalyzerPage() {
    return (
        <div className="min-h-screen bg-[#f7f8f4] text-zinc-950">
            <Header />

            <main className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-24 px-6 py-16 lg:grid-cols-[1.3fr_0.9fr] lg:px-10 lg:py-24">

                <AnalyzerPanel />

                <section>
                    <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-emerald-700">
                        AI text detection
                    </p>

                    <h1 className="max-w-xl text-5xl font-semibold leading-tight tracking-tight text-zinc-900 md:text-6xl">
                        AI detector for{' '}
                        <span className="text-emerald-700">modern writing.</span>
                    </h1>

                    <p className="mt-6 max-w-lg text-lg leading-8 text-zinc-600">
                        Check whether text looks human-written, AI-generated, or mixed with
                        a simple confidence score.
                    </p>

                    <div className="mt-10 grid max-w-md grid-cols-3 divide-x divide-zinc-200">
                        <div className="pr-6">
                            <strong className="block text-2xl font-semibold text-emerald-700">
                                Fast
                            </strong>
                            <span className="text-sm text-zinc-500">Analysis</span>
                        </div>

                        <div className="px-6">
                            <strong className="block text-2xl font-semibold text-zinc-900">
                                Clear
                            </strong>
                            <span className="text-sm text-zinc-500">Signals</span>
                        </div>

                        <div className="pl-6">
                            <strong className="block text-2xl font-semibold text-zinc-900">
                                Simple
                            </strong>
                            <span className="text-sm text-zinc-500">Workflow</span>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}