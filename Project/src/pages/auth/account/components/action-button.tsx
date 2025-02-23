import { useContext, useState } from "react";
import { AccountContext } from "../context";
import { METHODS, useHttpMutation } from "../../../../helpers/useHttp";
import { IResponse } from "../../../../helpers/types";

export const ActionButton: React.FC = () => {
  const context = useContext(AccountContext);
  if (!context) throw new Error("error");

  const { account, refetch } = context;
  const { following, followsMe, requested } = account.connection;
  const { isPrivate } = account;
  const [buttonState, setButtonState] = useState(
    following
      ? "unfollow"
      : followsMe
      ? "follow back"
      : requested
      ? "request sent"
      : "follow"
  );

  const [makeRequest] = useHttpMutation<IResponse>(refetch);
  const handleRequest = async () => {
    await makeRequest("/account/follow/" + account.id, METHODS.POST);
    if (isPrivate && buttonState === "follow") {
      setButtonState("request sent");
    } else if (!isPrivate) {
      setButtonState("unfollow");
    }
  };

  return (
    <>
      <button
        onClick={handleRequest}
        className="px-2 py-1 my-2 rounded-md bg-pink-500"
        disabled={buttonState === "request sent"}
      >
        {buttonState}
      </button>
    </>
  );
};
