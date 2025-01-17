import './job.css';

const jobData = [
    {
        title: "Cửa hàng Pizza Luchetti's",
        description: "Giao pizza trong thành phố.",
        video: "Xem video hướng dẫn",
        notes: null
    },
    {
        title: "GoPostal",
        description: "Giao thư cho người dân trong thành phố.",
        video: "Xem video hướng dẫn",
        notes: null
    },
    {
        title: "Câu cá",
        description: "Nhận thư từ hòm thư trong thành phố.",
        video: "Xem video hướng dẫn",
        notes: [
            "Bạn cần có cần câu và mồi câu để thực hiện.",
            "Bán cá tại cửa hàng cần câu hoặc nơi kho đông lạnh"
        ]
    },
    {
        title: "Doanh nghiệp Taxi",
        description: "Đón khách, đưa khách đi tới mọi nơi.",
        video: "Xem video hướng dẫn",
        notes: null
    },
    {
        title: "Nhà máy tái chế",
        description: "Xem video hướng dẫn",
        video: "Xem video hướng dẫn",
        notes: null
    }
];

function Job() {
    return (
        <div className='job-container'>
            <h1>NGHỀ NGHIỆP</h1>
            <p>Hướng dẫn tổng quan về các nghề nghiệp trong thành phố.</p>
            
            <div>
                
            </div>
        </div>
    );
}

export default Job;
