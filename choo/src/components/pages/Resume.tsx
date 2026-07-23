import {useState} from 'react';

export default function Resume() {
    const drivePdfUrl = "https://drive.google.com/file/d/11VH7wIsuMgMzarcaK4vMhpsBAJvIwv7j/preview";

    return(
        <div className='resume'>
            <h2>My resume</h2>
            <div>
                <button>Download ts here</button>
            </div>
            <div>
                <iframe
                src={drivePdfUrl}
                width="60%"
                height="800px"
                title="Google Drive PDF Viewer"
                style={{ border: 'none' }}
                />
            </div>
        </div>
    )
}