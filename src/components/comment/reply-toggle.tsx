import { FaAngleDown } from "react-icons/fa";

interface ReplyToggleProps {
  onChange: () => void;
  isSingular: boolean;
  repliesCount: number;
  toggle: boolean;
}
export default function ReplyToggle({
  onChange,
  isSingular,
  repliesCount,
  toggle,
}: ReplyToggleProps) {
  return (
    <div
      className="flex items-center gap-1 text-slate-700 my-1.5 cursor-pointer w-fit"
      onClick={onChange}
    >
      <p className="text-xs font-medium">
        {repliesCount} {isSingular ? "reply" : "replies"}
      </p>
      <FaAngleDown
        size={12}
        className={`transition-transform  ease-in-out ${
          toggle ? "rotate-180" : ""
        }`}
      />
    </div>
  );
}
