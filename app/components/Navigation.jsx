"use client";

import { useEffect, useState } from "react";

export default function Navigation() {
	const [open, setOpen] = useState(false);

	useEffect(() => {
		document.body.style.overflow = open ? "hidden" : "";
		return () => {
			document.body.style.overflow = "";
		};
	}, [open]);

	return (
		<header className="topbar">
			<div className="container nav-shell">
				<a className="brand" href="/">My<span>Company</span></a>

				<nav aria-label="Primary navigation">
					<button
						className={`mobile-toggle ${open ? "active" : ""}`}
						aria-expanded={open}
						aria-label={open ? "Close menu" : "Open menu"}
						onClick={() => setOpen((s) => !s)}
					>
						<span />
						<span />
						<span />
					</button>

					<div className={`nav-links ${open ? "open" : ""}`}>
						<a href="#services" onClick={() => setOpen(false)}>Services</a>
						<a href="#projects" onClick={() => setOpen(false)}>Work</a>
						<a href="/blog" onClick={() => setOpen(false)}>Blog</a>
						<a href="#contact" className="btn btn-primary" onClick={() => setOpen(false)}>Contact</a>
					</div>
				</nav>
			</div>
		</header>
	);
}
