import './MainHeading.css'
function MainHeading(){
    return(
        <>
        <header>
            <div className="header-1">
                <a href="#" class="logo">
                <i class="fas fa-shopping-basket"></i>
                    Agri-Mart
                </a>
                <form action class="search-box-container">
                    <input type="search" id="search-box" placeholder="search here..." />
                    <label htmlFor="search-box" class="fas fa-search"></label>
                </form>
            </div>
            <div className='header-2'>
                <div id='menu-bar' class="fas fa-bars"></div>
                <nav className="navbar">
                    <a href="#home">Home</a>
                    <a href="#category">Category</a>
                    <a href="#product">Products</a>
                    <a href="#deal">Deal</a>
                    <a href="#contact">Contact</a>
                </nav>
                <div className='icons'>
                    <a href="#" className='fas fa-shopping-cart'></a>
                    <a href="#" className='fas fa-heart'></a>
                    <a href="#" className='fas fa-user-circle'></a>
                </div>
            </div>
            </header>
        </>
    );
}

export default MainHeading;