import { LoginButton } from "@/components/auth/login-button";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen bg-black flex-col items-center justify-between p-24">
      <h4 className="text-white">Welcome to Codecaro</h4>
      <LoginButton>
        <Button variant="secondary" className="lg">
          Sign in{" "}
        </Button>
      </LoginButton>
    </main>
  );
}
