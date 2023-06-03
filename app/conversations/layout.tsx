import React from "react";
import Sidebar from "../components/sidebar/Sidebar";
import ConversationsList from "./components/ConversationsList";
import getConversations from "../actions/getConverstations";
import getUsers from "../actions/getUsers";

type Props = {
  children: React.ReactNode;
};

export default async function ConversationsLayout({ children }: Props) {
  const conversations = await getConversations();
  const users = await getUsers();

  return (
    <Sidebar>
      <div className="h-full">
        <ConversationsList users={users} initialItems={conversations} />
        {children}
      </div>
    </Sidebar>
  );
}
