import Navbar from "../components/Navbar";
import Link from "next/link";

export default function Home(props) {
  return (
    <div>
      <section className=" pl-10 flex md:flex-row flex-col sm:py-16 w-full">
        <div className="">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[45px] ss:leading-[100.8px]">
            <span>Generate your own Anime Art.</span>
          </h1>

          <p className="">
            Most advanced Anime Art
          </p>
          <Link
              className="text-white bg-[#050708] hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 mr-2 mb-2"href="/imageGeneration">
              Try it now!
          </Link>
        </div>
        <div style={{position: 'absolute', bottom: "2rem", right: "90%", width: "4rem", height: "4rem"}}>

        </div>

      </section>
    </div>
  )
}
