import { jsx as _jsx } from "react/jsx-runtime";
import * as React from "react";
import { cn } from "@/lib/utils";
const Input = React.forwardRef(
// Destructure id and name here explicitly for clarity, though ...props would also catch them.
// This helps confirm they are recognized and passed.
({ className, type, id, name, ...props }, ref) => {
    return (_jsx("input", { type: type, id: id, name: name, className: cn("flex h-9 w-full rounded-md border border-zinc-200 bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-zinc-950 placeholder:text-zinc-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm dark:border-zinc-800 dark:file:text-zinc-50 dark:placeholder:text-zinc-400 dark:focus-visible:ring-zinc-300", className), ref: ref, ...props }));
});
Input.displayName = "Input";
export { Input };
