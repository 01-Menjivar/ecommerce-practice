export default function ProductDetailSkeleton() {
    return (
        <div className="ui-card mx-auto max-w-4xl animate-pulse p-5 md:p-6">

            <div className="mb-4 h-96 w-full rounded-xl bg-[var(--bg-muted)]"></div>

            <div className="mb-2 h-9 w-3/4 rounded bg-[var(--bg-muted)]"></div>

            <div className="space-y-2 mb-4">
                <div className="h-4 w-full rounded bg-[var(--bg-muted)]"></div>
                <div className="h-4 w-full rounded bg-[var(--bg-muted)]"></div>
                <div className="h-4 w-5/6 rounded bg-[var(--bg-muted)]"></div>
            </div>

            <div className="h-8 w-32 rounded bg-[var(--bg-muted)]"></div>
        </div>
    );
}
