"use client";
import './home.css';
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import ReactPlayer from "react-player";

export default function Home() {
    const bottomRef = useRef(null);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);


    const scrollToBottom = () => {
        if (bottomRef.current) {
            bottomRef.current.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div>
            <div className="home-video-container">
                <video autoPlay loop muted playsInline>
                    <source src="video/crow-city-clip.mp4" type="video/mp4" />
                </video>
                <div className="overlay">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="welcome-content">
                                    <h1>Chào mừng đến với Crow City</h1>
                                    <p>The Beauty of reality roleplay</p>
                                    <div className="join-container">
                                        <Link href="https://discord.gg/XwdDw3fgWX" target="_blank" rel="noopener noreferrer" className="join-button"><span>Đăng ký</span></Link>
                                        <Link href="https://cfx.re/join/j9y654" target="_blank" rel="noopener noreferrer" className="join-button join-button-main" style={{ transform: 'scale(1.3)',maxWidth: '200px'}}><span>Truy cập</span></Link>
                                        <Link href="https://rioh-dev.gitbook.io/crow-ciy-manual" target="_blank" rel="noopener noreferrer" className="join-button"><span>Hướng dẫn</span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="down-arrow-overlay" onClick={scrollToBottom}> </div>
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
                    <i className="fa-solid fa-biohazard"></i>
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
                            <Link href="https://discord.gg/XwdDw3fgWX" target="_blank" rel="noopener noreferrer">Tham Gia cộng đồng</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 join-discord-img">
                        <img src="image/gta-c.png"/>
                    </div>
                </div>
            </div>
            <div className="container text-center my-5 fv-container">
            <h1 className="featured-video-header">Featured Video</h1>
            <p className="featured-video-desc">Thưởng thức những đoạn video mới nhất từ Crow City, Reality Roleplay!</p>
      <div className="row align-items-center">
        <div className="col-md-6">
           {isClient && (
                         <ReactPlayer
                         url="https://www.youtube.com/watch?v=iwJbeNaq3Ew"
                         controls
                         width="100%"
                        height="500px"
                         />
                     )}
        </div>
        <div className="col-md-6">
          {isClient && (
                        <ReactPlayer
                        url="https://www.youtube.com/watch?v=mfXITBFxTDk"
                        controls
                        width="100%"
                        height="500px"
                        />
                    )}
        </div>
      </div>
    </div>

            <div ref={bottomRef} className="container team-container">
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
                        <img src="gif/mr three.gif"/>
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
