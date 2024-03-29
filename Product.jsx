import './Product.css'
import product1 from './assets/product-1.png'
import product2 from './assets/product-2.png'
import product3 from './assets/product-3.png'
import product4 from './assets/product-4.png'
import product5 from './assets/product-5.png'
import product6 from './assets/product-6.png'
import product7 from './assets/product-7.png'
import product8 from './assets/product-8.png'
import product9 from './assets/product-9.png'
export function Product(){
    return(
        <>
            <div className="product">
                <h1 className='heading'>Latest <span>Products</span></h1>
                <div className="box-container">
                    <div className="box">
                        <span className='discount'>-33%</span>
                        <div className="icons">
                            <a href="#" className='fas fa-heart'></a>
                            <a href="#" className='fas fa-share'></a>
                            <a href="#" className='fas fa-eye'></a>
                        </div>
                        <img src={product1} alt="" />
                        <h3>Organic Banana</h3>
                        <div className="stars">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                        </div>
                        <div className="price">" $10.50 "<span>$13.20</span></div>
                        <div className="quantity">
                            <span>Quantity: </span>
                            <input type="number" min="1" max="1000" value="1"/>
                            <span> /kg</span>
                        </div>
                        <a href="#" class="btn">Add to Cart</a>
                    </div>
                    <div className="box">
                        <span className='discount'>-33%</span>
                        <div className="icons">
                            <a href="#" className='fas fa-heart'></a>
                            <a href="#" className='fas fa-share'></a>
                            <a href="#" className='fas fa-eye'></a>
                        </div>
                        <img src={product2} alt="" />
                        <h3>product2</h3>
                        <div className="stars">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                        </div>
                        <div className="price">" $10.50 "<span>$13.20</span></div>
                        <div className="quantity">
                            <span>Quantity: </span>
                            <input type="number" min="1" max="1000" value="1"/>
                            <span> /kg</span>
                        </div>
                        <a href="#" class="btn">Add to Cart</a>
                    </div>
                    
                    <div className="box">
                        <span className='discount'>-33%</span>
                        <div className="icons">
                            <a href="#" className='fas fa-heart'></a>
                            <a href="#" className='fas fa-share'></a>
                            <a href="#" className='fas fa-eye'></a>
                        </div>
                        <img src={product3} alt="" />
                        <h3>Organic Banana</h3>
                        <div className="stars">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                        </div>
                        <div className="price">" $10.50 "<span>$13.20</span></div>
                        <div className="quantity">
                            <span>Quantity: </span>
                            <input type="number" min="1" max="1000" value="1"/>
                            <span> /kg</span>
                        </div>
                        <a href="#" class="btn">Add to Cart</a>
                    </div>

                    <div className="box">
                        <span className='discount'>-33%</span>
                        <div className="icons">
                            <a href="#" className='fas fa-heart'></a>
                            <a href="#" className='fas fa-share'></a>
                            <a href="#" className='fas fa-eye'></a>
                        </div>
                        <img src={product4} alt="" />
                        <h3>product2</h3>
                        <div className="stars">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                        </div>
                        <div className="price">" $10.50 "<span>$13.20</span></div>
                        <div className="quantity">
                            <span>Quantity: </span>
                            <input type="number" min="1" max="1000" value="1"/>
                            <span> /kg</span>
                        </div>
                        <a href="#" class="btn">Add to Cart</a>
                    </div>
                    <div className="box">
                        <span className='discount'>-33%</span>
                        <div className="icons">
                            <a href="#" className='fas fa-heart'></a>
                            <a href="#" className='fas fa-share'></a>
                            <a href="#" className='fas fa-eye'></a>
                        </div>
                        <img src={product5} alt="" />
                        <h3>Organic Banana</h3>
                        <div className="stars">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                        </div>
                        <div className="price">" $10.50 "<span>$13.20</span></div>
                        <div className="quantity">
                            <span>Quantity: </span>
                            <input type="number" min="1" max="1000" value="1"/>
                            <span> /kg</span>
                        </div>
                        <a href="#" class="btn">Add to Cart</a>
                    </div>

                    <div className="box">
                        <span className='discount'>-33%</span>
                        <div className="icons">
                            <a href="#" className='fas fa-heart'></a>
                            <a href="#" className='fas fa-share'></a>
                            <a href="#" className='fas fa-eye'></a>
                        </div>
                        <img src={product6} alt="" />
                        <h3>product2</h3>
                        <div className="stars">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                        </div>
                        <div className="price">" $10.50 "<span>$13.20</span></div>
                        <div className="quantity">
                            <span>Quantity: </span>
                            <input type="number" min="1" max="1000" value="1"/>
                            <span> /kg</span>
                        </div>
                        <a href="#" class="btn">Add to Cart</a>
                    </div>
                    <div className="box">
                        <span className='discount'>-33%</span>
                        <div className="icons">
                            <a href="#" className='fas fa-heart'></a>
                            <a href="#" className='fas fa-share'></a>
                            <a href="#" className='fas fa-eye'></a>
                        </div>
                        <img src={product7} alt="" />
                        <h3>Organic Banana</h3>
                        <div className="stars">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                        </div>
                        <div className="price">" $10.50 "<span>$13.20</span></div>
                        <div className="quantity">
                            <span>Quantity: </span>
                            <input type="number" min="1" max="1000" value="1"/>
                            <span> /kg</span>
                        </div>
                        <a href="#" class="btn">Add to Cart</a>
                    </div>

                    <div className="box">
                        <span className='discount'>-33%</span>
                        <div className="icons">
                            <a href="#" className='fas fa-heart'></a>
                            <a href="#" className='fas fa-share'></a>
                            <a href="#" className='fas fa-eye'></a>
                        </div>
                        <img src={product8} alt="" />
                        <h3>product2</h3>
                        <div className="stars">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                        </div>
                        <div className="price">" $10.50 "<span>$13.20</span></div>
                        <div className="quantity">
                            <span>Quantity: </span>
                            <input type="number" min="1" max="1000" value="1"/>
                            <span> /kg</span>
                        </div>
                        <a href="#" class="btn">Add to Cart</a>
                    </div>
                    
                </div>
            </div>
        </>
    );
}