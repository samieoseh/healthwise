import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <SignUp
        routing="virtual"
        signInUrl="/sign-in"
        forceRedirectUrl="/home"
        appearance={{
          elements: {
            formButtonPrimary:
              "bg-[#2563eb] hover:bg-[#2563eb] text-sm normal-case",
          },
        }}
      />
    </div>
  );
}
