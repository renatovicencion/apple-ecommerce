import React from "react";

import Image from "next/image";
import Link from "next/link";
import {
	MagnifyingGlassIcon,
	ShoppingBagIcon,
	UserIcon,
} from "@heroicons/react/24/outline";

const Header = () => {
	const session = false;

	return (
		<header className='sticky top-0 z-30 flex items-center justify-between bg-primary p-4'>
			<div className='flex items-center justify-center md:w-1/5'>
				<Link href='/'>
					<div className='relative h-10 w-5 cursor-pointer opacity-75 transition hover:opacity-100'>
						<Image
							src='https://rb.gy/vsvv2o'
							alt='logo'
							fill
							className='object-contain'
						/>
					</div>
				</Link>
			</div>

			<div className='hidden flex-1 items-center justify-center space-x-8 md:flex'>
				<a href='headerLink'>Product</a>
				<a href='headerLink'>Explore</a>
				<a href='headerLink'>Support</a>
				<a href='headerLink'>Business</a>
			</div>

			<div className='flex items-center justify-center gap-x-4 md:w-1/5'>
				<MagnifyingGlassIcon className='headerIcon' />
				<Link href='/checkout'>
					<div className='relative cursor-pointer'>
						<span className='absolute -right-1 -top-2 z-50 flex h-4 w-4 items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-violet-500 pt-0.5 text-[10px] text-white'>
							5
						</span>
						<ShoppingBagIcon className='headerIcon' />
					</div>
				</Link>

				{session ? (
					<Image
						src={
							// session.user?.image ||
							"https://www.gravatar.com/avatar"
						}
						alt='user'
						className='cursor-pointer rounded-full'
						width={34}
						height={34}
						//  onClick={() => signOut()}
					/>
				) : (
					<UserIcon
						className='headerIcon'
						//  onClick={() => signIn()}
					/>
				)}
			</div>
		</header>
	);
};

export default Header;
