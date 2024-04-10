import { DashboardNav } from "@/components/dashboard-nav";
import { navItems } from "@/constants/data";
import { cn } from "@/lib/utils";

export default function Sidebar() {
  return (
    <aside className="hidden lg:block w-60 h-screen overflow-y-auto scrollbar-hide border-r pt-16">
      <div className="space-y-4 py-2">
          
            <DashboardNav items={navItems} />
        </div>
    </aside>
  );
}
