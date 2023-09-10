export default function Footer() {
  return (
    <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-400 h-32 flex justify-center items-center">
        <div className="flex justify-around items-center w-[60%] font-serif text-xl underline underline-offset-2">
            <a href="https://github.com/Amund-Fremming/Todo-Fullstack" className="hover:text-blue-800">Code</a>
            <a href="https://fremmingdev.web.app/" className="hover:text-blue-800">Developer</a>
        </div>
    </div>
  )
}
