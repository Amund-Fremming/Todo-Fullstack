import { useState } from "react";

interface LoginPageProps {
  userLoggedIn: boolean;
  setUserLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function LoginPage({ userLoggedIn, setUserLoggedIn }: LoginPageProps) {

  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleLoginUser = () => {
    setUserLoggedIn(userLoggedIn);
  }

  handleLoginUser();

  return (
    <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-400 h-screen w-full flex justify-center">
        <div className="mt-20 w-[500px] h-[600px] bg-white rounded-xl flex flex-col items-center">
          <h1 className="mt-12 text-4xl text-purple-500 font-serif font-semibold">Login</h1>
          <input

          />
          <input
            
          />
        </div>
    </div>
  )
}
