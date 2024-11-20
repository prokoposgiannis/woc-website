export default function Home() {
  return (
    <div className="flex min-h-screen overscroll-none cursor-default">
      <div className="flex flex-row items-center h-32 w-full text-lg font-bold text-white text-nowrap">
        <div className="w-56">
          <text className="p-6">
            woc
          </text>
        </div>
        <div className="flex flex-row w-full pl-28">
          <ul className="flex flex-row space-x-10 ">
            <li>
            <a>
              Be an Agent
              </a>
            </li>
            <li>
              <a>
              Find an Agent
              </a>
            </li>
            <li>
            <a>
              About us
              </a>
            </li>
          </ul>
        </div>
        <div className="flex justify-end items-center space-x-12 w-full mr-10">
          <div className="mx-6 px-6 py-2 bg-slate-500 text-center rounded-full hover:bg-slate-400 transition duration-300">
            Contact us!
          </div>
          <div className="p-6">
            EN
          </div>
        </div>
      </div>
    </div>
  );
}
