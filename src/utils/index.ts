import { twMerge } from 'tailwind-merge'


export function cn(...args: (string)[]): string {
    return twMerge(args.filter(String).join(" "));
}

