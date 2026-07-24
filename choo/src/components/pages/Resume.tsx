import {useState} from 'react';

export default function Resume() {
    const drivePdfUrl = "https://drive.google.com/file/d/11VH7wIsuMgMzarcaK4vMhpsBAJvIwv7j/preview";

    const handelDownload = () => {
        const link = document.createElement('a')
        link.href = '../../assets/CV_ERIN GABRIELLE CHUA.pdf'
        link.download = 'CV_ERIN GABRIELLE CHUA.pdf'
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
    }

    return(
        <div className='resume'>
            {/* <h2>My resume</h2> */}
            <div>
                <button onClick={handelDownload}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-earmark-arrow-down" viewBox="0 0 16 16">
                        <path d="M8.5 6.5a.5.5 0 0 0-1 0v3.793L6.354 9.146a.5.5 0 1 0-.708.708l2 2a.5.5 0 0 0 .708 0l2-2a.5.5 0 0 0-.708-.708L8.5 10.293z"/>
                        <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2M9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z"/>
                    </svg>
                    <span>Download my CV</span>
                </button>
            </div>
            <div>
                <iframe
                src={drivePdfUrl}
                width="100%"
                height="100%"
                title="Google Drive PDF Viewer"
                style={{ border: 'none' }}
                />
            </div>
        </div>
    )
}