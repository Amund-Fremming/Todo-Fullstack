import { useState } from "react";
import { NavLink as Nav } from "react-router-dom";
import { loginUser } from "../../utils/userAPIService";
import { User } from "../../types/types";

interface LoginPageProps {
  setUserLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function LoginPage({ setUserLoggedIn }: LoginPageProps) {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [serverResponse, setServerResponse] = useState<string>("");

  // Bruker kan være null!
  const handleLoginUser = async () => {
    const response: User = await loginUser(username, password);
    if (response.username === username) {
      setServerResponse("Logged in!");
      setUserLoggedIn(true);
    } else {
      setServerResponse("Invalid login");

      // FJERN DENNE
      setUserLoggedIn(true);
    }
  };

  return (
    <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-400 h-screen w-full flex justify-center">
      <div className="shadow-2xl mt-20 w-[400px] h-[360px] bg-white rounded-xl flex flex-col items-center mx-4">
        <p className="font-serif text-red-600 absolute top-[165px]">
          {serverResponse}
        </p>
        <h1 className="mt-12 mb-6 text-4xl text-blue-500 font-serif font-semibold">
          Login
        </h1>
        <input
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          placeholder="Username"
          className="my-2 h-[40px] w-[170px] justify-center border-b-[4px] border-gray-400 font-serif text-xl"
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
          className="my-2 h-[40px] w-[170px] justify-center border-b-[4px] border-gray-400 font-serif text-xl"
        />
        <button
          onClick={handleLoginUser}
          className="bg-blue-500 my-2 h-[50px] mt-4 w-[130px] rounded-xl justify-center text-center text-white font-serif text-xl border-b-[5px] border-blue-800 hover:translate-y-[1px] hover:border-b-[0px] hover:bg-blue-800"
        >
          Login
        </button>
        <Nav
          to="/signup"
          className={"mt-2 font-serif underline underline-offset-2"}
        >
          Sign up
        </Nav>
      </div>
    </div>
  );
}
