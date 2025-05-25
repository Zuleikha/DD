import * as React from "react"

import { cn } from "@/lib/utils"

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  // Destructure id and name here explicitly for clarity, though ...props would also catch them.
  // This helps confirm they are recognized and passed.
  ({ className, type, id, name, ...props }, ref) => {
    return (
      <input
        type={type}
        id={id} // <--- Explicitly pass the id prop
        name={name} // <--- Explicitly pass the name prop
        className={cn(
          "flex h-9 w-full rounded-md border border-zinc-200 bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-zinc-950 placeholder:text-zinc-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm dark:border-zinc-800 dark:file:text-zinc-50 dark:placeholder:text-zinc-400 dark:focus-visible:ring-zinc-300",
          className
        )}
        ref={ref}
        {...props} // Other props (like value, onChange, etc.) will still be spread here
      />
    )
  }
)
Input.displayName = "Input"

export { Input }