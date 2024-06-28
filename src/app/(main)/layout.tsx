import LeftNavBar from "@/components/LeftNavBar";
import NotificationPanel from "@/components/NotificationPanel";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="p-4 h-screen w-screen mx-auto flex flex-row">
      <LeftNavBar />
      <div className="w-[90%] flex-1">{children}</div>
    </div>
  );
}
