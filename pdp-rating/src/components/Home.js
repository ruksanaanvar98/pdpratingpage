import React from 'react'
import './Home.css'
import chohibared from '../../src/assets/chohibared.jpeg'
import warning from'../../src/assets/warning.png'
import star from '../assets/star.svg'
import star1 from '../assets/star1.svg'
import { Button } from 'react-bootstrap';
import truck from '../assets/truck.svg'
import heart from '../assets/heart.svg'
function Home() {
  return (
    <div className='home'>
     <div className='container'>
        <div className='content'>
            <h5>Home Cigars Cohiba Blue Robusto 20 Ct. Box 5.50X50</h5>
       
        <div className='sub-divs'>
            <div className='sub-div1'>
                <div className='div11'><img className='chohibared' src={chohibared} alt=''></img></div>
                <div className='div12'><div><img className='warning' src={warning}></img></div>&nbsp;&nbsp; WARNING: Tobacco smoke increases the risk of &nbsp;&nbsp;lung cancer and heart disease, even in nonsmokers</div>
            </div>
            <div className='sub-div2'>
              <h5><b>Cohiba</b> </h5><br></br>
              <h4>Corona Crystal</h4>
              <div className='star-img'>
               <img src={star}></img>&nbsp;
               <img src={star}></img>&nbsp;
               <img src={star}></img>&nbsp;
               <img src={star}></img>&nbsp;
               <img src={star1}></img>&nbsp;&nbsp;
               <a href='#'>1085 Reviews</a>&nbsp;<span>| &nbsp;856 answered questions</span>
              </div>
              <div className='after-star'><h6>Product Code: COHIBACRYSTAL | UPC: 689674020462 | Pack UPC: 689674023562</h6></div>
              <div className='Product-Description'><b>Product Description:</b><br></br><br></br> Cohiba Crystal Corona Tube Cigars; this natural Cigar is a medium bodied cigar with warm buttery flavors of butterscotch, each cigar encased in its own crystal tubo humidor.</div>
              <div className='in-Stock'>In Stock<br></br> <div className='in-Stocksub'>Case qty:&nbsp;<button className='btn1'>Case of 6</button><button className='btn2'>Case of 12</button></div></div>
              <div className='Product-Details'><h6><b>Product-Details:</b></h6>
                <div className='Brand'>Brand:<spam>Cohiba</spam></div>
                <div className='Line'>Line:<spam>Cohiba Blue</spam></div>
                <div className='Manufacture'>Manufacture:<spam>General Cigar</spam></div>
                <div className='Origin'>Origin:<spam>Dominican Republicn</spam></div>
                <div className='Ring'>Ring:<spam>50</spam></div>
                <div className='Shape'>Shape:<spam>Robusto </spam></div>
                <div className='Size'>Size:<spam>5.5</spam></div>
                <div className='Wapper'>Wapper:<spam>EM </spam></div>
              </div>
            </div>
            <div className='sub-div3'>
              <div className='div31'><b>$70.00</b>&nbsp;&nbsp;$87.00<button className='offbtn'>10% OFF</button></div>
              
                <div className='Tax'>Tax:<spam>$23.78</spam></div>
                <div className='Shipping'>Shipping:<spam>$15.00</spam></div>
                <div className='Quantity'>Quantity:<spam><button className='inside'>1</button></spam></div>
                <div className='Truck'><img src={truck}></img><spam><a href='#'>change Address</a></spam></div>
                <div className='Estimated-Delivery'>Estimated Delivery:<spam>3-4 days</spam></div>
                <div className='cart-btn'><button className='black-btn'>Add to Cart</button></div>
                <div className='wish-btn' ><button className='white-btn'><img src={heart}></img>Add to Whishlist</button></div>
                <div className='last-link'><a href='#'><ul>Other offers starting at $91.00</ul></a></div>
              
                {/* <div className='last'>dfgdgffh</div> */}
            </div>
           
        </div>
        </div>
    </div>
    </div>

  )
}

export default Home