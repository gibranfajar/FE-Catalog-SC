import LogoCls from "../assets/img/logocls.png";

export const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start"></div>
      <div className="navbar-center">
        <img src={LogoCls} alt="Logo" className="w-32" />
      </div>
      <div className="navbar-end"></div>
    </div>
  );
};
