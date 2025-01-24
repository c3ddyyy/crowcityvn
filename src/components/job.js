import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import './job.css';

const jobData = [
    {
        title: "làm vườn",
        video: "https://www.youtube.com/watch?v=HWoTLuaDuZg",
        img: "image/crow_logo.png",
    },
    {
        title: "Câu cá",
        video: "https://www.youtube.com/watch?v=HWoTLuaDuZg",
        img: "image/crow_logo.png",
    },
    {
        title: "mò cua bắt ốc",
        video: "https://www.youtube.com/watch?v=HWoTLuaDuZg",
        img: "image/crow_logo.png",
    },
    {
        title: "Taxi",
        video: "https://www.youtube.com/watch?v=HWoTLuaDuZg",
        img: "image/crow_logo.png",
    },
    {
        title: "Bus",
        video: "https://www.youtube.com/watch?v=HWoTLuaDuZg",
        img: "image/crow_logo.png",
    },
    {
        title: "nông trại",
        video: "https://www.youtube.com/watch?v=HWoTLuaDuZg",
        img: "image/crow_logo.png",
    },
    {
        title: "Thợ gỗ",
        video: "https://www.youtube.com/watch?v=HWoTLuaDuZg",
        img: "image/crow_logo.png",
    },
    {
        title: "Pizza",
        video: "https://www.youtube.com/watch?v=HWoTLuaDuZg",
        img: "image/crow_logo.png",
    },
    {
        title: "Tái chế",
        video: "https://www.youtube.com/watch?v=HWoTLuaDuZg",
        img: "image/crow_logo.png",
    },
    {
        title: "ĐÀO QUẶNG",
        video: "https://www.youtube.com/watch?v=HWoTLuaDuZg",
        img: "image/crow_logo.png",
    }
];

function Job() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedVideo, setSelectedVideo] = useState(null);

    const handleOpenModal = (videoUrl) => {
        setSelectedVideo(videoUrl);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedVideo(null);
    };

    return (
        <div className='job-container'>
            <h1>NGHỀ NGHIỆP</h1>
            <p>Hướng dẫn tổng quan về các nghề nghiệp trong thành phố.</p>
            <div className='job-grid'>
                {jobData.map((job, index) => (
                    <div
                        className="job-content"
                        key={index}
                        onClick={() => handleOpenModal(job.video)}
                        style={{ cursor: "pointer" }}
                    >
                        <div className="job-header">
                            <img src={job.img} alt={job.title} />
                        </div>
                        <div className="job-description">
                            <span>{job.title}</span>
                        </div>
                    </div>
                ))}
            </div>
            {isModalOpen && (
                <div id="videoModal" className="video-modal"  onClick={handleCloseModal}>
                    <span className="close-modal" onClick={handleCloseModal}>
                        ×
                    </span>
                    <ReactPlayer
                        url={selectedVideo}
                        controls={true}
                        width="60%"
                        height="80%"
                        playing={true}
                    />
                </div>
            )}
        </div>
    );
}

export default Job;
