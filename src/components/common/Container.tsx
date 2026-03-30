import * as React from "react"

import { cn } from "@/lib/utils"

const Container = ({
  className,
  children,
  ...props
}: React.ComponentProps<"div">) => {
  return (
    <div
      data-slot="container"
      className={cn(
        "mx-auto max-w-7xl px-6 md:px-12",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export { Container }
