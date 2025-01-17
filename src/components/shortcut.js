import "./shortcut.css";

function ShortCut() {
    const shortcuts = [
        { key: "F1", action: "Menu Tương Tác Chính" },
        { key: "~", action: "Menu Tương Tác Nhanh" },
        { key: "X", action: "Hủy hành động, bỏ đồ vật đang cầm." },
        { key: "Z", action: "Hiển thị thông tin (Công việc, hành động....)." },
        { key: "G", action: "Phím tương tác, thực thi hành động." },
        { key: "Y", action: "Mở menu thay trang phục nhanh." },
        { key: "U", action: "Mở menu điều khiển phương tiện." },
        { key: "ALT", action: "Mở mắt tương tác." },
        { key: "F2", action: "Mở kho đồ." },
        { key: "CTRL", action: "Ngồi" },
        { key: "B", action: "Hành động chỉ điểm" },
        { key: "L", action: "Khóa phương tiện nhanh." },
        { key: "M", action: "Mở điên thoại." },
        { key: "F9", action: "Mở thông báo công việc (Chỉ dùng với những công việc dịch vụ)" },
    ];

    return (
        <div className="shortcut-container">
            <h1>Phím Tắt</h1>
            <p>Phím tắt trong thành phố, phím tắt sẽ giúp bạn dễ tương tác hơn</p>
            <ul className="shortcut-list">
                {shortcuts.map((shortcut, index) => (
                    <li key={index}>
                        <span>{shortcut.key}</span> {shortcut.action}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ShortCut;
