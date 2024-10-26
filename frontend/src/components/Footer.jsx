import logo from "../../src/assets/logo.svg";

const Footer = () => {
  return (
    <div className="md:mx-10">
        <div className="flex  flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
      {/* left */}

      <div className=" ">
        <img className="mb-5 w-40" src={logo} />
        <p className="w-full md:w-2/3 text-gray leading-6">
          Simply browse through our extensive list of trusted doctors, schedule
          your appointment hassle-free
        </p>
      </div>
      {/* center */}
      <div>
        <p className="text-xl font-medium mb-5"> COMPANY</p>
        <ul className="flex flex-col gap-2 text-gray-600">
          <li>Home</li>
          <li> Contact us</li>
          <li>About us</li>
          <li> Privacy policy</li>
        </ul>
      </div>
      {/* right */}
      <div>
        <p className="text-xl font-medium mb-5">Get In Touch</p>
        <ul className="flex flex-col gap-2 text-gray-600">
          <li>+91 9953642969</li>
          <li>sagar.jha8505848114@gmail.com</li>
        </ul>
      </div>

      
    </div>
    <div>
        <hr />
        <p className="py-5 text-sm text-center"> Copy right 2024@ way to wellness -All Right Reserved</p>
      </div>
    </div>
  );
};
export default Footer;
