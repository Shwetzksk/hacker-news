import { format, formatDistanceStrict } from "date-fns";

type DateType = Date | undefined;

export function formatMonthYear(date: DateType): string {
  return date ? format(date, "MMM yyyy") : "";
}
export function formatDayMonthYear(date: DateType): string {
  return date ? format(date, "dd MMM, yyyy") : "";
}
export function humanizeDate(date: DateType): string {
  return date
    ? formatDistanceStrict(date, new Date(), { addSuffix: true })
    : "";
}
