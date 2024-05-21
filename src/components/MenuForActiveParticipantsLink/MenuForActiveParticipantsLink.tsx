import { useState } from "react";
import { EParticipantsPageTab } from "../../models";
import { EventParticipantsList } from "../EventParticipantsList";
import { EventParticipantsChart } from "../EventParticipantsChart";
import { MenuForActiveParticipantsLinkBtn } from "./MenuForActiveParticipantsLink.styles";

const MenuForActiveParticipantsLink = () => {
  const [activeTab, setActiveTab] = useState<EParticipantsPageTab>(
    EParticipantsPageTab.LIST
  );
  return (
    <div style={{margin: "0 auto"}}>
      <ul>
        <li>
          <MenuForActiveParticipantsLinkBtn
            active={activeTab === EParticipantsPageTab.LIST}
            onClick={() => setActiveTab(EParticipantsPageTab.LIST)}
          >
            Participants
          </MenuForActiveParticipantsLinkBtn>
        </li>
        <li>
          <MenuForActiveParticipantsLinkBtn
            active={activeTab === EParticipantsPageTab.CHART}
            onClick={() => setActiveTab(EParticipantsPageTab.CHART)}
          >
            Chart
          </MenuForActiveParticipantsLinkBtn>
        </li>
      </ul>
      {activeTab === EParticipantsPageTab.LIST ? (
        <EventParticipantsList />
      ) : (
        <EventParticipantsChart />
      )}
    </div>
  );
};

export default MenuForActiveParticipantsLink;
