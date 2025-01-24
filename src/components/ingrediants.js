import './ingrediants.css';

function Ingrediants () {

    const ingrediantsData = [
        {
            title: "HOA QUẢ",
            img: "image/crow_logo.png",
            description: "Hoa quả trong thành phố có thể sử dụng với nhiều tác dụng như bỏ sung vitamin, tăng hấp thu nước, tăng sức khoẻ",
        },
        {
            title: "HẢI SẢN",
            img: "image/crow_logo.png",
            description: "Hải sản sẽ giúp bạn bổ sung năng lượng, vitamin và sức khoẻ. Nguồn bổ sung năng lượng tuyệt vời cho cư dân",
        },
        {
            title: "GỖ VÀ CỦI",
            img: "image/crow_logo.png",
            description: "Bạn có thể lấy được ở những cánh rừng. Có thể sử dụng để đốt lửa, chế tạo công cụ,...",
        },
        {
            title: "QUẶNG",
            img: "image/crow_logo.png",
            description: "Quặng có rất nhiều tác dụng, nhưng chủ yếu để chế tạo dụng cụ...",

        },
        {
            title: "RÁC THẢI TÁI CHẾ",
            img: "image/crow_logo.png",
            description: "Rác thải có thể dùng để tái chế thành các dụng cụ trong thành phố",
        },
        {
            title: "SINH VẬT NHỎ",
            img: "image/crow_logo.png",
            description: "Những sinh vật nhỏ trong thành phố có thể sử dụng để nuôi, chế biến món ăn, chế tạo mồi câu cá",
        },
    ];
    

    return (
        <div className='ingrediants-container'>
        <h1>Nguyên Liệu</h1>
        <p>Phân Loại nguyên liệu thành phố</p>
        <div className='location-grid'>
        {ingrediantsData.map((ingrediants, index) => (
                    <div
                        className="location-content"
                        key={index}
                        style={{ cursor: "pointer" }}
                    >
                        <div className="location-header">
                            <img src={ingrediants.img} alt={ingrediants.title} />
                        </div>
                        <div className="location-description">
                            <span>{ingrediants.title}</span>
                            <p>{ingrediants.description}</p>
                        </div>
                    </div>
                ))}
        </div>
</div>
    );
}
export default Ingrediants;