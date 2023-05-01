import "./Profile.scss";
import { SideMenuCard } from "../../types/types";
import { useState } from "react";
import LoginForm from "../Login/LoginForm";
import useUser from "../../hooks/useUser";
import { AccountCircle } from "@mui/icons-material";
import { Button } from "@mui/base";

interface ProfileProps {
  card: SideMenuCard;
}

export default function Profile({ card }: ProfileProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { isAuthenticated, logOut } = useUser();
  const handleLogOut = () => {
    logOut();

  }
  return (
    <div className={`ProfileContainer ${isOpen ? "expanded" : ""}`}>
      <img
        className="Profile"
        src={card.photoURL}
        alt="profile"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      />
      <div
        // className="ProfileInfo"
        style={{ display: isOpen ? "block" : "none" }}
      >
        {!isAuthenticated && <LoginForm />}
        {isAuthenticated && (
          <>
            <div className="Border" />
            <div className="LoginBack">
              <AccountCircle style={{ fontSize: 60 }} />
              <h1 className="Tittle">Estas Loggeado</h1>
              <Button className="Button" onClick={handleLogOut}>
                Salir
              </Button>
            </div>
          </>
        )}
      </div>
    </div >
  );
}