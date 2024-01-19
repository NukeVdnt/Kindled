import { PrettyChatWindow } from "react-chat-engine-pretty";
import "../../.env";

const ChatsPage = (props) => {
  return (
    <div style={{ height: "100vh", fontFamily: "Raleway" }}>
      <PrettyChatWindow
        projectId={PROJECT_ID}
        username={props.user.username}
        secret={props.user.secret}
        style={{ height: "100%" }}
      />
    </div>
  );
};

export default ChatsPage;
