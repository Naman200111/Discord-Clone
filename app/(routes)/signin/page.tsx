import { signIn } from "@/auth";
import Button from "@/components/ui/Button";

const SignIn = () => {
  const handleSignIn = async () => {
    "use server";
    await signIn("google", { redirectTo: "/" });
  };
  return <Button label="Signin with Google" onClick={handleSignIn} />;
};

export default SignIn;
