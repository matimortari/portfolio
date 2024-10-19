import { Icon } from "@iconify/react"
import logo from "/logo.png"

export default function Footer() {
	return (
		<footer id="footer" className="card-shadow footer-container">
			<img src={logo} alt="Logo" className="icon" />

			<div className="m-4 flex justify-center gap-4 text-secondary">
				<a href="https://github.com/matimortari">
					<Icon icon="simple-icons:github" className="icon h-6 w-6" />
				</a>
				<a href="https://linkedin.com/in/matheus-mortari-19rt">
					<Icon icon="simple-icons:linkedin" className="icon h-6 w-6" />
				</a>
				<a href="mailto:matheus.felipe.19rt@gmail.com">
					<Icon icon="simple-icons:gmail" className="icon h-6 w-6" />
				</a>
			</div>

			<div className="text-center text-xs">
				Icons provided by{" "}
				<a href="https://iconify.design/" className="text-secondary hover:underline">
					Iconify.
				</a>
				<p>© 2024 Matheus Mortari. All rights reserved.</p>
			</div>
		</footer>
	)
}
