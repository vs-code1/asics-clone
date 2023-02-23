import "./shoeList.css";

function Footer() {
  return (
    <footer>
      <div className="footer-section">
        <div className="social-section">
          <h3>Stay connected with ASICS</h3>
          <div className="form-section">
            <form action="">
              <label htmlFor="">
                <input type="text" id="email-up" />
              </label>
              <label htmlFor="">
                <input type="submit" value="Subscribe" id="email-sub" />
              </label>
            </form>
          </div>
          <p className="list-heading">STAY CONNECTED</p>
          <div>
            <ul className="social">
              <li>f</li>
              <li>ita</li>
              <li>tw</li>
            </ul>
          </div>
        </div>
        <div className="info-section">
          <div className="list">
            <ul>
              <li className="list-heading">About</li>
              <li>Terms & Conditions</li>
              <li>Disclaimer</li>
              <li>Privacy Policy</li>
              <li>Cookie Policy</li>
              <li>Security</li>
            </ul>
          </div>
          <div className="list">
            <ul>
              <li className="list-heading">Customer Service</li>
              <li>Contact Us</li>
              <li>Returns Policy</li>
              <li>Shipping Information</li>
              <li>FAQ</li>
              <li>Order Tracking</li>
              <li>Store Locator</li>
            </ul>
          </div>
          <div className="list">
            <ul>
              <li className="list-heading">SIZING GUIDES</li>
              <li>Shoe Size Guide</li>
              <li>Shoe Width Guide</li>
              <li>Pronation Guide</li>
              <li>Clothing Size Guide</li>
            </ul>
          </div>
          <div className="list">
            <ul>
              <li className="list-heading">SHOP</li>
              <li>New Arrivals</li>
              <li>Best Sellers</li>
              <li>Exclusives</li>
              <li>Shoes</li>
              <li>Clothing</li>
              <li>Accessories</li>
            </ul>
          </div>
          <div className="list">
            <ul>
              <li className="list-heading">Blog</li>
              <li>ASICS Stories</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
