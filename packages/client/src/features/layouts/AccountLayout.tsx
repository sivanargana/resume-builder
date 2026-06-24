import { Outlet } from "react-router";

function AccountLayout() {
  return (
    <>
      <div className="h-16 bg-red-500"></div>
      <Outlet />
    </>
  );
}

export default AccountLayout;
