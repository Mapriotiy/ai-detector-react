type ExampleChipsProps = {
    onSelect: (text: string) => void;
};

const examples = [
    {
        label: 'ChatGPT',
        text: 'Artificial intelligence is transforming the way people write, learn, and communicate.',
    },
    {
        label: 'Human',
        text: 'I rewrote this paragraph a few times because the first version sounded too stiff.',
    },
    {
        label: 'AI + Human',
        text: 'This draft was generated with AI, then edited by a person for tone and clarity.',
    },
];

export function ExampleChips({ onSelect }: ExampleChipsProps) {
    return (
        <div className="mt-5 flex flex-wrap items-center gap-2">
            <span className="mr-1 text-sm text-zinc-500">Examples:</span>

            {examples.map((example) => (
                <button
                    key={example.label}
                    type="button"
                    onClick={() => onSelect(example.text)}
                    className="rounded-full bg-emerald-50 px-3 py-1.5 text-sm font-medium text-emerald-800 transition hover:bg-emerald-100"
                >
                    {example.label}
                </button>
            ))}
        </div>
    );
}