"use client";

import { useRouter } from "next/navigation";
import { LogOut } from "lucide-react";
import { createClient } from "@/lib/supabase/client";

export function LogoutButton() {
  const router = useRouter();
  const supabase = createClient();

  const onLogout = async () => {
    await supabase.auth.signOut();
    router.push("/admin/login");
    router.refresh();
  };

  return (
    <button
      onClick={onLogout}
      className="flex items-center gap-2 text-sm text-mist hover:text-danger"
    >
      <LogOut size={16} /> Sign out
    </button>
  );
}
