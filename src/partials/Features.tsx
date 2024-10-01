import {
  SubscribeEmailMutationVariables,
  useSubscribeEmailMutation,
} from "@/generated/apolloComponents";
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const Features = () => {
  const [currentTab, setCurrentTab] = useState<String>("founder");

  const { register, handleSubmit } = useForm<SubscribeEmailMutationVariables>();
  const [subscribeEmail] = useSubscribeEmailMutation();
  const [isCompleated, setIsCompleated] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  const onSubmit = (data: SubscribeEmailMutationVariables) => {
    subscribeEmail({
      variables: {
        ...data,
      },
      onCompleted: () => {
        setIsError(false);
        setIsCompleated(true);
      },
      onError: () => {
        setIsCompleated(false);
        setIsError(true);
      },
    });
  };

  const renderTabs = (currentTab: String) => {
    switch (currentTab) {
      case "founder":
        return (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2  items-center z-10">
              <img
                src="../../images/founder.png"
                className="w-4/5 mx-auto z-10"
              />
              <div>
                <div className="mb-8">
                  <p className="text-3xl font-bold  w-full">
                    Are you a Founder?
                  </p>
                  <div className="text-md">
                    <ul className="founderList leading-6">
                      <li>
                        You are an <strong>entrepreneur</strong> building her
                        own business or a <strong>partner</strong> in one?
                      </li>
                      <li>
                        You are looking for <strong>financing</strong>?
                      </li>
                      <li>
                        You need help with your{" "}
                        <strong>
                          pitch deck, business plan and financials
                        </strong>
                        ?
                      </li>
                      <li>
                        You need access to a <strong>mentor</strong> to guide you?
                      </li>
                      <li>
                        You want to build up your{" "}
                        <strong>personal, professional and social</strong>{" "}
                        network?
                      </li>
                    </ul>
                  </div>
                </div>
                <Link legacyBehavior href="/poll/join-f.a.m.e-as-a-founder">
                  <a className="actionButtons">
                    Join as a Founder
                  </a>
                </Link>
              </div>
            </div>
          </>
        );
      case "angel":
        return (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 items-center z-10">
              <img
                src="../../images/angel.png"
                className="w-4/5 mx-auto z-10"
              />
              <div>
                <div className="mb-8">
                  <p className="text-3xl font-bold  w-full">
                    Are you an Angel Investor?
                  </p>
                  <div className="text-md">
                    <ul className="angelList leading-6">
                      <li>
                        You want to support the local ecosystem by <strong>investing in
                        companies</strong>?
                      </li>
                      <li>You are interested in <strong>narrowing the funding gap</strong>?</li>
                      <li>You find difficulties with generating <strong>deal leads</strong>?</li>
                      <li>
                        You need help with the <strong>due diligence</strong> and <strong>investment
                        process</strong>?
                      </li>
                      <li>
                        You want to learn more about <strong>angel investing</strong> and other
                        types of investment?
                      </li>
                    </ul>
                  </div>
                </div>
                <Link  legacyBehavior href="/poll/join-f.a.m.e-as-an-angel">
                  <a className="actionButtons">
                    Join as an Angel
                  </a>
                </Link>
              </div>
            </div>
          </>
        );
      case "mentor":
        return (
          <>
            <div className='grid grid-cols-1 md:grid-cols-2 items-center z-10'>
              <img
                src='../../images/mentor.png'
                className='w-4/5 mx-auto z-10'
              />
              <div>
                <div className='mb-8'>
                  <p className='text-3xl font-bold  w-full'>
                    Are you a Mentor?
                  </p>
                  <div className='text-md'>
                    <ul className='mentorList leading-6'>
                      <li>
                        You are a <strong>professional</strong> looking to
                        support women entrepreneurs?
                      </li>
                      <li>
                        You want to <strong>mentor</strong> growing companies
                        and be on <strong>advisory boards</strong>?
                      </li>
                      <li>
                        You are eager to share your{' '}
                        <strong>successes and failures</strong>?
                      </li>
                      <li>
                        You are willing to contribute with your{' '}
                        <strong>field-specific expertise</strong>?
                      </li>
                      <li>
                        You want to develop your own personal{' '}
                        <strong> leadership</strong> and{' '}
                        <strong>coaching</strong> styles?
                      </li>
                    </ul>
                  </div>
                </div>
                <Link legacyBehavior href='/poll/join-f.a.m.e-as-a-mentor'>
                  <a className='actionButtons'>Join as a Mentor</a>
                </Link>
              </div>
            </div>
          </>
        )
      case "explorer":
        return (
          <>
            <div className='grid grid-cols-1 md:grid-cols-2 items-center z-10'>
              <img
                src='../../images/explorer.png'
                className='w-4/5 mx-auto z-10'
              />
              <div>
                <div className='mb-8'>
                  <p className='text-3xl font-bold  w-full'>
                    Are you an Explorer?
                  </p>
                  <div className='text-md'>
                    <ul className='explorerList leading-6'>
                      <li>
                        You want to learn more about{' '}
                        <strong>female entrepreneurship</strong>?
                      </li>
                      <li>
                        You may be wondering about your{' '}
                        <strong>next steps</strong> or you just need{' '}
                        <strong>inspiration</strong>?
                      </li>
                      <li>
                        You are a part of a{' '}
                        <strong>corporation, instituition or VC</strong>{' '}
                        supporting female founders?
                      </li>
                      <li>
                        You are a <strong>media</strong> interested in this
                        topic?
                      </li>
                      <li>
                        You want to make an <strong>impact</strong> and be a
                        part of a <strong>strong community</strong>?
                      </li>
                    </ul>
                  </div>
                </div>
                <Link legacyBehavior href='/poll/join-f.a.m.e-as-an-explorer'>
                  <a className='actionButtons'>Join as an Explorer</a>
                </Link>
              </div>
            </div>
          </>
        )
      default:
        return <></>;
    }
  };
  return (
    <>
      <section className='relative bg-lightOrange flex mt-4 flex-col items-center justify-center'>
        <svg
          width='100%'
          height='100%'
          preserveAspectRatio='none'
          viewBox='0 0 1918 47'
          fill='none'
          className='mb-8'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M1830.52 34.7671C1864.98 32.0773 1918 20.6027 1918 20.6027V0H0.00012207V47C0.00012207 47 199.845 15.7622 328.355 20.6027C388.209 22.8572 421.318 31.8696 481.148 34.7671C606.549 40.8401 676.809 17.9488 802.312 20.6027C887.159 22.3969 934.374 32.8647 1019.22 34.7671C1148.46 37.6651 1221 11.221 1349.97 20.6027C1397.87 24.0872 1424.23 32.8455 1472.2 34.7671C1545.58 37.7057 1586.33 20.0609 1659.75 20.6027C1726.64 21.0964 1763.81 39.9747 1830.52 34.7671Z'
            fill='white'
          />
        </svg>

        <div className='text-center text-3xl leading-tight mb-8'>
          <p className='font-extrabold'>
            Who are we?
            <br />
            <span className='text-lightGray font-medium'>
              It matters who you are.{' '}
            </span>
          </p>
        </div>

        <div>
          <div className='quoteBox -ml-36'></div>
          <div className='quote relative bg-brandSolidOrange mx-12 px-12 md:px-48 py-1 mb-8 text-white text-2xl rounded-tl-full rounded-br-full items-center flex z-10 justify-between'>
            <span className='font-extrabold pr-4 md:pr-12 text-xl md:text-3xl'>
              “F.A.M.E.”
            </span>{' '}
            <span className='text-xxs md:text-sm'>
              <strong>
                the state of being known for doing something important
              </strong>
            </span>
          </div>
        </div>
        <div className='w-3/4 md:w-2/5 text-sm'>
          <p>
            We build a new entrepreneurial space for female <strong>F</strong>
            ounders, <strong>A</strong>ngel investors, <strong>M</strong>entors
            and <strong>E</strong>xplorers (<strong>F.A.M.E</strong>) by
            celebrating, supporting and encouraging the next creators of
            tomorrow.
            <br />
            <br /> Here, we want to bring together women entrepreneurs, female
            investors, successful businesswomen, inspirational role models, and
            like-minded yet diverse individuals all interested in developing and
            supporting female entrepreneurship.
            <br />
            <br /> We belive that every one of you is important and can do
            something that is important. So, let`s do it together.
          </p>
        </div>
        <svg
          width='100%'
          height='100%'
          preserveAspectRatio='none'
          viewBox='0 0 1918 51'
          className='mt-8'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M1830.52 13.274C1864.98 16.1927 1918 28.6438 1918 28.6438V51H0.00012207V0C0.00012207 0 199.845 33.8963 328.355 28.6438C388.209 26.1975 421.318 16.4181 481.148 13.274C606.549 6.68415 676.809 31.5236 802.312 28.6438C887.159 26.697 934.374 15.3383 1019.22 13.274C1148.46 10.1294 1221 38.824 1349.97 28.6438C1397.87 24.8628 1424.23 15.3591 1472.2 13.274C1545.58 10.0853 1586.33 29.2318 1659.75 28.6438C1726.64 28.1082 1763.81 7.62324 1830.52 13.274Z'
            fill='white'
          />
        </svg>
      </section>
      <div className='gradBg' id='whoareyou'>
        <section className='relative mt-12  hidden md:block'>
          <div className='relative mx-auto max-w-6xl px-4 sm:px-6'>
            <div className='text-center text-3xl leading-tight mb-8'>
              <p className='font-extrabold'>
                Who are you? <br />
                <span className='text-lightGray font-medium'>
                  You are your own unique story.
                </span>
              </p>
            </div>
            <div className='grid grid-cols-4 gap-4 md:grid-cols-8 justify-center items-center x-12 z-20'>
              <button
                className={`px-12 py-2 hover:bg-black hover:text-white transition duration-150 ease-in-out rounded-tl-full rounded-br-full  col-span-2 ${
                  currentTab === 'founder' && 'bg-black text-white'
                }`}
                onClick={() => setCurrentTab('founder')}
              >
                Founder
              </button>
              <button
                className={`px-12 py-2 hover:bg-black hover:text-white transition duration-150 ease-in-out rounded-tl-full rounded-br-full  col-span-2 ${
                  currentTab === 'angel' && 'bg-black text-white'
                }`}
                onClick={() => setCurrentTab('angel')}
              >
                Angel
              </button>
              <button
                className={`px-12 py-2 hover:bg-black hover:text-white transition duration-150 ease-in-out rounded-tl-full rounded-br-full  col-span-2 ${
                  currentTab === 'mentor' && 'bg-black text-white'
                }`}
                onClick={() => setCurrentTab('mentor')}
              >
                Mentor
              </button>
              <button
                className={`px-12 py-2 hover:bg-black hover:text-white transition duration-150 ease-in-out rounded-tl-full rounded-br-full  col-span-2 ${
                  currentTab === 'explorer' && 'bg-black text-white'
                }`}
                onClick={() => setCurrentTab('explorer')}
              >
                Explorer
              </button>
            </div>
            <div className='typeImage z-0'></div>
            {renderTabs(currentTab)}
          </div>
        </section>
        <div className='grid md:hidden mx-auto max-w-sm items-start gap-6 md:max-w-2xl md:grid-cols-2 lg:max-w-none lg:grid-cols-8'>
          <div
            className='relative flex flex-col items-center rounded bg-white p-6 shadow-xl col-span-4 aos-init aos-animate'
            data-aos='zoom-y-out'
            data-aos-delay='600'
          >
            <img src='../images/founder.png' className='-mt-1 mb-2 w-4/5' />
            <h4 className='mb-1 text-xl font-bold leading-snug tracking-tight'>
              Are you a Founder?
            </h4>
            <div className='text-center text-gray-600 mb-4'>
              <ul className='founderList text-left leading-6'>
                <li>Have your own business?</li>
                <li>Looking for financing?</li>
                <li>Help with pitch deck/business plan/financials?</li>
                <li>Need coach or a mentor?</li>
                <li>Expand your professional network?</li>
              </ul>
            </div>
            <Link legacyBehavior href='/poll/join-f.a.m.e-as-a-founder'>
              <a className='px-4 mt-4 py-2 border rounded-full bg-brandOrange text-white hover:bg-white hover:border-brandOrange hover:text-brandOrange transition duration-150 ease-in-out'>
                Join as a Founder
              </a>
            </Link>
          </div>
          <div
            className='relative flex flex-col items-center rounded bg-white p-6 shadow-xl col-span-4 aos-init aos-animate'
            data-aos='zoom-y-out'
            data-aos-delay='650'
          >
            <img src='../images/angel.png' className='-mt-1 mb-2 w-4/5' />
            <h4 className='mb-1 text-xl font-bold leading-snug tracking-tight'>
              Are you an Angel Investor?
            </h4>
            <div className='text-center text-gray-600 mb-4'>
              <ul className='angelList leading-6 text-left'>
                <li>Invest in local companies?</li>
                <li>Narrow the funding gap?</li>
                <li>Have difficulties with generating deal leads?</li>
                <li>Need help with the investment process?</li>
                <li>Learn more about angel investing/other types?</li>
              </ul>
            </div>
            <Link legacyBehavior href='/poll/join-f.a.m.e-as-an-angel'>
              <a className='px-4 mt-4 py-2 border rounded-full bg-brandOrange text-white hover:bg-white hover:border-brandOrange hover:text-brandOrange transition duration-150 ease-in-out'>
                Join as an Angel
              </a>
            </Link>
          </div>
          <div
            className='relative flex flex-col items-center rounded bg-white p-6 shadow-xl col-span-4 aos-init'
            data-aos='zoom-y-out'
            data-aos-delay='700'
          >
            <img src='../images/mentor.png' className='-mt-1 mb-2 w-4/5' />
            <h4 className='mb-1 text-xl font-bold leading-snug tracking-tight'>
              Are you a Mentor?
            </h4>
            <div className='text-center text-gray-600 mb-4'>
              <ul className='mentorList text-left leading-6 '>
                <li>Support women entrepreneurs?</li>
                <li>Advice growing companies?</li>
                <li>Share successes/failures with women fellows?</li>
                <li>Contribute field-specific expertise?</li>
                <li>Develop personal leadership/coaching styles?</li>
              </ul>
            </div>
            <Link legacyBehavior href='/poll/join-f.a.m.e-as-a-mentor'>
              <a className='px-4 mt-4 py-2 border rounded-full bg-brandOrange text-white hover:bg-white hover:border-brandOrange hover:text-brandOrange transition duration-150 ease-in-out'>
                Join as a Mentor
              </a>
            </Link>
          </div>
          <div
            className='relative flex flex-col items-center rounded bg-white p-6 shadow-xl col-span-4 aos-init'
            data-aos='zoom-y-out'
            data-aos-delay='750'
          >
            <img src='../images/explorer.png' className='-mt-1 mb-2 w-4/5' />
            <h4 className='mb-1 text-xl font-bold leading-snug tracking-tight'>
              Are you an Explorer?
            </h4>
            <div className='text-center text-gray-600 mb-4'>
              <ul className='explorerList text-left leading-6'>
                <li>Learn about female entrepreneurship?</li>
                <li>Need inspiration/ next steps?</li>
                <li>Corporation/VC supporting female founders?</li>
                <li>Media interested in this topic?</li>
                <li>Make an impact as part of a community?</li>
              </ul>
            </div>
            <Link legacyBehavior href='/poll/join-f.a.m.e-as-an-explorer'>
              <a className='px-4 mt-4 py-2 border rounded-full bg-brandOrange text-white hover:bg-white hover:border-brandOrange hover:text-brandOrange transition duration-150 ease-in-out'>
                Join as an Explorer
              </a>
            </Link>
          </div>
        </div>
        <section className='relative mx-2 md:mx-12 mt-56 pb-24'>
          <div className='mx-auto max-w-3xl pr-4 pl-4 pb-4 pt-4 mt-24 bg-black'>
            <div className='news flex justify-end mr-16'></div>
            <div className='overflow-hidden bg-lightBrown -ml-8  -mt-8 py-10 px-8  md:py-16 rounded-br-[60px] md:rounded-br-[110px]'>
              <div className='relative flex flex-col items-center justify-between lg:flex-row'>
                <div className='text-center lg:text-left'>
                  <p className='mb-4 font-medium'>WE’RE HERE FOR YOU</p>
                  <h3 className='h3 mb-2 text-black font-black'>
                    Want to talk about great things?
                  </h3>
                  <p className='mb-6 text-lg text-black'>
                    Leave your email and we’ll contact you.
                  </p>
                  <form
                    className='w-full flex flex-col'
                    onSubmit={handleSubmit(onSubmit)}
                  >
                    {isCompleated && (
                      <>
                        <div className='bg-green-500 py-2 px-4 rounded mb-2 text-white text-sm'>
                          <span className='font-bold'>Thank you.</span> Your
                          newsletter subscription has been confirmed.
                        </div>
                      </>
                    )}
                    {isError && (
                      <>
                        <div className='bg-red-500 py-2 px-4 rounded mb-2 text-white text-sm'>
                          <span className='font-bold'>ATTENTION!</span> You have
                          already subscribed.
                        </div>
                      </>
                    )}
                    <input
                      type='email'
                      {...register('email', { required: true })}
                      className='form-input mb-4 w-full appearance-none rounded-sm border border-gray-700 bg-gray-800 px-4 py-2 text-gray-900 placeholder:text-gray-500 focus:border-gray-600 sm:mb-0 sm:mr-2'
                      placeholder='ENTER EMAIL ADDRESS'
                      aria-label='Your email…'
                    />
                    <div>
                      <button type='submit' className='actionButtons'>
                        Let's talk
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
};

export default Features;
