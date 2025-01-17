import { useState } from 'react';
import './menu.css';

function Menu() {

    const sections = [
        {
            title: "MENU TƯƠNG TÁC CHÍNH",
            description: "Đây là tính năng chính, giúp bạn tương tác với những tính năng trong thành phố tốt nhất.",
            image: "https://res.cloudinary.com/dklnlcse3/image/upload/v1736534518/360_F_475000168_bjvpSfEcsDJKWZkvfkZLBMgExmerFWl7_aaiszp.jpg"
        },
        {
            title: "MENU TƯƠNG TÁC PHỤ",
            description: "Menu tương tác phụ sẽ giúp bạn sử dụng nhanh những tính năng trong thành phố.",
            image: "https://res.cloudinary.com/dklnlcse3/image/upload/v1728645249/8b5cd84967ae411f0281f5ee371e0b76_lpjvfg.jpg"
        },
        {
            title: "CHUNG",
            description: "Phần CHUNG này sẽ cung cấp những tính năng tổng quan của thành phố.",
            image: "https://res.cloudinary.com/dklnlcse3/image/upload/v1728645249/8b5cd84967ae411f0281f5ee371e0b76_lpjvfg.jpg"
        },
        {
            title: "TỰ DO",
            description: "Phần TỰ DO này sẽ xuất hiện khi bạn nhận CÔNG VIỆC TỰ DO trong thành phố.",
            image: "https://res.cloudinary.com/dklnlcse3/image/upload/v1736534518/360_F_475000168_bjvpSfEcsDJKWZkvfkZLBMgExmerFWl7_aaiszp.jpg"
        },
        {
            title: "HÓA ĐƠN",
            description: "Mở hóa đơn, thanh toán, tạo hóa đơn.\nCHUNG > HÓA ĐƠN",
            image: "https://res.cloudinary.com/dklnlcse3/image/upload/v1728133939/8b5cd84967ae411f0281f5ee371e0b76_jplvv2.jpg"
        },
        {
            title: "BẢN ĐỒ",
            description: "Tính năng BẢN ĐỒ này sẽ giúp bạn xác định toàn bộ vị trí trong thành phố. Cơ quan, nhà máy, công việc, cửa hàng.....",
             image: "https://res.cloudinary.com/dklnlcse3/image/upload/v1728133939/8b5cd84967ae411f0281f5ee371e0b76_jplvv2.jpg"
        },
        {
            title: "CÔNG VIỆC",
            description: "Khi bạn nhận công việc, chức năng này sẽ hoạt động. Những tính năng nhanh của công việc sẽ xuất hiện tại đây.",
             image: "https://res.cloudinary.com/dklnlcse3/image/upload/v1728133939/8b5cd84967ae411f0281f5ee371e0b76_jplvv2.jpg"
        },
        {
            title: "BÁO CÁO",
            description: "Báo cáo nhanh tới các ngành nghề.\nCHUNG > BÁO CÁO",
             image: "https://res.cloudinary.com/dklnlcse3/image/upload/v1728133939/8b5cd84967ae411f0281f5ee371e0b76_jplvv2.jpg"
        },
        
    ];

    return (
        <div className='menu-container'>
        <h1>Menu tương tác chính</h1>
        <p>Đây là tính năng chính, giúp bạn tương tác với những tính năng trong thành phố tốt nhất</p>
        <div className='menu-content'>
        </div>
</div>
    );
}
export default Menu;
