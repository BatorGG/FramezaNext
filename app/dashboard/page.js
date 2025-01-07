'use client';
import { redirect } from 'next/navigation';
import { useState, useEffect } from 'react';
import { verifyToken } from "@/lib/auth";
import { parseCookies } from '@/lib/cookies';
import { decodeJWT } from '@/lib/decodejwt';

export default function DashboardPage() {

    useEffect(() => {
        const token = localStorage.getItem('jwt');
        const decoded = decodeJWT(token);
        
        if (!decoded) {
            // Redirect to login if not authenticated
            redirect('/login');
            return <div>Loading...</div>;
        }
      }, []);

    const token = localStorage.getItem('jwt');
    

    

    const [activeButton, setActiveButton] = useState('starter');
    const handleButtonClick = (button) => {
        setActiveButton(button);
    };


    const [imagePreview, setImagePreview] = useState(null);
    const [fileName, setFileName] = useState('No file chosen');
    const [dragActive, setDragActive] = useState(false);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setFileName(file.name);
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleFileDrop = (event) => {
        event.preventDefault();
        setDragActive(false);
        const file = event.dataTransfer.files[0];
        if (file) {
            setFileName(file.name);
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleDragOver = (event) => {
        event.preventDefault();
        setDragActive(true);
    };

    const handleDragLeave = (event) => {
        event.preventDefault();
        setDragActive(false);
    };

    const handleClick = () => {
        document.getElementById('fileInput').click();
    };

    const handleRemoveFile = () => {
        setImagePreview(null);
        setFileName('No file chosen');
        document.getElementById('fileInput').value = null;
    };

    return (
        <>
            <div className="container">
                <h1>Select Model</h1>
                <div className="buttons">
                    <button
                        id="starterBtn"
                        className={`toggle-btn ${activeButton === 'starter' ? 'active' : ''}`}
                        onClick={() => handleButtonClick('starter')}
                    >
                        Starter
                    </button>
                    <button
                        id="proBtn"
                        className={`toggle-btn ${activeButton === 'pro' ? 'active' : ''}`}
                        onClick={() => handleButtonClick('pro')}
                    >
                        Pro
                    </button>
                </div>
            </div>

            <div className="textarea-container-container">
                <div className="textarea-container">
                    <label htmlFor="auto-resize">Prompt</label>
                    <textarea id="auto-resize" rows="1" placeholder="Type here:"></textarea>
                    <div id="tip">Tip: Be very descrpitive. Long and detailed prompts work better. If you include an image, also describe what can be seen on the image!</div>
                </div>

            </div>

            <div className="textarea-container-container">
            <div className="textarea-container">
                <label htmlFor="fileUploadBox">Image</label>
                <div
                    id="fileUploadBox"
                    className={`file-upload-box ${dragActive ? 'drag-active' : ''}`}
                    onClick={handleClick}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleFileDrop}
                >
                    Select File or Drag & Drop
                    <input type="file" id="fileInput" accept="image/*" onChange={handleFileChange} style={{ display: 'none' }} />
                    <span id="fileName">{fileName}</span>
                    {imagePreview && <img id="imagePreview" src={imagePreview} alt="Image Preview" />}
                    {imagePreview && <span id="removeFile" onClick={(e) => { e.stopPropagation(); handleRemoveFile(); }}>X</span>}
                </div>
            </div>
        </div>

            <div className="textarea-container-container">
                <div className="runbtn-container">
                    <p id="creditCost">Cost: 1 Credit</p>
                    <button className="get-started-btn" id="run">Generate</button>
                </div>
            </div>

            <div className="textarea-container-container">
                <div className="errorbox">
                    <p id="errorText"></p>
                </div>
            </div>

            <div className="textarea-container-container">
                <div className="videobox">
                    <video id="generatedVideo" controls stlye="display:none;"></video>
                </div>
            </div>



            <button className="get-started-btn" id="logout">Logout</button>
        </>
    );
}
