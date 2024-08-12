import Navbar from "../Components/Navbar";

const MainLayout = ({ children }) => {
  return (
    <div className="flex flex-col gap-10">
      <Navbar />
      <main>{children}</main>
    </div>
  );
};

export default MainLayout;
