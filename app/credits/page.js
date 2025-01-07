import "../globals.css";



export default function Home() {

	return (
        <>
        <div className="container">
            <h1 id="getCredits">Get Credits</h1>
        </div>

        <div className="pricing-outer-container">
            <div className="pricing-inner-container">
                <div className="pricing-box">
                    <div className="pricing-box-text">
                        <h2>50 Credits</h2>
                        <p className="price">$6.99</p> 
                    </div>
                    
                    <button className="get-started-btn" id="button1">Buy now!</button>
                </div>
                <div className="pricing-box">
                    <div className="pricing-box-text">
                        <h2>100 Credits</h2>
                        <p className="price">$9.99</p>
                        <p className="discount">30% OFF</p>
                    </div>
                    <button className="get-started-btn" id="button2">Buy now!</button>
                </div>
                <div className="pricing-box">
                    <div className="pricing-box-text">
                        <h2>200 Credits</h2>
                        <p className="price">$16.99</p>
                        <p className="discount">40% OFF</p>
                    </div>
                    <button className="get-started-btn" id="button3">Buy now!</button>
                </div>
            </div>
        </div>
        
        <div className="container">
            <button className="get-started-btn" id="goBack">Go Back</button>
        </div>
        </>
    )

}