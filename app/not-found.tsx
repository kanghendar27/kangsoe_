import Link from "next/link";

export default function NotFound() {
  return (
    <main className="kangsoe-page-bg flex min-h-screen flex-col items-center justify-center px-4 text-center text-foreground antialiased">
      <h1 className="mb-4 text-6xl font-semibold text-main">404</h1>
      <p className="mb-8 text-[15px] text-muted">
        Halaman yang kamu cari tidak ditemukan.
      </p>
      <Link
        href="/"
        className="inline-flex h-9 items-center justify-center rounded-full border border-input bg-background px-6 text-sm font-medium transition-colors hover:border-[#fcc10f] hover:bg-[#fcc10f] hover:text-[#0e0b00]"
      >
        Kembali ke Beranda
      </Link>
    </main>
  );
}
