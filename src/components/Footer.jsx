export default function Footer() {
    return (
        <footer className="max-w-6xl mx-auto px-6 md:px-10">
            <div className="hairline mb-10"></div>
            <div className="py-8 flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse shadow-[0_0_8px_rgba(96,165,250,0.6)]"></div>
                    <span className="font-mono text-[10px] text-white/40 uppercase tracking-[0.28em]">System · Operational</span>
                </div>
                <p className="font-mono text-[10px] text-white/35 uppercase tracking-[0.28em] text-center">
                    © 2026 GROWTH BUDDIES x SUMADOTS · All Rights Reserved
                </p>
                <span className="font-mono text-[10px] text-white/40 uppercase tracking-[0.28em]">
                    Engineering for Social Impact
                </span>
            </div>
        </footer>
    )
}
