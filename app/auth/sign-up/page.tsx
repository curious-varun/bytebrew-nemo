"use client"
import { SignUpForm } from "@/components/auth/signup-form"

export default function SignUpPage() {
  return (
    <div className="bg-[radial-gradient(ellipse_at_top,_white,_purple)] flex min-h-svh flex-col items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm md:max-w-3xl">
        <SignUpForm />
      </div>
    </div>
  )
}
