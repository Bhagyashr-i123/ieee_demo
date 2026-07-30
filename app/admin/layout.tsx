import Link from "next/link";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { LogoutButton } from "@/components/admin/LogoutButton";

const navItems = [
  { href: "/admin", label: "Overview" },
  { href: "/admin/events", label: "Events" },
  { href: "/admin/announcements", label: "Announcements" },
  { href: "/admin/contact-submissions", label: "Contact Submissions" },
];

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const supabase = createClient();
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) redirect("/admin/login");

  return (
    <div className="flex min-h-screen bg-paper">
      <aside className="hidden w-64 shrink-0 border-r border-signalNavy/8 bg-white p-6 md:block">
        <p className="font-display font-semibold text-ink">IEEE NKSS SAC</p>
        <p className="text-xs text-mist">Admin dashboard</p>
        <nav className="mt-8 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block rounded-lg px-3 py-2 text-sm text-ink hover:bg-ieeeBlue/5"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="mt-10">
          <LogoutButton />
        </div>
      </aside>
      <main className="flex-1 p-6 md:p-10">{children}</main>
    </div>
  );
}
