import image from "../assets/react.svg";
import Resume from "../assets/My Resume (4).pdf";


export const Navbar = () => {
  return (
    <>
      <header className="z-50">
        <nav className="flex items-center justify-between py-5 px-3 fixed w-full bg-gray-950">
          <div>
            <img src={image} alt="logo " />
          </div>
          <div>
            <ul className="flex items-center justify-center gap-5 text-white">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href={Resume} type="download">Resume</a>
              </li>
              <li>
                <a href={`mailto:ganga228151@gmail.com?subject=${encodeURIComponent("subject"
              )}&body=${encodeURIComponent("body")}`}
              className="cursor-pointer">
                Contact us
              </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};