import Image from "next/image"
import { SignupForm } from "@/components/SignupForm"

export default function SignupPage() {
  return (
    <div className="bg-muted flex min-h-screen flex-col items-center justify-center gap-6 p-6 md:p-10">
      {/* Container utama dengan lebar maksimal yang nyaman di desktop */}
      <div className="w-full max-w-md">
        {/* Logo section */}
        <div className="mb-0 flex flex-col items-center gap-4">
          <Image
            src="/sikas.png"
            alt="Logo SIKAS"
            width={160}
            height={160}
            className="h-40 w-40 object-contain"
            priority
          />
        </div>

        {/* Form signup */}
        <SignupForm />
      </div>
    </div>
  )
}