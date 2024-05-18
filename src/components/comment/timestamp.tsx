import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import * as dateFormatter from "@/utils/date-formatter";

interface Time {
  time: Date;
}
export default function TimeStamp({ time }: Time) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>{dateFormatter.humanizeDate(time)}</TooltipTrigger>
        <TooltipContent>
          {dateFormatter.formatDayMonthYear(time)}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
