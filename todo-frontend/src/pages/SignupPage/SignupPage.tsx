import { useState } from "react";
import { NavLink as Nav } from "react-router-dom";
import { createUser } from "../../utils/todoAPIService";

interface LoginPageProps {
    userLoggedIn: boolean;
    setUserLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
  }

export default function SignupPage({ userLoggedIn, setUserLoggedIn }: LoginPageProps) {
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [serverResponse, setServerResponse] = useState<string>("");

    const handleSignUp = async () => {
      const response = await createUser(username, password)
      if(response === "USERNAME_EXISTS") {
        setServerResponse("Username exists!");
      } else if(response !== null) {
        setUsername("");
        setPassword("");
        setUserLoggedIn(true);
        setServerResponse("User created!");
      } else {
        setServerResponse("Server error, try again later");
      }
    }
    
    return (
      <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-400 h-screen w-full flex justify-center">
          <div className="shadow-2xl mt-20 w-[400px] h-[360px] bg-white rounded-xl flex flex-col items-center mx-4">
            <p className="font-serif text-red-600 absolute top-[165px]">{serverResponse}</p>
            <h1 className="mb-6 mt-12 text-4xl text-blue-500 font-serif font-semibold">Sign up</h1>
            <input
              value={username}
              onChange={e => setUsername(e.target.value)}
              type="text"
              placeholder="Username"
              className="my-2 h-[40px] w-[170px] justify-center border-b-[4px] border-gray-400 font-serif text-xl"
            />
            <input
              value={password}
              onChange={e => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
              className="my-2 h-[40px] w-[170px] justify-center border-b-[4px] border-gray-400 font-serif text-xl"
            />
            <button
              onClick={handleSignUp}
              className="bg-blue-500 my-2 h-[50px] mt-4 w-[130px] rounded-xl justify-center text-center text-white font-serif text-xl border-b-[5px] border-blue-800 hover:translate-y-[1px] hover:border-b-[0px] hover:bg-blue-800"
            >
              Singup
            </button>
            <Nav
                to="/login"
                className={"mt-2 font-serif underline underline-offset-2"}
            >
                Login
            </Nav>
          </div>
      </div>
    )
}
