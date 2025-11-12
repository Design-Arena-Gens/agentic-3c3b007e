import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'DevOps Skills Roadmap for Freshers',
  description: 'A concise, actionable DevOps study plan for beginners',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <div className="container">
            <h1>DevOps Skills Roadmap</h1>
            <p className="subtitle">What to learn to land your first DevOps role</p>
          </div>
        </header>
        <main className="container">
          {children}
        </main>
        <footer className="site-footer">
          <div className="container">
            <p>Made with Next.js. Updated {new Date().getFullYear()}.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
