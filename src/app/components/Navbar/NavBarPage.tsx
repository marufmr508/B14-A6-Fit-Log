"use client"
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo.png"
// import WorkOutList from "../workoutList/WorkOutList";
import PlanList from "../myPlanPage/PlanList";
import AddToTodayPlanButton from "../Button/addToTodayPlanButton";
import { useContext } from "react";
import { WorkOutContext } from "@/app/Context/WorkOutContext";

 
  


export default function Navbar() {
   const context = useContext(WorkOutContext);

  if (!context) {
    throw new Error("Navbar must be used inside WorkoutProvider");
  }

  const { addToTodayPlan, saveForLater } = context;
  return (
    <nav className="mx-auto mt-1 flex h-[72px] w-[100%] items-center justify-between rounded-md border   border-gray-400 bg-[#0b0c0f] px-6 text-white">

      
      <Link href="/" className="flex items-center gap-3">
        <div className="text-2xl text-lime-400">
            <Image src={logo} alt="image" />
        </div>
        <span className="text-lg font-bold tracking-wide">FITLOG</span>
      </Link>

      
      <div className="flex items-center gap-2">
        <Link
          href="/workouts"
          className="rounded-full bg-lime-400 px-5 py-2 text-sm font-semibold text-black"
        >
          Workouts
        </Link>

        <Link
          href="/my-plan"
          className="rounded-full px-5 py-2 text-sm text-gray-400 hover:text-white"
        >
          My Plan
        </Link>
      </div>

       
      <div className="flex items-center gap-7 text-sm">

         
        <Link
          href="my-plan"
          className="flex items-center gap-2 text-gray-300 hover:text-white"
        >
          <span>Plan</span>

          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-lime-400 text-xs font-bold text-black">
            {  addToTodayPlan.length}
          </span>
        </Link>

         
        <Link
          href="/saved"
          className="flex items-center gap-2 text-gray-400 hover:text-white"
        >
          <span>Saved</span>

          <span className="flex h-5 w-5 items-center justify-center rounded-full border border-gray-600 text-xs">
            {saveForLater.length}
          </span>
        </Link>

      </div>
    </nav>
  );
}