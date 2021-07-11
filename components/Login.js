import Image from "next/image";
import Button from "@material-tailwind/react/Button";
import { signIn } from "next-auth/client";

function Login() {
  return (
    <div className="flex flex-col items-center justify-center py-2 min-h-screen">
      <Image
        src="https://links.papareact.com/1ui"
        height="300"
        width="500"
        objectFit="contain"
      />
      <Button
        onClick={signIn}
        color="gray"
        buttonType="outline"
        rounded={true}
        ripple="dark"
        className="h-20 w-44 mt-10"
      >
        Login
      </Button>
    </div>
  );
}

export default Login;
