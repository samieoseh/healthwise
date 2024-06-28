import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AppointmentPage() {
  return (
    <div className="mx-4 flex-1 rounded-lg h-full bg-[#fff] p-12">
      <div className="flex items-center justify-between h-[10%]">
        <div className="space-y-2">
          <h1 className="font-bold text-2xl">Appointments</h1>
          <p>Manage all your appointments here</p>
        </div>
        <div className=" flex items-center gap-4">
          <Link
            className="rounded-full px-8 py-4 text-md bg-primary text-white font-bold "
            href="/appointments/new"
          >
            New Appointment
          </Link>
        </div>
      </div>
      <div className=" flex-1 h-[90%] w-full py-12 flex items-center justify-center">
        <p className="text-3xl text-center text-gray-500">
          There are no <br /> appointments for now.
        </p>
      </div>
    </div>
  );
}
