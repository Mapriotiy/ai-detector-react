export function Header() {
    return (
        <header className="flex h-16 items-center justify-between border-b border-zinc-200 bg-white px-8">
            <div className="flex items-center gap-10">
                <div className="flex items-center gap-2 text-2xl font-semibold tracking-tight text-zinc-900">
                    <span>
                        <span className="text-emerald-700">AI </span>Detective
                    </span>
                    <img src="/favicon.svg" alt="" className="h-6 w-6" aria-hidden="true" />
                </div>

                <nav className="hidden items-center gap-8 text-sm font-medium text-zinc-600 md:flex">
                    <a className="hover:text-zinc-950" href="#">Product</a>
                    <a className="hover:text-zinc-950" href="#">Pricing</a>
                    <a className="hover:text-zinc-950" href="#">Resources</a>
                </nav>
            </div>
            <button className="rounded-full border border-emerald-700 px-5 py-2 text-sm font-semibold text-emerald-800 hover:bg-emerald-50">
                Get Started
            </button>
        </header>
    );
}
