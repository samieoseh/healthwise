import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <SignIn
        routing="virtual"
        signUpUrl="/sign-up"
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
