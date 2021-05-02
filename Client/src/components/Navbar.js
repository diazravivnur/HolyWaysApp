import { useContext, useState, useEffect } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { UserContext } from "../contexts/userContext";

import LoginForm from "./Forms/LoginForm";
import RegisterForm from "./Forms/RegisterForm";
import FormModal from "./Modal/FormModal";

const Navbar = () => {
  const [state, dispatch] = useContext(UserContext);

  const location = useLocation();
  const [showLogin, setShowLogin] = useState(false);
  const isLogin = location?.state && location?.state?.isLogin;
  const [showRegister, setShowRegister] = useState(false);

  let history = useHistory();

  useEffect(() => {
    if (!state.isLogin) {
      setShowLogin(true);
    }
    return () => {
      setShowLogin(false);
      setShowRegister(false);
    };
  }, [state.isLogin, isLogin]);

  const handleOpenModalRegister = () => {
    setShowRegister(true);
  };
  const handleCloseModalRegister = () => {
    setShowRegister(false);
  };

  const handleOpenModalLogin = () => {
    setShowLogin(true);
  };
  const handleCloseModalLogin = () => {
    setShowLogin(false);
  };

  const handleLogout = () => {
    dispatch({
      type: "LOGOUT",
    });
  };
  const switchToRegister = () => {
    setShowRegister(true);
    setShowLogin(false);
  };

  const switchToLogin = () => {
    setShowLogin(true);
    setShowRegister(false);
  };

  return (
    <div>
      <div className="navbar-container">
        <Link to="/">
          <img src="/Icon.svg" alt="icon-holyways" className="icon" />
        </Link>
        <div className="button-login-register">
          {!state.isLogin} ? (
          <button onClick={handleOpenModalLogin} className="btn-login">
            Login
          </button>
          <button onClick={handleOpenModalRegister} className="btn-register">
            Register
          </button>
          ): (
          <>
            <span className="mt-1 mr-2">Hai, {state?.user?.name}</span>
            <button
              onClick={handleLogout}
              className="btn-sm py-1 btn-danger mr-2"
            >
              Logout
            </button>
          </>
          )
        </div>
      </div>
      <FormModal
        title="login"
        show={showLogin}
        handleClose={handleCloseModalLogin}
      >
        <LoginForm switcher={switchToRegister} />
      </FormModal>
      <FormModal
        title="register"
        show={showRegister}
        handleClose={handleCloseModalRegister}
      >
        <RegisterForm switcher={switchToLogin} />
      </FormModal>
    </div>
  );
};

export default Navbar;
