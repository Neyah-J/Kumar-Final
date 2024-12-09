import './index.css'; // TailwindCSS styles
import FileUpload from './components/FileUpload'; // FileUpload component

function App() {
    return (
        <div className="bg-gray-50 min-h-screen flex flex-col items-center p-8">
            {/* Header */}
            <header className="text-center mb-8">
                <p className="text-lg text-pink-400">
                </p>
            </header>

            {/* Main Content */}
            <main className="w-full max-w-3xl">
                <FileUpload />
            </main>
        </div>
    );
}

export default App;
