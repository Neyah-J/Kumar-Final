import React, { useState } from 'react';
import axios from 'axios';

const FileUpload = () => {
    const [file, setFile] = useState(null);
    const [text, setText] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);

    const handleFileChange = (e) => setFile(e.target.files[0]);

    const handleUpload = async () => {
        if (!file) {
            setMessage('Please select a file first.');
            return;
        }
        const formData = new FormData();
        formData.append('file', file);

        try {
            setLoading(true);
            const response = await axios.post('http://localhost:5000/upload', formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });
            setMessage(`File uploaded successfully! Access it here: ${response.data.fileUrl}`);
        } catch (error) {
            setMessage('Error uploading file.');
        } finally {
            setLoading(false);
        }
    };

    const handleProcess = async () => {
        if (!text) {
            setMessage('Please enter text for AI processing.');
            return;
        }
        try {
            setLoading(true);
            const response = await axios.post('http://localhost:5000/process', { text });
            setMessage(`AI Response: ${response.data.message}`);
        } catch (error) {
            setMessage('Error processing AI request.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="p-6 max-w-2xl mx-auto bg-pink-light rounded-xl shadow-md space-y-6">
            <h1 className="text-3xl font-bold text-pink-dark text-center">NJ AND CB's Chatbot</h1>
            <div className="space-y-4">
                <div>
                    <label className="block text-pink-dark font-medium">Upload a File:</label>
                    <input
                        type="file"
                        onChange={handleFileChange}
                        className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:border-0 file:text-sm file:font-semibold file:bg-pink-100 file:text-pink-dark hover:file:bg-pink-light"
                    />
                    <button
                        onClick={handleUpload}
                        className="mt-2 px-4 py-2 bg-pink-dark text-white font-medium rounded hover:bg-pink"
                    >
                        Upload File
                    </button>
                </div>
                <div>
                    <label className="block text-pink-dark font-medium">AI Processing:</label>
                    <textarea
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        placeholder="Enter text for AI processing"
                        className="w-full p-2 border border-pink-dark rounded"
                    />
                    <button
                        onClick={handleProcess}
                        className="mt-2 px-4 py-2 bg-pink-dark text-white font-medium rounded hover:bg-pink"
                    >
                        Send to AI
                    </button>
                </div>
                {loading && <p className="text-pink-dark">Loading...</p>}
                {message && (
                    <p
                        className={`text-sm mt-4 ${
                            message.includes('Error') ? 'text-red-500' : 'text-green-500'
                        }`}
                    >
                        {message}
                    </p>
                )}
            </div>
        </div>
    );
};

export default FileUpload;
