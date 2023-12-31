import React from "react";
import { SideMenuCard } from "../../../types/types";
import "./SideBarMenuCardView.scss";

interface SideBarMenuCardViewProps {
  card: SideMenuCard;
  isOpen: boolean;
}

export default function SideBarMenuCardView({
  card,
  isOpen,
}: SideBarMenuCardViewProps) {
  return (
    <div className="SideBarMenuCardViewSty">
      <img className="Profile" src={card.photoURL} alt="profile" width="100%" />
      <div className={`ProfileInfo ${isOpen ? "" : "collapsed"}`}>
        <div className="Name">{card.displayName}</div>
        <div className="Title">{card.title}</div>
      </div>
    </div>
  );
}
