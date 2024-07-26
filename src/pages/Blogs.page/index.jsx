import { extendedData } from '../../data'
import BlogHero from '/blog-header.png'
import BlogCard from '../../components/card/blog-card'
import { Fragment } from 'react'
export default function Blogpage() {
	return (
		<section>
			<section className='text-[#001F6B] bg-gray-100 py-10 lg:py-20 md:px-20 xl:px-40 px-4'>
				<div className='flex flex-col gap-8 text-center xl:text-left'>
					<p className="text-[#C4320A] mx-auto xl:w-36 font-bold text-xl xl:mx-0">Our blog</p>
					<h1 className='w-full text-3xl font-semibold lg:w-4/5 md:text-5xl'>
						WELCOME TO OUR BLOG: GET INSIGHTS ON THE LATEST TRENDS
					</h1>

				</div>
			</section>
			<section>
				<div className='flex flex-col items-center justify-center mt-20'>
					<div>
						<img src={BlogHero} alt='blog header' className='px-20 rounded-md' />
					</div>
					<div className='py-8 font-bold text-center'>
						<p className='text-[#C4320A] text-3xl'>Latest Blogs</p>
						<p className='w-full text-base text-gray-700 xl:w-1/2 md:text-lg'>
							The latest industry news, interviews, technologies, resources and more.
						</p>
					</div>
					<div className='flex flex-wrap justify-center w-full gap-4 xl:gap-16'>
						{extendedData.map((item, idx) => (
							<Fragment key={idx}>
								<BlogCard idx={idx} item={item} />
							</Fragment>
						))}
					</div>
				</div>
			</section>
			<section className="px-4 py-20 md:px-20 xl:px-40">
				<div className='flex flex-col items-center justify-between w-full px-8 py-10 text-white bg-gray-800 lg:py-20 lg:px-16 rounded-3xl mt-28 lg:flex-row'>
					<div className='mb-8'>
						<h3 className='text-3xl font-bold'>
							Let&apos;s bridge the tech skill together!
						</h3>
						<p className='mt-4 text-xl font-light'>
							Join D-Pia Coding Academy and embark on a journey of skill
							development
						</p>
					</div>
					<>
						<button className='bg-[#C4320A] w-full lg:w-32 px-4 font-medium py-2 text-lg rounded-md mt-3 text-white'>
							Enroll
						</button>
					</>
				</div>
			</section>
		</section>
	)
}
