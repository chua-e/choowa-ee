import {useState} from 'react';

export default function Resume() {
    const drivePdfUrl = "https://drive.google.com/file/d/11VH7wIsuMgMzarcaK4vMhpsBAJvIwv7j/preview";

    return(
        <div>
            <h2>My resume</h2>
            <div>
                <p>Download ts here</p>
            </div>
            <div>
                <iframe
                src={drivePdfUrl}
                width="100%"
                height="600px"
                title="Google Drive PDF Viewer"
                style={{ border: 'none' }}
                />
            </div>
        </div>
    )
}