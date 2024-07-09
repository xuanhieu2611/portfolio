export default function Contact() {
  return (
    <div className="pt-20" id="Contact">
        <p className="text-center">Get in Touch</p>
        <div className="flex items-center justify-center gap-1">
            <h1 className="text-center font-bold tracking-wider text-xl my-5" >Contact Me</h1>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 animate-bounce text-green-400">
                <path strokeLinecap="round" strokeLinejoin="round" d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
        </div>

        {/* Desktop */}
        <div className="hidden items-center justify-around w-[800px] mx-auto gap-5 border-2 bg-slate-100 border-gray-500 rounded-xl p-3 lg:flex">
            <div className="flex items-center gap-2">
                <img src="gmail.png" alt="gmail icon" className="h-9 rounded-lg" />
                <p><a className="hover:text-blue-500" href="mailto:hieulexuan261103@gmail.com">hieulexuan261103@gmail.com</a></p>
            </div>
            <div className="flex items-center gap-2">
                <img src="linkedin.svg.png" alt="linkedin icon" className="h-10 rounded-lg" />
                <p><a className="hover:text-blue-500" href="https://linkedin.com/in/hieule2611" target="_blank">LinkedIn</a></p>
            </div>
            <div className="flex items-center gap-2">
                <img src="instagram.svg" alt="instagram icon" className="h-10 rounded-lg" />
                <p><a className="hover:text-blue-500" href="https://instagram.com/hieu.spring" target="_blank">Instagram</a></p>
            </div>
            <div className="flex items-center gap-2">
                <img src="github.svg.png" alt="github icon" className="h-10 rounded-lg" />
                <p><a className="hover:text-blue-500" href="https://github.com/xuanhieu2611" target="_blank">Github</a></p>
            </div>
        </div>

        {/* Mobile */}
        <div className="flex flex-col gap-3 items-center lg:hidden">
            <div className="flex gap-3 items-center justify-center w-[400px] border-2 border-gray-700 rounded-lg py-2" >
                <img className="h-9 rounded-lg"src="gmail.png" alt="gmail icon" />
                <p><a href="mailto:hieulexuan261103@gmail.com">hieulexuan261103@gmail.com</a></p>
            </div>
            <div className="flex gap-3 items-center justify-center w-[400px] border-2 border-gray-700 rounded-lg py-2">
                <img className="h-10 rounded-lg" src="linkedin.svg.png" alt="linkedin icon" />
                <p><a href="https://linkedin.com/in/hieule2611" target="_blank">LinkedIn</a></p>
            </div>
            <div className="flex gap-3 items-center justify-center w-[400px] border-2 border-gray-700 rounded-lg py-2">
                <img className="h-10 rounded-lg" src="instagram.svg" alt="instagram icon" />
                <p><a href="https://instagram.com/hieu.spring" target="_blank">Instagram</a></p>
            </div>
            <div className="flex gap-3 items-center justify-center w-[400px] border-2 border-gray-700 rounded-lg py-2">
                <img className="h-10 rounded-lg" src="github.svg.png" alt="github icon" />
                <p><a href="https://github.com/xuanhieu2611" target="_blank">Github</a></p>
            </div>
        </div>
    </div>
    )
}
