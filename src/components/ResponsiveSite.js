import React from 'react'

const ResponsiveSite = () => {
    return (
        <>
            <div className='container'>
                <div className='navbar'>
                    <img src='/img/logo.png' className='logo'></img>
                    <nav>
                        <ul>
                            <li><a href=''>Game Controller</a></li>
                            <li><a href=''>VR Accessories</a></li>
                            <li><a href=''>Media Remotes</a></li>
                            <li><a href=''>Others</a></li>
                        </ul>
                    </nav>
                    <img src='/img/menu.png' className='menu-icon'></img>
                </div>
                <div className='row'>
                    <div className='col-1'>
                        <h2>PS4 V2 <br />Dualshock 4</h2>
                        <h3>Wireless Controller for PlayStation 4</h3>
                        <p>(Compatible/Generic)</p>
                        <h4>$32.50</h4>
                        <button type='button'>Buy Now <img src='/img/arrow.png' /></button>
                    </div>

                    <div className='col-2'>
                        <img src='/img/controller.png' className='controller' />
                        <div className='color-box'></div>
                        <div className="add-btn">
                            <img src='/img/add.png' />
                            <small>Add To Cart</small>
                        </div>
                    </div>

                </div>
                <div className='social-media'>
                    <img src='/img/fb.png'></img>
                    <img src='/img/tw.png'></img>
                    <img src='/img/ig.png'></img>
                </div>
            </div>
        </>
    )
}

export default ResponsiveSite