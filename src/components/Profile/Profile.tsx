import "./Profile.scss";
import { SideMenuCard } from "../../types/types";
import { useCallback, useEffect, useState } from "react";
import LoginForm from "../Login/LoginForm";
import useUser from "../../hooks/useUser";
import { AccountCircle } from "@mui/icons-material";
import { Button } from "@mui/base";
import { AuthStatus } from "../../types/user";
import { BiUserCircle } from "react-icons/bi";

interface ProfileProps {
  card: SideMenuCard;
}

export default function Profile({ card }: ProfileProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { userStatus, logOut } = useUser();
  const handleLogOut = () => {
    logOut();
  }

  useEffect(() => {
    if (userStatus != AuthStatus.AUTHENTICATED) {
      setIsOpen(true);
    }
  }, [userStatus]);
  return (
    <div className={`ProfileContainer ${isOpen ? "expanded" : ""}`}>
      <BiUserCircle
        className="Profile"
        onClick={() => {
          if (userStatus == AuthStatus.AUTHENTICATED) {
            setIsOpen(!isOpen);
          }
        }}
      />
      <div
        // className="ProfileInfo"
        style={{ display: isOpen ? "block" : "none" }}
      >
        {(userStatus !== AuthStatus.AUTHENTICATED) ?
          <>
            <LoginForm />
          </>
          :
          (<>
            <div className="Border" />
            <div className="LoginBack">
              <AccountCircle style={{ fontSize: 60 }} />
              <h1 className="Tittle">Estas Loggeado</h1>
              <Button className="Button" onClick={handleLogOut}>
                Salir
              </Button>
            </div>
          </>)}
      </div>
    </div >
  );
}
