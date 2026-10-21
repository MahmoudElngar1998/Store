import { Link } from "react-router-dom";
import { FaTwitter, FaFacebookF, FaTiktok, FaInstagram } from "react-icons/fa";
export default function Footer() {
  return (
    <footer className="w-full bg-black text-white p-4 min-h-[35vh]   ">
      <div className="mt-15 ml-15 mr-15 flex justify-between">
        <div className=" w-[300px]flex flex-col    ">
          <h1 className="font-bold mb-5 text-3xl">
            c<span className="text-gray-400">y</span>ber
          </h1>
          <p className="text-white/50 max-w-sm flex flex-nowrap">The premium destination for the latest phones and accessories. We offer the best deals on the market. </p>
        </div>
        <div className="flex flex-col ">
          <h1 className="text-l">Services</h1>
          <div className="text-white/50 flex flex-col">
            <Link>Bonus program</Link>
            <Link>Gift cards</Link>
            <Link>Credit and payment</Link>
            <Link>Service contracts</Link>
            <Link>Non-cash account</Link>
            <Link>Payment</Link>
          </div>
        </div>
        <div className="flex flex-col">
          <h1 className="text-l">Assistance to the buyer</h1>
          <div className="text-white/50 flex flex-col">
            <Link>Find in order</Link>
            <Link>Terms of delivery</Link>
            <Link>Exchange and return of goods</Link>
            <Link>Guarantee</Link>
            <Link>Frequently asked questioun</Link>
            <Link>Terms of use of the site </Link>
          </div>
        </div>
      </div>

      <div className="flex ml-15 gap-6 text-xl mt-10">
        <a href="#" target="_blank" rel="noreferrer">
          <FaTwitter />
        </a>
        <a href="#" target="_blank" rel="noreferrer">
          <FaFacebookF />
        </a>
        <a href="#" target="_blank" rel="noreferrer">
          <FaTiktok />
        </a>
        <a href="#" target="_blank" rel="noreferrer">
          <FaInstagram />
        </a>
      </div>
    </footer>
  );
}
