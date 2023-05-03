import { signOut } from "firebase/auth";
import { auth } from "./../../../firebase-config";
import Item from "./profile-dropdown-item";

export default function LogOut() {
  const logout = async () => {
    await signOut(auth);
  };
  return (
    <div className="absolute mt-12 flex flex-col w-full -ml-4 border border-border-color bg-common">
      <Item text="Profile" link={"./../profile-page"} />
      <Item text="Settings" />
      <Item text="Sign Out" logout={logout} link={"./../"} />
    </div>
  );
}
