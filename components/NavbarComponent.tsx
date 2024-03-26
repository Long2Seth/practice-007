
'use client';
import Link from "next/link";

import {
	Navbar,
	NavbarBrand,
	NavbarCollapse,
	NavbarLink,
	NavbarToggle,
} from "flowbite-react";
import { usePathname } from "next/navigation";

export default function NavbarComponent() {
	const pathName = usePathname();
	const isService = false;
	return (
		<Navbar fluid rounded className="w-full">
			<NavbarBrand as={Link} href="https://flowbite-react.com">
				<img
					src="/next.svg"
					className="mr-3 h-6 sm:h-9"
					alt="Flowbite React Logo"
				/>
				<span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
					Flowbite React
				</span>
			</NavbarBrand>
			<NavbarToggle />
			<NavbarCollapse>
				<NavbarLink href="/" active={pathName==="/"}>
					Home
				</NavbarLink>
				<NavbarLink as={Link} href="/about" active={pathName === "/about"}>
					About
				</NavbarLink>
				<NavbarLink as={Link} active={pathName === "/service"}
					href="/service"
				>
					Services
				</NavbarLink>
				<NavbarLink href="#">Pricing</NavbarLink>
				<NavbarLink href="/contact">Contact</NavbarLink>
			</NavbarCollapse>
		</Navbar>
	);
}
