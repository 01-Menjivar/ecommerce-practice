export default function ProductsSkeleton() {
    return (
        <div className="page-enter">

            <div className="mb-8 h-9 w-64 animate-pulse rounded bg-[var(--bg-muted)]"></div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {Array.from({ length: 8 }).map((_, index) => (
                    <div key={index} className="ui-card animate-pulse p-4">
                        <div className="mb-4 h-48 w-full rounded-xl bg-[var(--bg-muted)]"></div>

                        <div className="mb-2 h-6 w-3/4 rounded bg-[var(--bg-muted)]"></div>

                        <div className="space-y-2 mb-4">
                            <div className="h-4 w-full rounded bg-[var(--bg-muted)]"></div>
                            <div className="h-4 w-5/6 rounded bg-[var(--bg-muted)]"></div>
                        </div>

                        <div className="mb-4 h-6 w-1/4 rounded bg-[var(--bg-muted)]"></div>

                        <div className="space-y-2">
                            <div className="h-10 w-full rounded-xl bg-[var(--bg-muted)]"></div>
                            <div className="h-10 w-full rounded-xl bg-[var(--bg-muted)]"></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
