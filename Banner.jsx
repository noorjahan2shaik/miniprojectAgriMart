import './Banner.css'
import banner1Image from './assets/banner-1.jpg'
import banner2Image from './assets/banner-2.jpg'
function Banner(){
    return(
        <>
            <div className="banner-container">
                <div className="banner">
                    <img src={banner1Image} alt="" />
                    <div className="content">
                        <h3>Special Offer</h3>
                        <p>upto 45% off</p>
                        <a href="#" className='btn'>Check Out</a>
                    </div>
                </div>
                <div className="banner">
                    <img src={banner2Image} alt="" />
                    <div className="content">
                        <h3>Limited Offer</h3>
                        <p>upto 50% off</p>
                        <a href="#" className='btn'>Check Out</a>
                    </div>
                </div>

            </div>
        </>
    );
}
export default Banner;