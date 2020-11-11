import React from 'react';

export default class Grid extends React.Component{
    render() {
        return (
            <div className="site-section bg-light">
                <div className="container">
                    <div className="row">
                        <div className="title-section text-center col-12">
                            <h2>Pharmacy <strong className="text-primary">Products</strong></h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 block-3 products-wrap">
                            <div className="nonloop-block-3">
                                <div className="text-center item col-md-4 mb-4 item-v2">
                                    <span className="onsale">Sale</span>
                                    <a href="shop-single.html"> <img src="images/product_03.png" alt="Image"/></a>
                                    <h3 className="text-dark"><a href="shop-single.html">Umcka Cold Care</a></h3>
                                    <p className="price">$120.00</p>
                                </div>

                                <div className="text-center item col-md-4 mb-4 item-v2">
                                    <a href="shop-single.html"> <img src="images/product_01.png" alt="Image"/></a>
                                    <h3 className="text-dark"><a href="shop-single.html">Umcka Cold Care</a></h3>
                                    <p className="price">$120.00</p>
                                </div>

                                <div className="text-center item col-md-4 mb-4 item-v2">
                                    <span className="onsale">Sale</span>
                                    <a href="shop-single.html"> <img src="images/product_02.png" alt="Image"/></a>
                                    <h3 className="text-dark"><a href="shop-single.html">Umcka Cold Care</a></h3>
                                    <p className="price">$120.00</p>
                                </div>

                                <div className="text-center item col-md-4 mb-4 item-v2">
                                    <a href="shop-single.html"> <img src="images/product_04.png" alt="Image"/></a>
                                    <h3 className="text-dark"><a href="shop-single.html">Umcka Cold Care</a></h3>
                                    <p className="price">$120.00</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}