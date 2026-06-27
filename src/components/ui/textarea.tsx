import * as React from "react";
import { cn } from "@/utils/cn";

export type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  function Textarea({ className, ...props }, ref) {
    return (
      <textarea
        ref={ref}
        className={cn(
          "w-full resize-y rounded-lg border border-border bg-bg-2 px-4 py-3 text-sm text-fg shadow-sm outline-none transition",
          "placeholder:text-fg-muted",
          "focus:border-accent/60 focus:ring-2 focus:ring-accent/20",
          "disabled:cursor-not-allowed disabled:opacity-50",
          "min-h-[120px]",
          className,
        )}
        {...props}
      />
    );
  },
);
