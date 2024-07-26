import Code_To_Earn from '/code_to_earn.png';
import Code_To_Ace from '/Code2Ace.png';
import Award from '../../../../assets/award-Icon.svg';
import { useLocation } from 'react-router-dom';

export default function CodeAcademy() {
  const { pathname } = useLocation();
  const title =
    pathname === '/What-we-do'
      ? ` | What We Do`
      : ` | What We Do - ${pathname.split('/')[2]}`;

  document.title += title;

  return (
    <section>
      <section className='bg-[#001F6B] text-white py-20 md:px-20 xl:px-40 px-4 '>
        <div className='flex flex-col gap-8 text-center lg:text-left'>
          <h1 className='w-full text-3xl font-semibold xl:w-3/5 xl:text-5xl'>
            <span className='block w-full'>CODING ACADEMY:</span>
            <span>Bridging the Tech Skill Gap</span>
          </h1>
          <p className='w-full text-base xl:w-1/2 lg:text-lg'>
            At D-Pia Coding Academy, we&apos;re on a mission to narrow the
            technology skill gap by providing comprehensive ICT training to
            individuals and employees of client organizations. Our training hub
            caters to both children and adults, cultivating a rich pool of
            future technology talents.
          </p>
        </div>
      </section>
      <section className='bg-[#F5FBFF] text-[#0B4A6F] py-10 lg:py-20 xl:px-40 md:px-20 px-4 '>
        <div className='flex flex-col space-y-16 '>
          <>
            <div className=''>
              <div className='flex xl:justify-center'>
                <h2 className='text-2xl font-bold text-left lg:text-4xl'>
                  Code2Earn: Unlocking Potential for Adolescents and Young
                  Adults
                </h2>
              </div>
              <div className='flex flex-col items-center mt-5 lg:flex-row'>
                <div className='space-y-8 xl:w-2/3'>
                  <div>
                    <h3 className='text-lg font-bold lg:text-2xl'>
                      Target Audience:
                    </h3>
                    <p className='mt-3 ml-5 lg:text-lg lg:font-semibold'>
                      Post-secondary students, undergraduates in computer
                      science, or anyone interested in building mobile/web
                      applications.
                    </p>
                  </div>
                  <div>
                    <h3 className='text-lg font-bold lg:text-2xl'>
                      Internship Opportunity:
                    </h3>
                    <p className='mt-3 ml-5 lg:w-2/3 lg:text-lg lg:font-semibold'>
                      Participants not only receive a final project but also
                      have the chance for a valuable internship experience.
                      D-Pia Coding Academy can provide internship leverage for
                      our students.
                    </p>
                  </div>
                  <div>
                    <h3 className='text-2xl font-bold'>
                      Code2Earn Program Includes
                    </h3>
                    <ul className='mt-3 ml-8 space-y-2 list-disc text-md lg:text-lg lg:font-semibold '>
                      <li className='ml-5 '>Frontend Web Development</li>
                      <li className='ml-5 '>Fullstack Web Development</li>
                      <li className='ml-5 '>UI/UX Design</li>
                    </ul>
                  </div>
                  <div>
                    <button className='bg-[#C4320A] w-full lg:w-32 lg:ml-5 font-medium py-2 text-lg rounded-md mt-3 text-white'>
                      Enroll
                    </button>
                  </div>
                </div>
                <div className='mt-2 xl:w-1/2 lg:mt-0'>
                  <img
                    src={Code_To_Earn}
                    alt='code 2 earn image'
                    className='hidden w-full shadow-b-md h-96 xl:block'
                  />
                </div>
              </div>
            </div>
          </>
          <div className='w-full h-1 bg-gray-200'></div>
          <>
            <div className='mt-16 '>
              <div className='flex xl:justify-center'>
                <h2 className='text-2xl font-bold text-left lg:text-4xl'>
                  Code2Ace: Nurturing Tech Talents from Ages 5 to 12
                </h2>
              </div>
              <div className='flex flex-col items-center justify-between px-4 py-2 mt-5 xl:flex-row'>
                <div className='hidden lg:w-1/2 xl:block'>
                  <img
                    src={Code_To_Ace}
                    alt='code 2 ace image'
                    className='hidden w-full lg:block shadow-b-md h-96 '
                  />
                </div>
                <div className='space-y-8 xl:w-3/5'>
                  <div>
                    <p className='mt-3 lg:w-2/3 lg:ml-5 lg:text-lg lg:font-semibold'>
                      Basic coding foundations with interactive projects and
                      game development using Scratch and Python
                    </p>
                  </div>
                  <div className='lg:ml-5'>
                    <h3 className='text-lg font-bold lg:text-2xl'>
                      Code2Ace Program Includes
                    </h3>
                    <div>
                      <ul className='mt-3 ml-8 space-y-2 list-disc lg:text-lg lg:font-semibold '>
                        <li className='ml-5 '>
                          Engaging Projects: Hands-on interactive projects
                          ignite creativity and problem-solving skills.
                        </li>
                        <li className='ml-5 '>
                          Teamwork and Fun: Collaboration, idea-sharing, and new
                          friendships are integral parts of the learning
                          journey.
                        </li>
                        <li className='ml-5 '>
                          Challenges and Rewards: Exceptional performances are
                          recognized and rewarded.
                        </li>
                        <li className='ml-5 '>
                          Expert Guidance: Our friendly mentors, talented in
                          guiding kids step by step, make coding concepts easy
                          to understand, ensuring a fun learning experience.
                        </li>
                      </ul>
                    </div>
                  </div>

                  <button className='bg-[#C4320A] w-full lg:w-32 lg:ml-5 font-medium py-2 text-lg rounded-md mt-3 text-white'>
                    Enroll
                  </button>
                </div>
              </div>
            </div>
          </>
        </div>
      </section>
      <section className='px-4 py-20 md:px-20 xl:px-40 text-[#0B4A6F] bg-gray-50/80'>
        <div className='flex flex-col gap-8 text-left'>
          <h1 className='w-full text-lg font-bold lg:text-4xl xl:w-3/5 md:text-3xl'>
            <span className='block w-full'>
              Why Choose D-Pia Coding Academy?
            </span>
          </h1>
          <div>
            <ul className='space-y-4 xl:w-3/5'>
              <li className='flex items-center gap-4 font-semibold lg:text-xl'>
                <span>
                  <img src={Award} alt='award icon' className='size-8' />
                </span>
                <span>
                  Hands-On Experience: Practical, real-world projects provide a
                  solid foundation.
                </span>
              </li>
              <li className='flex items-center gap-4 font-semibold lg:text-xl'>
                <span>
                  <img src={Award} alt='award icon' className='size-8' />
                </span>
                <span>
                  Collaborative Learning: Teamwork and idea-sharing foster an
                  environment of creativity and camaraderie.
                </span>
              </li>
              <li className='flex items-center gap-4 font-semibold lg:text-xl'>
                <span>
                  <img src={Award} alt='award icon' className='size-8' />
                </span>
                <span>
                  Expert Mentors: Our talented mentors ensure a supportive and
                  enjoyable learning journey.
                </span>
              </li>
              <li className='flex items-center gap-4 font-semibold lg:text-xl'>
                <span>
                  <img src={Award} alt='award icon' className='size-8' />
                </span>
                <span>
                  Internship Opportunities: Code2Earn participants have the
                  chance to gain valuable industry experience.
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className='bg-[#001F6B] text-white py-10 lg:py-20 flex-col flex items-center xl:flex-row md:px-20 justify-between px-4 xl:px-16 w-full rounded-3xl mt-28 space-y-4'>
          <div className='mb-4'>
            <h3 className='text-3xl font-boldtext-left'>
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
  );
}
