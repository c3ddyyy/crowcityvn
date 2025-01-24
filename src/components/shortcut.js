import "./shortcut.css";

function ShortCut() {
    const shortcuts = [
        { key: "F1", action: "Menu tính năng chung" },
        { key: "~", action: "Menu tương tác nhanh" },
        { key: "E / G", action: "Tương tác" },
        { key: "1, 2, 3, 4, 5", action: "Phím sử dụng nhanh" },
        { key: "B", action: "Hành động Chỉ tay"},
        { key: "Y", action: "Mở menu thay trang phục nhanh." },
        { key: "U", action: "Mở menu điều khiển phương tiện." },
        { key: "ALT", action: "Mở mắt tương tác." },
        { key: "TAB", action: "Mở kho đồ." },
        { key: "LCTRL", action: "Ngồi" },
        { key: "F9", action: "Mở thông báo công việc (Chỉ dùng với những công việc dịch vụ)" },
        { key: "RCTRL", action: "Nằm" },
        { key: "L", action: "Khóa phương tiện nhanh." },
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
