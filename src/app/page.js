import Image from "next/image";
import './home.css';

export default function Home() {
    return (
        <div>
            <div className="home-video-container">
                <video autoPlay loop muted playsInline>
                    <source src="video/Crow_CIty.mp4" type="video/mp4" />
                </video>
                <div className="overlay">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="welcome-content">
                                    <h1>Chào mừng đến với Crow City</h1>
                                    <p>The Beauty of reality roleplay</p>
                                    <div className="each">
                                        <a href="https://discord.gg/ZqPaSvQR" target="_blank" rel="noopener noreferrer" className="join-button"><span>THAM GIA</span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="down-arrow"></div>
                </div>
            </div>
            <div className="server-feature-container">
                <div className="container feature-container">
                    <h1 className="feature-header">Crow City có gì?</h1>
                    <div className="row feature-row">

                        <div className="event-container">
                            <div className="event-content">
                                <h1>Sự kiện</h1>
                                <p>Sự kiện diễn ra hàng tháng!</p>
                            </div>
                        </div>
                        <div className="event-container">
                            <div className="event-content">
                                <h1>Nghề nghiệp</h1>
                                <p>Chọn nghề, xây dựng sự nghiệp!</p>
                            </div>
                        </div>
                        <div className="event-container">
                            <div className="event-content">
                                <h1>Nghề bẩn</h1>
                                <p>Kiếm tiền từ công việc thử thách!</p>
                            </div>
                        </div>
                        <div className="event-container">
                            <div className="event-content">
                                <h1>Giải trí</h1>
                                <p>Vui chơi, thư giãn cùng bạn bè!</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="container-fluid special-feature">
    <div className="row special-feature-row">
        <div className="col-lg-3 col-md-4 col-sm-12 sf-image text-center">
            <img src="image/gta-character.png" alt="GTA Character" />
        </div>
        <div className="col-lg-9 col-md-8 col-sm-12 sf-box">
            <h1>Crow city có tính năng gì?</h1>
            <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-12 sf-col">
                    <div className="spe-feature-content">
                        <i className="fa-solid fa-shirt"></i>
                        <div className="sp-content">
                            <h2>Quần áo đa dạng</h2>
                            <p>hơn 3000 lựa chọn!</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 sf-col">
                    <div className="spe-feature-content">
                        <i className="fa-solid fa-car"></i>
                        <div className="sp-content">
                            <h2>Xe Mod</h2>
                            <p>Hơn 800 xe mod</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 sf-col">
                    <div className="spe-feature-content">
                        <i className="fa-solid fa-money-bill"></i>
                        <div className="sp-content">
                            <h2>Kinh tế thực tế</h2>
                            <p>Cân bằng hoàn toàn nền kinh tế!</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 sf-col">
                    <div className="spe-feature-content">
                        <i className="fa-solid fa-prescription-bottle-medical"></i>
                        <div className="sp-content">
                            <h2>Pharmacy</h2>
                            <p>Nghề nghiệp pharmacy</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 sf-col">
                    <div className="spe-feature-content">
                        <i className="fa-solid fa-building"></i>
                        <div className="sp-content">
                            <h2>Kiến trúc sư</h2>
                            <p>Nghề nghiệp kiến trúc sư</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 sf-col">
                    <div className="spe-feature-content">
                        <i className="fa-solid fa-boxes-stacked"></i>
                        <div className="sp-content">
                            <h2>Hàng hoá</h2>
                            <p>Cấu trúc hàng hoá</p>
                        </div>
                    </div>
           </div>
                <div className="col-lg-4 col-md-6 col-sm-12 sf-col">
                    <div className="spe-feature-content">
                        <i className="fa-solid fa-briefcase"></i>
                        <div className="sp-content">
                            <h2>Nghề nghiệp</h2>
                            <p>Nghề nghiệp đa dạng</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 sf-col">
                    <div className="spe-feature-content">
                    <i className="fa-solid fa-disease"></i>
                        <div className="sp-content">
                            <h2>bệnh tật</h2>
                            <p>Bệnh tật cần phòng ngừa và điều trị.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 sf-col">
                    <div className="spe-feature-content">
                    <i class="fa-solid fa-biohazard"></i>
                        <div className="sp-content">
                            <h2>đảo zombie</h2>
                            <p>Một hòn đảo toàn zombie</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

            <div className="container join-discord-container">
                <div className="row">
                    <div className="col-md-9 jd-box">
                        <div className="jd-content">
                            <h1>Tham gia cộng đồng Discord của chúng tôi ngay hôm nay!</h1>
                            <p>Hãy gia nhập cộng đồng để kết nối với những người chơi khác, tham gia các sự kiện đặc biệt và nhận thông tin mới nhất về game! Đừng bỏ lỡ cơ hội trở thành một phần của gia đình Crow City.</p>
                            <div className="discord-join-content">
                            <a href="https://www.facebook.com/profile.php?id=61569960695494" target="_blank" rel="noopener noreferrer">Tham Gia cộng đồng</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 join-discord-img">
                        <img src="image/gta-c.png"/>
                    </div>
                </div>
            </div>

            <div className="container team-container">
            <h1>Crow City Team</h1>
                <div className="row">
                    <div className="col-md-3 col-sm-6 team-content">
                        <img src="image/rioh-v2.png"/>
                        <h1>Rioh</h1>
                        <h2>Leader Team</h2>

                    </div>
                    <div className="col-md-3 col-sm-6 team-content">
                        <img src="image/founder.jpg"/>
                        <h1>Wild Asian</h1>
                        <h2>Founder</h2>

                    </div>
                    <div className="col-md-3 col-sm-6 team-content">
                        <img src="image/zoro.jpg"/>
                        <h1>Huma</h1>
                        <h2>Dev/UI</h2>

                    </div>
                    <div className="col-md-3 col-sm-6 team-content">
                        <img src="image/yuri-v2.jpg"/>
                        <h1>Yuri</h1>
                        <h2>Helper</h2>

                    </div>
                    <div className="col-md-3 col-sm-6 team-content">
                        <img src="image/cua-v3.png"/>
                        <h1>Cua</h1>
                        <h2>HELPER</h2>

                    </div>
                    <div className="col-md-3 col-sm-6 team-content">
                        <img src="image/Tran_nam.png"/>
                        <h1>Tran nam</h1>
                        <h2>HELPER</h2>

                    </div>
                    <div className="col-md-3 col-sm-6 team-content">
                        <img src="image/MR-THREE.png"/>
                        <h1>MR three</h1>
                        <h2>HELPER</h2>

                    </div>
                    <div className="col-md-3 col-sm-6 team-content">
                        <img src="image/HMT.png"/>
                        <h1>HMT</h1>
                        <h2>HELPER</h2>

                    </div>
                </div>
            </div>
        </div>
    );
}
