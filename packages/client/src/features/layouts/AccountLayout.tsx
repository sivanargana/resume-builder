import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import { Outlet, useNavigate } from "react-router";

function AccountLayout() {
  const navigate = useNavigate();
  const login = () => {
    localStorage.removeItem("token");
    navigate("/auth");
  };
  return (
    <>
      <div className="h-16 bg-white shadow sticky top-0 z-10 flex flex-col justify-center">
        <div className="container mx-auto max-w-250">
          <Button variant="outline" size="icon" onClick={login}>
            <LogOut />
          </Button>
        </div>
      </div>
      <div className="py-5 bg-gray-100">
        <div className="container mx-auto max-w-250">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default AccountLayout;
