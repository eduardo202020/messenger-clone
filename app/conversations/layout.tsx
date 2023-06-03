import React from "react";
import Sidebar from "../components/sidebar/Sidebar";
import ConversationsList from "./components/ConversationsList";
import getConversations from "../actions/getConverstations";

type Props = {
  children: React.ReactNode;
};

export default async function ConversationsLayout({ children }: Props) {
  const conversations = await getConversations();

  return (
    <Sidebar>
      <div className="h-full">
        <ConversationsList initialItems={conversations} />
        {children}
      </div>
    </Sidebar>
  );
}
