interface LoginPageProps {
  userLoggedIn: boolean;
  setUserLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function LoginPage({ userLoggedIn, setUserLoggedIn }: LoginPageProps) {

  const handleLoginUser = () => {
    setUserLoggedIn(userLoggedIn);
  }

  handleLoginUser();

  return (
    <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-400 h-screen">
        LoginPage
    </div>
  )
}
