import { cn } from "@/lib/utils";

interface LogoProps {
    className?: string;
    variant?: "light" | "dark";
}

export function Logo({ className, variant = "light" }: LogoProps) {
    return (
        <div className={cn("flex items-center", className)}>
            {/* 
        User provided specific logo image.
        Assumes the file is saved as /logo.png in the public directory.
      */}
            <img
                src="/logo.png"
                alt="Langford International Institute"
                className="h-16 w-auto object-contain"
            />
        </div>
    );
}
