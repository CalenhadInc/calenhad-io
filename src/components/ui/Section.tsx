import { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  container?: boolean;
}

export function Section({
  children,
  container = true,
  className,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn("py-16 md:py-24 lg:py-32", className)}
      {...props}
    >
      {container ? (
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {children}
        </div>
      ) : (
        children
      )}
    </section>
  );
}
