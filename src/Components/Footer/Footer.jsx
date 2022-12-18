import style from "./footer.module.css";
export const Footer = () => {
  return (
    <div>
      <footer>
        <div className={style.logoimg}>
          <img
            src="https://a.travel-assets.com/globalcontrols-service/content/f285fb631b0a976202ef57611c7050e9ef5ca51a/images/EG_Wordmark_blue_RGB.svg"
            alt=""
          />
        </div>
        <div>
          <p>Company</p>
          <ul>
            <li>About</li>
            <li>Jobs</li>
            <li>List your property</li>
            <li>Partnerships</li>
            <li>Newsroom</li>
            <li>Investor</li>
            <li>Site map</li>
            <li>Prbirz</li>
            <li>Advertising</li>
          </ul>
        </div>
        <div>
          <p>Explore</p>
          <ul>
            <li>Hotels in United States</li>
            <li>Vacation Rentals in United States</li>
            <li>Car Rentals in United States</li>
            <li>Domestic Flight</li>
            <li>Vaction Packages in United States</li>
            <li>Orbitz Reviews</li>
            <li>Orbitz Coupons</li>
            <li>LGBTQ Travel</li>
            <li>Unique Accommodation</li>
            <li>Travel Blog</li>
          </ul>
        </div>
        <div>
          <p>Policies</p>
          <ul>
            <li>Privacy Policy</li>
            <li>Terms of Use</li>
            <li>Vrbo term and conditions</li>
            <li>Orbitz Rewards Terms</li>
            <li>Do not sell my personal inforamations</li>
          </ul>
        </div>
        <div>
          <p>Help</p>
          <ul>
            <li>Support</li>
            <li>Cancle ypur hotel or vaction rental booking</li>
            <li>Cancle your flight</li>
            <li>Refund timelines ,policies & processes</li>
            <li>Use ad=nd Coupon</li>
          </ul>
        </div>
      </footer>
      <hr />
      <div className={style.copyRight}>
        <p>
          © 2022 Orbitz, LLC, an Expedia Group Company. All rights reserved.
        </p>
        <p>
          Orbitz, Orbitz.com, and the Orbitz logo are trademarks or registered
          trademarks of Orbitz, LLC. CST# 2083930-50.
        </p>
      </div>
    </div>
  );
};
