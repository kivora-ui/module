"use client";

import * as React from "react";
import { OTPInput, OTPInputContext } from "input-otp";
import { Dot } from "lucide-react";
import { cn } from "@kivora/theme";

export type InputOTPProps = React.ComponentPropsWithoutRef<typeof OTPInput>;

export const InputOTP = React.forwardRef<
  React.ElementRef<typeof OTPInput>,
  InputOTPProps
>(({ className, containerClassName, ...props }, ref) => (
  <OTPInput
    ref={ref}
    containerClassName={cn("flex items-center gap-2 has-[:disabled]:opacity-50", containerClassName)}
    className={cn("disabled:cursor-not-allowed", className)}
    {...props}
  />
));
InputOTP.displayName = "InputOTP";

export interface InputOTPGroupProps extends React.HTMLAttributes<HTMLDivElement> {}

export const InputOTPGroup = React.forwardRef<HTMLDivElement, InputOTPGroupProps>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex items-center", className)} {...props} />
  )
);
InputOTPGroup.displayName = "InputOTPGroup";

export interface InputOTPSlotProps extends React.HTMLAttributes<HTMLDivElement> {
  index: number;
}

export const InputOTPSlot = React.forwardRef<HTMLDivElement, InputOTPSlotProps>(
  ({ className, index, ...props }, ref) => {
    const inputOtpContext = React.useContext(OTPInputContext);
    const slot = inputOtpContext.slots[index];

    return (
      <div
        ref={ref}
        className={cn(
          "relative flex h-10 w-10 items-center justify-center border-y border-r border-input text-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md",
          "data-[active=true]:z-10 data-[active=true]:border-ring data-[active=true]:ring-2 data-[active=true]:ring-ring data-[active=true]:ring-offset-2",
          className
        )}
        data-active={slot?.isActive}
        {...props}
      >
        {slot?.char}
        {slot?.hasFakeCaret ? (
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <div className="h-4 w-px animate-pulse bg-foreground" />
          </div>
        ) : null}
      </div>
    );
  }
);
InputOTPSlot.displayName = "InputOTPSlot";

export interface InputOTPSeparatorProps extends React.HTMLAttributes<HTMLDivElement> {}

export const InputOTPSeparator = React.forwardRef<HTMLDivElement, InputOTPSeparatorProps>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex items-center justify-center px-2", className)} {...props}>
      <Dot className="h-4 w-4" />
    </div>
  )
);
InputOTPSeparator.displayName = "InputOTPSeparator";
