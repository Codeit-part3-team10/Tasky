import * as React from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { cn } from "@/libs/utils";

type AvatarProps = {
  nickname?: string;
  profileImageUrl?: string;
} & React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>;

const Avatar = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  AvatarProps
>(({ className, nickname, profileImageUrl, ...props }, ref) => (
  <AvatarPrimitive.Root
    ref={ref}
    className={cn(
      "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
      className
    )}
    {...props}
  >
    {profileImageUrl !== undefined && profileImageUrl !== "" ? (
      <AvatarImage src={profileImageUrl} alt={nickname || ""} />
    ) : (
      <AvatarFallback>{nickname ? nickname[0].toUpperCase() : ""}</AvatarFallback>
    )}
  </AvatarPrimitive.Root>
));

Avatar.displayName = AvatarPrimitive.Root.displayName;

const AvatarImage = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Image>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Image
    ref={ref}
    className={cn("aspect-square h-full w-full", className)}
    {...props}
  />
));
AvatarImage.displayName = AvatarPrimitive.Image.displayName;

const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Fallback>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(({ className, children, ...props }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    className={cn(
      "flex h-full w-full items-center justify-center rounded-full bg-green-a3c4a2",
      className
    )}
    {...props}
  >
    <span style={{ color: "#fff", fontSize: "16px", fontWeight: 600 }}>
      {children}
    </span>
  </AvatarPrimitive.Fallback>
));
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;

export { Avatar, AvatarImage, AvatarFallback };