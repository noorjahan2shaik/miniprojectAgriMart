import './Category.css'
import vegImage from './assets/category-1.png'
import dryNutsImage from './assets/category-2.png'
import meatImage from './assets/category-3.png'
import fruitImage from './assets/category-4.png'
export function Category(){
    return(
        <>
            <div className="category">
                <h1 className='heading'>"Shop By" <span>Category</span></h1>
                <div className="box-container">
                    <div className="box">
                        <h3>Vegitables</h3>
                        <p>upto 50% off</p>
                        <img src={vegImage} alt="" />
                        <a href="#" className='btn'>Shop now</a>
                    </div>
                    <div className="box">
                        <h3>Dried Nuts</h3>
                        <p>upto 44% off</p>
                        <img src={dryNutsImage} alt="" />
                        <a href="#" className='btn'>Shop now</a>
                    </div>
                    <div className="box">
                        <h3>Fruits</h3>
                        <p>upto 37% off</p>
                        <img src={fruitImage} alt="" />
                        <a href="#" className='btn'>Shop now</a>
                    </div>
                    <div className="box">
                        <h3>Meat</h3>
                        <p>upto 35% off</p>
                        <img src={meatImage} alt="" />
                        <a href="#" className='btn'>Shop now</a>
                    </div>
                </div>
            </div>
        </>
    );
}