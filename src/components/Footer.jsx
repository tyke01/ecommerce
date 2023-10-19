import {
  Facebook,
  GitHub,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@mui/icons-material";

const Footer = () => {
  return (
    <footer className="flex">
      <div className="flex-1 flex flex-col p-5">
        <h1 className="text-4xl font-bold">TREK.</h1>
        <p className="my-5">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam quasi
          cupiditate suscipit in dolorum. Facere quisquam obcaecati illo vel
          maiores dolores temporibus laudantium blanditiis totam alias sint,
          voluptatum tempore voluptatibus perspiciatis cumque nemo ab ex.
        </p>
        <div className="flex gap-5">
          <div className="social-icon bg-[#3B5999]">
            <Facebook />
          </div>
          <div className="social-icon bg-[#E4405F]">
            <Instagram />
          </div>
          <div className="social-icon bg-[#55ACEE]">
            <Twitter />
          </div>
          <div className="social-icon bg-[#E60023]">
            <Pinterest />
          </div>
          <div className="social-icon bg-[#000]">
            <GitHub />
          </div>
        </div>
      </div>

      <div className="flex-1 p-5">
        <h3 className="mb-8 text-2xl font-bold">Useful Links</h3>
        <ul className="flex flex-wrap">
          <li className="list-item">Home</li>
          <li className="list-item">cart</li>
          <li className="list-item">Man Fashion</li>
          <li className="list-item">Woman Fashion</li>
          <li className="list-item">Accessiories</li>
          <li className="list-item">My Account</li>
          <li className="list-item">Order Tracking</li>
          <li className="list-item">Wishlist</li>
          <li className="list-item">Terms</li>
        </ul>
      </div>

      <div className="flex-1 p-5 flex flex-col items-start ">
        <h3 className="mb-8 text-2xl font-bold">Contact</h3>

        <span className="contact-item">
          <Room /> 622 Mars Alley, South Galaxy 98336
        </span>

        <span className="contact-item">
          <Phone />
          +254 123 4567 89
        </span>

        <span className="contact-item">
          <MailOutline />
          Example@gmail.com
        </span>

        <div>
          <img src="https://i.ibb.co/Qfvn4z6/payment.png" alt="payment" />
        </div>

      </div>
    </footer>
  );
};

export default Footer;
