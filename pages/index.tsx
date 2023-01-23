import type { GetServerSideProps } from "next";
import Head from "next/head";
import Header from "../components/Header";
import Landing from "../components/Landing";
import { Tab } from "@headlessui/react";
import { fetchCategories } from "../utils/fetchCategories";

interface Props {
	categories: Category[];
}

const Home = ({ categories }: Props) => {
	console.log({ categories });

	return (
		<div>
			<Head>
				<title>Apple Ecommerce</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Header />

			<main className='relative h-[200vh] bg-primary'>
				<Landing />
			</main>

			<section className='relative z-40 -mt-[100vh] min-h-screen bg-terciary'>
				<div className='space-y-10 py-16'>
					<h1 className='text-center text-4xl font-medium tracking-wide text-white md:text-5xl'>
						New Promos
					</h1>

					<Tab.Group>
						<Tab.List className='flex justify-center'>
							{categories.map((category) => (
								<Tab
									key={category._id}
									id={category._id}
									className={({ selected }) =>
										`whitespace-nowrap rounded-t-lg py-3 px-5 text-sm font-light outline-none md:py-4 md:px-6 md:text-base ${
											selected
												? "borderGradient bg-darkGray text-white"
												: "border-b-2 border-darkGray text-grayLight"
										}`
									}
								>
									{category.title}
								</Tab>
							))}
						</Tab.List>
						<Tab.Panels className='mx-auto max-w-fit pt-10 pb-24 sm:px-4'>
							{/* <Tab.Panel></Tab.Panel> */}
						</Tab.Panels>
					</Tab.Group>
				</div>
			</section>
		</div>
	);
};

export default Home;

// Backend Code
export const getServerSideProps: GetServerSideProps<Props> = async () => {
	const categories = await fetchCategories();

	return {
		props: {
			categories,
		},
	};
};
