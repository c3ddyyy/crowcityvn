import './location.css';

function Location() {

    const locationData = [
        {
            title: "ĐỒN CẢNH SÁT",
            img: "image/cscrow.avif",
            description: "Nơi cơ quan chức năng thực thi nhiệm vụ lưu trú",
        },
        {
            title: "BỆNH VIỆN",
            img: "image/benhviencrow.png",
            description: "Nơi chữa trị, kiểm tra, xử lí bệnh tật, vết thương",
        },
        {
            title: "GARA TRUNG TÂM",
            img: "image/centergarage.png",
            description: "Nơi mọi người cất phương tiện khi có động đất",
        },
        {
            title: "PHARMACY",
            img: "image/pharmacy.png",
            description: "Nơi cung cấp, phát triển......",

        },
        {
            title: "TOÀ THỊ CHÍNH",
            img: "image/toachichinh.png",
            description: "Nơi cơ quan quản lí thành phố",
        },
        {
            title: "CỨU HỘ",
            img: "image/cuuhocrow.png",
            description: "Sửa xe, độ xe, nơi những",
        },
        {
            title: "Nhà hàng Sandy",
            img: "image/nhahangsandy.png",
            description: "Nhà hàng tại đảo Sandy, nền ẩm thực tinh hoa của Crow City sẽ có mặt tại đây.",
        },
        {
            title: "Quán bar Sandy",
            img: "image/barsandy.png",
            description: "Quán bar tại đảo Sandy là nơi vui chơi tuyệt vời",
        },
        {
            title: "Sân bay",
            img: "image/airportcrow.png",
            description: "Sân bay thành phố là địa điểm có nhiều ngành kinh doanh, và cũng là nơi vận chuyển, di chuyển qua một số vị trí trong thành phố.",
        },
        {
            title: "Nông trại",
            img: "image/crowfarm.png",
            description: "Nông sản trong thành phố đều được sản xuất tại đây",
        },

    ];

    return (
        <div className='location-container'>
        <h1>Địa Điểm</h1>
        <p>Địa điểm trong thành phố</p>
        <div className='location-grid'>
        {locationData.map((location, index) => (
                    <div
                        className="location-content"
                        key={index}
                        style={{ cursor: "pointer" }}
                    >
                        <div className="location-header">
                            <img src={location.img} alt={location.title} />
                        </div>
                        <div className="location-description">
                            <span>{location.title}</span>
                            <p>{location.description}</p>
                        </div>
                    </div>
                ))}
        </div>
</div>
    );
}
export default Location