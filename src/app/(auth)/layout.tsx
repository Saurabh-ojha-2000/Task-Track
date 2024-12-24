"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface AuthLayoutProps {
    children: React.ReactNode;
};

const AuthLayout = ({ children }: AuthLayoutProps) => {
    const pathname = usePathname();
    const signIn = "/sign-in";
    const signUp = "/sign-up";
    const isSignIn = pathname === signIn;


    return (
        <main className="bg-neutral-100 min-h-screen">
            <div className="mx-auto max-w-screen-2xl p-4">
                <nav className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <Image src='/MainLogo.svg' alt='logo' height={152} width={56} />
                        <span className="text-blue-600 font-bold">TaskTrack</span>
                    </div>
                    <Button asChild variant='secondary'>
                        <Link href={isSignIn ? signUp : signIn}>
                        {isSignIn? "Sign Up" : "Login"}
                        </Link>
                        
                    </Button>
                </nav>
                <div className="flex flex-col items-center justify-center pt-4 md:pt-14">
                    {children}
                </div>
            </div>
        </main>
    )
}

export default AuthLayout;