import React from 'react';

function CarDetail() {
    return(
        <div>
            <div className="card-title">
                <h4>Honda City</h4>
                <p>Posted at 1 Nov, 9.30 AM</p>
            </div>
            <div className="card-body">
                <div><span><img src="/assets/images/group.svg" alt="group icon" /></span>Specification 01</div>
                <div><span><img src="/assets/images/path.svg" alt="path icon" /></span>Specification 02</div>
                <div><span><img src="/assets/images/payment.svg" alt="payment icon" /></span>Specification 03</div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className="hideDetails">
                Hide Details
                <span><img src="/assets/images/more.svg" alt="more icon" /></span>
            </div>
            <div className="user-details">
                <div className="profile"><img src="/assets/images/profile.png" alt="profile" /></div>
                <div>
                    <h3>Rohan Sharma</h3>
                    <p>Bengaluru, Karnataka</p>
                </div>
            </div>
        </div>
    );
}

export default CarDetail;