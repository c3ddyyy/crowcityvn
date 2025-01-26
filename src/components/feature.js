import './feature.css';

function Feature() {

    const featureData = [
        {
            title: "SỰ KIỆN",
            img: "image/sukien.png",
            description: "Giúp bạn cập nhật sự kiện, nhận quà, mua đồ giới hạn",
        },
        {
            title: "HƯỚNG DẪN",
            img: "image/huongdan.png",
            description: "Xem hướng dẫn về các tính năng",
        },
        {
            title: "BẢN ĐỒ",
            img: "image/bando.png",
            description: "Hiển thị tất cả địa điểm trong thành phố",
        },
    ];
    return (
        <div className='feature-container'>
        <h1>Tính năng</h1>
        <p>Tính năng phổ thông trong thành phố</p>
        <div className='location-grid'>
        {featureData.map((feature, index) => (
                    <div
                        className="location-content"
                        key={index}
                        style={{ cursor: "pointer" }}
                    >
                        <div className="location-header">
                            <img src={feature.img} alt={feature.title} />
                        </div>
                        <div className="location-description">
                            <span>{feature.title}</span>
                            <p>{feature.description}</p>
                        </div>
                    </div>
                ))}
        </div>
</div>
    );
}
export default Feature;