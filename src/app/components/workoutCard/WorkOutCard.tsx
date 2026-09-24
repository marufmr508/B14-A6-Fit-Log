 import Image from "next/image";
import { Clock3, Flame, Star } from "lucide-react";
import type { WorkoutType } from "@/types";

const WorkOutCard = ({ workout }: { workout: WorkoutType }) => {
  return (
    <section> 
        
    <div className="w-full overflow-hidden rounded-xl border border-zinc-800 bg-[#15171c] shadow-sm transition duration-300 hover:-translate-y-1 hover:border-lime-400/50">
      
       
      <div className="relative aspect-[16/10] w-full overflow-hidden">
        <Image
          src={workout.image}
          alt={workout.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition duration-300 hover:scale-105"
        />
      </div>

       
      <div className="p-4 sm:p-5">

         
        <div className="mb-3 flex flex-wrap gap-2">
          {workout.muscleGroups.map((muscle) => (
            <span
              key={muscle}
              className="rounded-full bg-lime-400 px-2.5 py-1 text-[10px] font-extrabold tracking-wide text-black uppercase sm:px-3 sm:text-[11px]"
            >
              {muscle}
            </span>
          ))}
        </div>

         
        <h2 className="line-clamp-1 text-base font-black tracking-wide text-white uppercase sm:text-lg">
          {workout.name}
        </h2>

         
        <p className="mt-1 line-clamp-1 text-xs text-zinc-500 sm:text-sm">
          {workout.equipment}
        </p>

        
        <div className="my-3 h-px bg-zinc-800 sm:my-4" />

         
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-xs text-zinc-400 sm:gap-4 sm:text-sm">

           
          <div className="flex items-center gap-1.5">
            <Clock3 size={14} />
            <span>{workout.duration} min</span>
          </div>

        
          <div className="flex items-center gap-1.5">
            <Flame size={14} />
            <span>{workout.caloriesBurned} kcal</span>
          </div>

           
          <div className="flex items-center gap-1.5">
            <Star size={14} />
            <span>{workout.rating}</span>
          </div>

        </div>
      </div>
    </div>
    </section>
  );
};

export default WorkOutCard;