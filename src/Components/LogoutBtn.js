import React from "react";
import { Button } from "react-bootstrap";
import { useMainContextProvider } from "@/Context/MainContextProvider";
import { TbLogout } from "react-icons/bs";
import { useRouter } from "next/router";
import { useState } from "react";

const LogoutBtn = () => {
//   var { defaultState } = useMainContextProvider();

//   const router = useRouter("");
//   let { isLoggedIn } = useMainContextProvider();
//   let { setIsLoggedIn } = useMainContextProvider();
//   let [isToggleOn, setToggle] = useState({ isLoggedIn });

//   const logOut = () => {
//     setIsLoggedIn(false);
//     router.push("/");
//   };

  return (
    <>
      <Button>
        {/* onClick=
        {() => {
                  setIsLoggedIn(false);
                  router.push("/")
        }} */}
      </Button>
    </>
  );
};

export default LogoutBtn;
