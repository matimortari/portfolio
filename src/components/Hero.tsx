import { Icon } from "@iconify/react"
import avatar from "/avatar.png"

export default function Hero() {
	return (
		<div id="hero" className="card-shadow relative flex min-h-screen items-center justify-center">
			<div className="hero-background" />

			<div className="absolute inset-x-0 bottom-0 z-0 h-full overflow-hidden opacity-20">
				<img src="/map.png" alt="Background" className="block h-full w-full object-cover md:hidden" />

				<div className="scrolling-map scroll">
					<img src="/map.png" alt="Background" className="hidden h-full w-full object-cover md:block" />
					<img src="/map.png" alt="Background" className="hidden h-full w-full object-cover md:block" />
				</div>
			</div>

			<div className="relative flex flex-col items-center p-4 text-center font-serif">
				<img src={avatar} alt="@matimortari" className="hero-avatar float card-shadow m-2 w-1/2 md:w-1/4" />

				<div className="flex flex-col items-center gap-2 p-6">
					<h1 className="text-5xl font-bold md:text-6xl">Hi, I'm Matheus!</h1>
					<h2 className="text-3xl font-bold md:text-4xl">I'm a full-stack developer.</h2>
				</div>
				<p className="max-w-md text-xl">
					This is my website, where you can learn about my work. Feel free to explore and connect!
				</p>

				<hr />

				<div className="flex items-center justify-center gap-4 text-secondary">
					<a href="https://github.com/matimortari">
						<Icon icon="simple-icons:github" className="icon h-8 w-8 md:h-6 md:w-6" />
					</a>
					<a href="https://linkedin.com/in/matheus-mortari-19rt/">
						<Icon icon="simple-icons:linkedin" className="icon h-8 w-8 md:h-6 md:w-6" />
					</a>
					<a href="mailto:matheus.felipe.19rt@gmail.com">
						<Icon icon="simple-icons:gmail" className="icon h-8 w-8 md:h-6 md:w-6" />
					</a>
				</div>
			</div>
		</div>
	)
}
