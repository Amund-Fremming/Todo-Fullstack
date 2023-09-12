import { deleteUser } from "../../utils/todoAPIService";

export default function HomePage() {

    const handleHandle = async () => {
        const user = await deleteUser(1);
        console.log(user);
    }

    return (
        <div className="bg-gradient-to-r px-2 from-indigo-500 via-purple-500 to-pink-400 h-screen flex justify-center w-full">
            <div className="flex flex-col text-center">
                <h1 className="text-white font-serif text-6xl mt-32 ">Todo manager</h1>
                <h2 className="text-white font-serif text-2xl mt-3">Login to start making todos</h2>
            </div>

            <button onClick={handleHandle}>hey</button>
        </div>
    )
}
