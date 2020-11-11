import React from "react";

export default class Block extends React.Component{
    render() {
        return (
            <div className="site-section py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="feature">
                                <span className="wrap-icon flaticon-24-hours-drugs-delivery" />
                                <h3><a href="#">Free Delivery</a></h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa laborum voluptates excepturi neque labore .</p>
                                <p><a href="#" className="d-flex align-items-center"><span className="mr-2">Learn more</span> <span className="icon-keyboard_arrow_right" /></a></p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="feature">
                                <span className="wrap-icon flaticon-medicine" />
                                <h3><a href="#">New Medicine Everyday</a></h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa laborum voluptates excepturi neque labore .</p>
                                <p><a href="#" className="d-flex align-items-center"><span className="mr-2">Learn more</span> <span className="icon-keyboard_arrow_right" /></a></p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="feature">
                                <span className="wrap-icon flaticon-test-tubes" />
                                <h3><a href="#">Medicines Guaranteed</a></h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa laborum voluptates excepturi neque labore .</p>
                                <p><a href="#" className="d-flex align-items-center"><span className="mr-2">Learn more</span> <span className="icon-keyboard_arrow_right" /></a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}