import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { DottedSeparator } from "@/components/dotted-separator"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

export const SignInCard = () => {
  return (
    <Card className="w-full h-full md:w-[487px] border-none shadow-none">
      <CardHeader className="flex items-center justify-center text-center p-6">
        <CardTitle className="text-2xl">
          Welcome Back!
        </CardTitle>
      </CardHeader>
      <div className="p-6">
        <DottedSeparator />
      </div>
      <CardContent className="p-6">
        <form className="space-y-4">
          <Input
            required
            type="email"
            value={""}
            onChange={() => { }}
            placeholder="Enter email address"
            disabled={false}
          />

          <Input
            required
            type="password"
            value={""}
            onChange={() => { }}
            placeholder="Enter password"
            disabled={false}
            min={8}
            max={256}
          />

          <Button
            disabled={false}
            size="lg"
            className="w-full"
          >
            Sign In
          </Button>

        </form>
      </CardContent>
      <div className="p-6">
        <DottedSeparator />
      </div>
      <CardContent className="p-6 flex-col gap-y-4">
        <Button disabled={false} variant='secondary' size='lg' className="w-full">
          <FcGoogle className="mr-2 size-5" />
          Login with Google
        </Button>
        <Button disabled={false} variant='secondary' size='lg' className="w-full">
          <FaGithub className="mr-2 size-5" />
          Login with Github
        </Button>

      </CardContent>
    </Card>
  )
}