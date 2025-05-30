import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from "react";
import { OTPInput, OTPInputContext } from "input-otp";
import { Minus } from "lucide-react";
import { cn } from "@/lib/utils";
const InputOTP = React.forwardRef(({ className, containerClassName, ...props }, ref) => (_jsx(OTPInput, { ref: ref, containerClassName: cn("flex items-center gap-2 has-[:disabled]:opacity-50", containerClassName), className: cn("disabled:cursor-not-allowed", className), ...props })));
InputOTP.displayName = "InputOTP";
const InputOTPGroup = React.forwardRef(({ className, ...props }, ref) => (_jsx("div", { ref: ref, className: cn("flex items-center", className), ...props })));
InputOTPGroup.displayName = "InputOTPGroup";
const InputOTPSlot = React.forwardRef(({ index, className, ...props }, ref) => {
    const inputOTPContext = React.useContext(OTPInputContext);
    const { char, hasFakeCaret, isActive } = inputOTPContext.slots[index];
    return (_jsxs("div", { ref: ref, className: cn("relative flex h-9 w-9 items-center justify-center border-y border-r border-zinc-200 text-sm shadow-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md dark:border-zinc-800", isActive && "z-10 ring-1 ring-zinc-950 dark:ring-zinc-300", className), ...props, children: [char, hasFakeCaret && (_jsx("div", { className: "pointer-events-none absolute inset-0 flex items-center justify-center", children: _jsx("div", { className: "h-4 w-px animate-caret-blink bg-zinc-950 duration-1000 dark:bg-zinc-50" }) }))] }));
});
InputOTPSlot.displayName = "InputOTPSlot";
const InputOTPSeparator = React.forwardRef(({ ...props }, ref) => (_jsx("div", { ref: ref, role: "separator", ...props, children: _jsx(Minus, {}) })));
InputOTPSeparator.displayName = "InputOTPSeparator";
export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator };
