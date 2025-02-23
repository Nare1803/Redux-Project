import { useOutletContext } from "react-router-dom";
import { IContext } from "../../../helpers/types";
import { ProfileHeader } from "./components/profile-header";
import { Search } from "./components/search";
import { Feed } from "./feed";

export const Profile = () => {
  const { user } = useOutletContext<IContext>();

  return (
    <>
      {user && (
        <div className="flex">
          <ProfileHeader />
          <Search />
        </div>
      )}
      {user && (
        <div>
          <Feed />
        </div>
      )}
    </>
  );
};
