import { values } from '../../data';
import Genesis from '/genesis.png';
import FadedImage from '/logo-faded.png';
import HR from '/faith_sunday.png';
import Icons from '../../components/Icons';
import EmmanuelOlujobi from '/emmanuel_olujobi.png';
import DanielBamigbayan from '/daniel_bamigbayan.png';
import LinkedInIcon from '/linkedin-icon.svg';
import TwitterIcon from '/twitter-icon.svg';
import JideFagbuji from '/jide_fagbuji.png';

export default function About() {
  document.title += ' | Who we are';

  return (
    <section>
      <section className='bg-[#F5FBFF] text-[#0B4A6F] py-20  px-4 md:px-20 xl:px-40'>
        <div className='flex flex-col gap-8 text-center xl:text-left'>
          <h1 className='w-full text-3xl font-semibold xl:w-3/5 md:text-5xl'>
            Leading the Technological Revolution in Africa:
          </h1>
          <p className='w-full text-base xl:w-1/2 md:text-lg'>
            At D-Pia Innovations, our journey is rooted in a commitment to
            ushering in a new era of technological advancement across Africa.
            Founded with a vision to drive innovation and empower businesses, we
            are at the forefront of shaping the digital landscape on the
            continent.
          </p>
        </div>
      </section>

      <section className='py-10 lg:py-20'>
        <div className='flex flex-wrap flex-col-reverse md:flex-row justify-between px-4 md:px-20 xl:px-40 h-fit text-[#0B4A6F] gap-y-12'>
          <div className='hidden w-full xl:w-1/2 xl:block'>
            <img
              alt='Genesis layout image'
              src={Genesis}
              className='h-auto rounded-md md:h-fit'
            />
          </div>
          <div className='w-full xl:w-1/2'>
            <h2 className='mb-8 text-3xl font-semibold text-center md:text-5xl lg:text-left'>
              The Genesis
            </h2>
            <div className='flex flex-col text-base xl:font-semibold md:text-lg gap-y-2'>
              <p>
                D-Pia Innovations Limited began as a full-fledged information
                technology company but more recently has evolved into a
                management consulting practice. We provide technology-driven
                solutions to businesses.
              </p>
              <p>
                Our services include shared workspace services, business process
                automation, and affordable software development training for the
                middle and lower class. Additionally, we drive operational
                excellence initiatives for optimal positioning of organizations.
              </p>
              <p>
                The company started in 2016 with the purpose of becoming one of
                the top drivers of inclusive ICT skill acquisition and
                technology adoption for education and business in Africa.
              </p>
              <button className='bg-[#C4320A] w-32 font-medium py-2 text-base md:text-lg rounded-md mt-3 text-white'>
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className='bg-[#001F6B] h-fit py-10 lg:py-20 flex flex-col text-white md:px-20 xl:px-40 px-4 space-y-12'>
        <div className='flex items-center justify-between w-full space-x-8'>
          <div className='flex flex-col space-y-4 xl:w-1/2'>
            <div>
              <h2 className='text-3xl font-bold xl:text-5xl'>Our Mission</h2>
            </div>
            <div className='flex flex-col p-2 text-base xl:font-semibold xl:text-lg gap-y-2'>
              <p>
                We are more than just a company; we are on a mission to
                revolutionize how technology transforms lives. Our mandate is to
                provide technology-driven solutions that enhance productivity,
                drive economic growth, and contribute to the diversification of
                African economies. Our mission sits on a tripod
              </p>
              <>
                <ul className='mt-5 ml-8 space-y-2 font-normal list-disc'>
                  <li>
                    To improve the efficiency of business processes through
                    automation.
                  </li>
                  <li>
                    To drive inclusive ICT skill acquisition for poverty
                    reduction within the middle and lower class.
                  </li>
                  <li>
                    To drive a culture of innovation, continuous learning and
                    collaboration.
                  </li>
                </ul>
              </>
            </div>
          </div>
          <div className='right-0 hidden w-1/2 opacity-70 xl:block'>
            <img
              src={FadedImage}
              alt='dpia logo faded'
              className='object-cover h-full w-[85%] '
            />
          </div>
        </div>
        <div className='flex flex-col items-center justify-between w-full lg:flex-row xl:space-x-8'>
          <div className='hidden w-1/2 xl:block'>
            <img src={FadedImage} alt='dpia logo faded' className='w-[70%] ' />
          </div>
          <div className='flex flex-col space-y-4 xl:w-1/2 '>
            <div>
              <h2 className='text-3xl font-bold xl:text-5xl'>Our Vision</h2>
            </div>
            <div className='flex flex-col p-2 text-base lg:text-lg gap-y-2'>
              <p>
                To become one of the top drivers of inclusive ICT skill
                acquisition and technology adoption for education and business
                in Africa
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className='px-4 mt-20 md:px-20 xl:px-40'>
          <div className='text-[#0B4A6F] flex flex-col justify-center items-center space-y-2'>
            <h2 className='text-3xl font-bold md:text-4xl'>
              Organization Values
            </h2>
            <p className='text-lg xl:text-xl'>
              At D-Pia, our core values define who we are and guide our actions
            </p>
          </div>
          <div className='flex flex-row flex-wrap justify-center gap-4 mt-16 lg:gap-6 xl:gap-8'>
            {values.map((item) => {
              const { Icon } = item;
              return (
                <div
                  key={item.heading}
                  className='w-full md:w-[14em] xl:h-[18em] xl:w-[18em] h-[14em] shadow-md flex flex-col justify-between px-2 xl:px-6 py-4 bg-[#F5FBFF] text-[#0B4A6F]'
                >
                  <div className='flex items-center justify-center rounded-full shadow-sm bg-gray-300/50 size-12'>
                    <Icon className='text-orange-600 fill-yellow-200' />
                  </div>
                  <div className='space-y-2 xl:space-y-4'>
                    <h2 className='text-xl font-semibold xl:text-3xl'>
                      {item.heading}
                    </h2>
                    <p className='text-base xl:text-md'>{item.body}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className='bg-[#001F6B] h-fit  py-10 lg:py-20 text-white mt-16'>
        <div className='flex flex-col items-center'>
          <div className='px-4 space-y-4 text-center xl:w-4/5 md:px-20 lg:px-40'>
            <h2 className='text-xl font-semibold lg:text-3xl xl:text-5xl'>
              Meet the visionary minds steering D-Pia towards a future defined
              by innovation and excellence.
            </h2>
            <p className='font-normal text-md xl:text-xl text-white/80'>
              Explore the profiles of our visionary leaders who are instrumental
              in steering D-Pia towards new heights in the ever-evolving
              landscape of technology and business
            </p>
          </div>
          <div className='mt-8'>
            <div className='flex flex-col flex-wrap items-center justify-center lg:flex-row xl:gap-4'>
              <div className='relative overflow-hidden h-80 w-72 group'>
                <div>
                  <img
                    src={EmmanuelOlujobi}
                    alt='emmanuel olujobi - profile'
                    className='object-contain w-fit'
                  />
                </div>
                <div className='absolute bottom-2 px-2 py-2 space-y-1 text-left translate-x-[1.3em] bg-gray-400 h-[11em] opacity-100 xl:opacity-0 w-[15.2em] bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 xl:group-hover:translate-y-0 xl:group-hover:opacity-100 transition-all duration-1000'>
                  <div className='flex items-center w-full text-left'>
                    <h3 className='font-bold'>Emmanuel Olujobi</h3>
                    <div className='ml-auto'>
                      <a href='#' target='_blank'>
                        <Icons.ArrowUpRight />
                      </a>
                    </div>
                  </div>
                  <p className='text-sm font-semibold'>
                    Data Analyst & Program Manager
                  </p>
                  <p className='text-sm'>
                    Multifaceted professional with expertise in data analysis,
                    program management
                  </p>
                  <div className='flex gap-4'>
                    <a href='#' target='_blank'>
                      <img src={LinkedInIcon} alt='linkedin icon' />
                    </a>
                    <a href='#' target='_blank'>
                      <img src={TwitterIcon} alt='twitter icon' />
                    </a>
                  </div>
                </div>
              </div>

              <div className='relative overflow-hidden h-80 w-72 group'>
                <div>
                  <img
                    src={DanielBamigbayan}
                    alt='daniel bamigbayan - profile'
                    className='object-contain w-72'
                  />
                </div>
                <div className='absolute bottom-2 px-2 py-2 space-y-1 text-left translate-x-[1.3em] bg-gray-400 h-[11em] opacity-100 xl:opacity-0 w-[15.2em] bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 xl:group-hover:translate-y-0 xl:group-hover:opacity-100 transition-all duration-1000'>
                  <div className='flex items-center w-full text-left'>
                    <h3 className='font-bold'>Daniel Bamigbayan</h3>
                    <div className='ml-auto'>
                      <a href='#' target='_blank'>
                        <Icons.ArrowUpRight />
                      </a>
                    </div>
                  </div>
                  <p className='text-sm font-semibold'>Founder & CEO</p>
                  <p className='text-sm'>
                    A dedicated mentor for the Tony Elumelu Foundation
                    Entrepreneurship Programme
                  </p>
                  <div className='flex gap-4'>
                    <a href='#' target='_blank'>
                      <img src={LinkedInIcon} alt='linkedin icon' />
                    </a>
                    <a href='#' target='_blank'>
                      <img src={TwitterIcon} alt='twitter icon' />
                    </a>
                  </div>
                </div>
              </div>

              <div className='relative overflow-hidden h-80 w-72 group'>
                <div>
                  <img
                    src={JideFagbuji}
                    alt='jide fagbuji - profile'
                    className='object-contain w-72'
                  />
                </div>
                <div className='absolute bottom-2 px-2 py-2 space-y-1 text-left translate-x-[1.3em] bg-gray-400 h-[11em] opacity-100 xl:opacity-0 w-[15.2em] bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 xl:group-hover:translate-y-0 xl:group-hover:opacity-100 transition-all duration-1000'>
                  <div className='flex items-center w-full text-left'>
                    <h3 className='font-bold'>Jide Fagbuji</h3>
                    <div className='ml-auto '>
                      <a href='#' target='_blank'>
                        <Icons.ArrowUpRight />
                      </a>
                    </div>
                  </div>
                  <p className='text-sm font-semibold'>Systems Developer</p>
                  <p className='text-sm'>
                    An accomplished Systems Developer with over 7 years of
                    professional experience.
                  </p>
                  <div className='flex self-end gap-4'>
                    <a href='#' target='_blank'>
                      <img src={LinkedInIcon} alt='linkedin icon' />
                    </a>
                    <a href='#' target='_blank'>
                      <img src={TwitterIcon} alt='twitter icon' />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='bg-[#F5FBFF] text-[#0B4A6F] py-10 lg:py-20 px-4 md:px-20 xl:px-40'>
        <div className='flex flex-col items-center lg:flex-row h-fit lg:justify-between '>
          <div className='w-full mb-8 xl:w-1/2 lg:mb-0'>
            <p className='text-[#C4320A] font-bold text-center lg:text-left text-sm md:text-xl mb-4'>
              The Heartbeat of D-Pia
            </p>
            <h3 className='text-4xl font-semibold text-center lg:text-6xl lg:text-left'>Our People</h3>
            <p className='mt-4 text-sm font-normal text-center md:text-2xl lg:text-left'>
              At D-Pia Innovations, our strength lies in our people — a
              community of dedicated individuals who share a common passion for
              technology, innovation, and making a positive impact. Our diverse
              team brings together unique perspectives, skills, and experiences,
              creating a vibrant and collaborative environment.
            </p>
          </div>
          <div className='relative hidden lg:ml-0 xl:block'>
            <img src={HR} className='w-[21em] rounded-md h-96 object-contain ' />
            <div className='absolute bottom-0 flex flex-col p-2 space-y-2 font-semibold transform bg-gray-800 border-2 border-gray-100 rounded-md xl:-translate-x-1/2 w-[21em]  text-white xl:w-96 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 h-36 xl:transform-none xl:translate-y-0 xl:-left-24 lg:-bottom-4 '>
              <span>
                &quot;The supportive culture here motivates me to push
                boundaries and explore new possibilities in the ever-evolving
                tech landscape.&quot;
              </span>
              <span className='text-[#e26542] font-bold text-md'>
                - Faith Sunday, HR
              </span>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
