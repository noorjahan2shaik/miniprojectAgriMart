import homeImage from "./assets/home-img.png"
import './Home.css'
function Home(){
    return(
        <>
            <div className="home">
                <div className="image">
                    <img src={homeImage} alt="" />
                </div>
                <div className="content">
                    <span>Fresh and Organic</span>
                    <h3>Get your Daily Grocery Products</h3>
                    <a href="#" className="btn">Let's Started</a>
                </div>
            </div>
        </>
    );
}
export default Home;