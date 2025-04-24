
import * as React from "react"

import { cn } from "@/lib/utils"

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  startContent?: React.ReactNode;
  endContent?: React.ReactNode;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, startContent, endContent, ...props }, ref) => {
    return (
      <div className="relative w-full">
        {startContent && (
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
            {startContent}
          </div>
        )}
        <input
          type={type}
          className={cn(
            "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
            startContent && "pl-9",
            endContent && "pr-9",
            className
          )}
          ref={ref}
          {...props}
        />
        {endContent && (
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
            {endContent}
          </div>
        )}
      </div>
    )
  }
)
Input.displayName = "Input"

export { Input }
