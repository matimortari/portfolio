import { Icon } from "@iconify/react"
import avatar from "/avatar.png"

export default function Hero() {
	return (
		<div id="hero" className="card-shadow relative flex min-h-screen items-center justify-center">
			<div className="hero-background" />

			<div className="absolute inset-x-0 bottom-0 z-0 h-full overflow-hidden opacity-20">
				<img src="/map.png" alt="Background" className="block h-full w-full object-cover md:hidden" />

				<div className="scrolling-map">
					<img src="/map.png" alt="Background" className="hidden h-full w-full object-cover md:block" />
					<img src="/map.png" alt="Background" className="hidden h-full w-full object-cover md:block" />
				</div>
			</div>

			<div className="relative flex flex-col items-center gap-4 p-4 text-center font-serif ">
				<img src={avatar} alt="Avatar" className="hero-avatar card-shadow my-4 h-auto w-1/2 md:w-1/4" />
				<h1 className="text-4xl font-bold md:text-6xl">Hi, I'm Matheus!</h1>
				<h2 className="text-2xl font-bold md:text-4xl">I'm a full-stack developer.</h2>
				<p className="max-w-md text-base md:text-xl">
					This is my website, where you can learn about my work. Feel free to explore and connect!
				</p>

				<hr className="my-2 w-full border-t border-accent opacity-50" />

				<div className="flex items-center justify-center gap-4 text-secondary">
					<a href="https://github.com/matimortari">
						<Icon icon="simple-icons:github" className="icon h-8 w-8" />
					</a>
					<a href="https://www.linkedin.com/in/matheus-mortari-19rt/">
						<Icon icon="simple-icons:linkedin" className="icon h-8 w-8" />
					</a>
					<a href="mailto:matheus.felipe.19rt@gmail.com">
						<Icon icon="simple-icons:gmail" className="icon h-8 w-8" />
					</a>
				</div>
			</div>
		</div>
	)
}
