import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Turn code into artwork',
  description: 'Turn code into artwork - Built with Rust + Next.js',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
