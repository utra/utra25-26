import Footer from './components/Footer.jsx'

export default function App() {
    return (
        <div className="min-h-screen bg-gray-50 text-gray-900 flex flex-col">
            <header className="mx-auto max-w-5xl px-4 py-8">
                <h1 className="text-2xl font-semibold">UTRA 2025-26</h1>
                <p className="text-sm text-gray-600">React + Vite + Tailwind</p>
            </header>
            <main className="mx-auto max-w-5xl px-4 flex-grow">
                <div className="rounded-lg border bg-white p-6 shadow-sm">
                    <p>Welcome! Start building your frontend here.</p>
                </div>
            </main>
            <Footer />
        </div>
    )
}
