import { Outlet } from "react-router";

function AccountLayout() {
  return (
    <>
      <div className="h-16 bg-white shadow"></div>
      <div className="py-5 bg-gray-100">
        <div className="container mx-auto max-w-[1000px]">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default AccountLayout;
