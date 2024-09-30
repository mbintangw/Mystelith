import { useState, useEffect, useContext } from "react";
import { Link } from "react-scroll";
import { BsList } from "react-icons/bs";
import { IoCloseSharp } from "react-icons/io5";

const Navbar = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 0) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
    }
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  },[]);

  return (
    <nav className={`z-40 w-full  fixed ${isScrolling ? 'text-black  backdrop-blur-md shadow-xl ' : 'text-white'} `}>
      <div className={`flex items-center justify-between md:justify-evenly px-7 py-5 mx-auto `}>
        <div>
          <h1 className="font-black text-4xl cursor-pointer">Mystelith</h1>
        </div>
        <ul className="font-medium text-lg [&>li]:cursor-pointer hidden lg:flex gap-20">
          <li>
            <Link
              to="Home"
              smooth={true}
              spy={true}
            >
              <div>Home</div>
            </Link>
          </li>
          <li>
            <Link
              to="About"
              smooth={true}
              spy={true}
            >
              <div>About</div>
            </Link>
          </li>
          <li>
            <Link
              to="Article"
              smooth={true}
              spy={true}
            >
              <div>Article</div>
            </Link>
          </li>
          <li>
            <Link
              to="Artists"
              smooth={true}
              spy={true}
            >
              <div>Artists</div>
            </Link>
          </li>
        </ul>

        <div className="lg:hidden z-50">
          {modalOpen ? (
            <IoCloseSharp
              className={`text-3xl  cursor-pointer ${isScrolling ? 'text-black' : 'text-white'}`}
              onClick={toggleModal}
            />
          ) : (
            <BsList
              className={`text-3xl  cursor-pointer ${isScrolling ? 'text-black' : 'text-white'}`}
              onClick={toggleModal}
            />
          )}
        </div>
      </div>

      {modalOpen && (
        <ul className="lg:hidden flex flex-col gap-6 -mt-20 justify-center items-center font-bold text-3xl [&>li]:cursor-pointer h-dvh  backdrop-blur-xl ">
          <li>
            <Link
              to="Home"
              smooth={true}
              spy={true}
            >
              <div>Home</div>
            </Link>
          </li>
          <li>
            <Link
              to="About"
              smooth={true}
              spy={true}
            >
              <div>About</div>
            </Link>
          </li>
          <li>
            <Link
              to="Article"
              smooth={true}
              spy={true}
            >
              <div>Article</div>
            </Link>
          </li>
          <li>
            <Link
              to="Artists"
              smooth={true}
              spy={true}
            >
              <div>Artists</div>
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
