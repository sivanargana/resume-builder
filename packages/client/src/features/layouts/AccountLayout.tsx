import { Button } from "@/components/ui/button";
import { useQueryClient } from "@tanstack/react-query";
import { LogOut } from "lucide-react";
import { Outlet, useNavigate } from "react-router";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog";
import { useState } from "react";

function AccountLayout() {
  const [confirm, setConfirm] = useState(false);
  const queryClient = useQueryClient();

  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    queryClient.clear();
    navigate("/auth");
  };
  return (
    <>
      <div className="h-16 bg-white shadow sticky top-0 z-10 flex flex-col justify-center">
        <div className="container mx-auto max-w-200 px-5">
          <Button variant="outline" size="icon" onClick={() => setConfirm(true)}>
            <LogOut />
          </Button>
        </div>
      </div>
      <div className="py-5 bg-gray-100">
        <div className="container mx-auto max-w-200 px-5">
          <Outlet />
        </div>
      </div>

      <AlertDialog open={confirm} onOpenChange={setConfirm}>
        <AlertDialogContent size="sm">
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>You want to logout</AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel variant="outline">No</AlertDialogCancel>
            <AlertDialogAction variant="destructive" onClick={logout}>
              Yes
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}

export default AccountLayout;
