import { format } from "date-fns";

export function formatMonthYear(date: Date): string {
  return format(date, "MMM yyyy");
}
