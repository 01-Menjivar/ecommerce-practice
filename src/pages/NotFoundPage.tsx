export default function NotFoundPage() {
    return (
        <div className="mx-auto mt-10 max-w-2xl rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-6 py-10 text-center shadow-[var(--shadow)] page-enter">
            <h1 className="mb-3 font-display text-7xl leading-none text-[var(--primary)]">404</h1>
            <p className="text-xl text-[var(--text-muted)]">Lo sentimos, la pagina que buscas no existe.</p>
        </div>
    );
}