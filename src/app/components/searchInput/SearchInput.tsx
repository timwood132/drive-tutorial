import type { ChangeEventHandler } from "react";
import Search from "../icons/Search";

type Props = {
  placeholderText?: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  value?: string;
};

const SearchInput = ({ placeholderText, value, onChange }: Props) => {
  return (
    <div className="flex items-center gap-2 rounded-lg border border-border-bounds bg-white-op-4 p-2 focus-within:ring-1 focus-within:ring-white-op-76">
      <Search className="h-5 w-5 shrink-0" />
      <input
        name="search"
        placeholder={placeholderText}
        type="text"
        className="bg-transparent text-sm font-normal placeholder-foreground-placeholder outline-0"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default SearchInput;
