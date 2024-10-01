import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import Footer from '@/partials/Footer'
import Header from '@/partials/Header/Header'

import { useEffect, useState } from 'react'
import Marquee from 'react-fast-marquee'
import alumiAvatar from '@/public/grow/alumni-avatar.png'
import Image from 'next/image'
import Link from 'next/link'
import dynamic from 'next/dynamic'


const FAQ = dynamic(() => import('../components/faq'), { ssr: false })



export default function GrowPage() {
  return (
    <div className='flex min-h-screen flex-col overflow-hidden'>
      <Header />
      <main className='grow pt-[64px]'>
        <Hero />
        <GrowSection />
        <WhoSection />
        <GridSection />
        <TimingSection />
        <AlumniSection />
        <OurPartners />
        <FaqSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

const Hero = () => {
  return (
    <header className='md:h-[41.0625rem] max-w-[90rem] w-full mx-auto grid md:grid-cols-2 '>
      <div className='flex flex-col bg-lightOrange md:bg-gradient-to-t from-[#F0CEC2] to-white h-full justify-center items-start relative pl-[2rem] md:pl-[4.25rem] order-2 md:order-1 py-[2rem]'>
        <div className='bg-gradient-to-t from-[#F0CEC2] to-white absolute h-full left-0 translate-x-[-99%] w-[50vw]'></div>
        <h1 className='text-brandOrange text-[2rem] md:text-[2rem] lg:text-[3.75rem] font-bold leading-[140%] '>
          Growth Program for
          <br />
          Women-led
          <br />
          Scale-ups & Next Gen
        </h1>
        <p className='text-textBlack text-[1.25rem] leading-[120%] font-bold mt-[1.12rem]'>
          Nurturing the next successful women entrepreneurs
        </p>
        <a
          href={'https://oneoffame.com/poll/growth-program/'}
          className='border border-brandOrange rounded-full text-[1rem] leading-[120%] px-[2rem] py-[0.44rem] mt-[2rem] bg-brandOrange text-white hover:saturate-150 transition-all w-fit'
        >
          Apply now
        </a>
      </div>
      <div className='flex flex-col h-full w-full bg-gradient-to-t from-[#F0CEC2] to-white relative order-1 md:order-2'>
        <div className='bg-gradient-to-t from-[#F0CEC2] to-white absolute h-full right-0 translate-x-[100%] w-[50vw]'></div>
        <img
          src='/grow/hero_tr.png'
          className='object-contain object-bottom md:object-right-bottom h-full w-full max-h-[41.0625rem]'
        />
      </div>
    </header>
  )
}

const GrowSection = () => {
  const list_of_words = [
    'GROW',
    'CHANGE',
    'LEAD',
    'SCALE',
    'THRIVE',
    'INNOVATE',
    'CONQUER',
    'STRATEGIZE',
  ]
  const [word, setWord] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setWord((ps) => (list_of_words[ps + 1] ? ps + 1 : 0))
    }, 3000)

    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <section className='max-w-[90rem] mx-auto py-[3rem] flex flex-col justify-center items-center relative'>
      <h2 className='text-[2rem] md:text-[3.75rem] font-extrabold mb-[3rem] text-center leading-[110%]'>
        It's time to <br className='md:hidden' />
        <span className='text-brandOrange'>{list_of_words[word]}</span>
      </h2>
      <article className='w-full max-w-[60rem] bg-bgColor flex flex-col px-[2rem] md:px-[5rem] py-[2rem] text-[1rem] space-y-[1.5rem] relative'>
        <img
          src='/grow/flintifliushka-1.png'
          alt='flintiflushka'
          className='absolute left-0 translate-x-[-100%] sm:translate-x-[-40%] 769:translate-x-[-50%] xl:translate-x-[-90%] top-0 translate-y-[-50%] w-[25rem] h-[21rem] object-contain'
        />
        <img
          src='/grow/flintifliushka-2.png'
          alt='flintiflushka'
          className='absolute right-0 translate-x-[100%] sm:translate-x-[20%] 769:translate-x-[70%] translate-y-[-5%] top-0 w-[18rem] h-[31rem] object-contain'
        />
        <p className='text-[1.25rem]'>
          <strong>
            A hands-on program to unlock your leadership and growth potential!
          </strong>
        </p>
        <p>
          Join a tailored program dedicated to supporting female-founded
          scale-ups and the next generation of women in family businesses,
          helping them effectively grow and scale their ventures. The program
          includes a dynamic blend of educational yet practical workshops led by
          strong industry experts and inspirational entrepreneurs, along with
          hands-on assignments for crafting a growth strategy guided by mentors
          from F.A.M.E's network and EY Bulgaria.
        </p>
        <p>
          At the Demo Day, every participant will present their business case
          and program progress to potential investors and business executives,
          seeking valuable feedback and the opportunity for funding and
          additional support.
        </p>
        <p>The program will be held in Bulgarian.</p>
        <a
          href='#who-section'
          className='border border-brandOrange rounded-full text-[1rem] leading-[120%] px-[2rem] py-[0.44rem] mt-[2rem] bg-brandOrange text-white hover:saturate-150 transition-all w-fit'
        >
          Eligibility criteria
        </a>
      </article>
      <footer className='flex items-center md:items-end flex-col md:flex-row justify-center space-x-[0.63rem] pt-[2rem] md:py-[0.5rem]'>
        <p className='text-[1.25rem] md:pb-[2rem]'>Strategic partner</p>
        <img
          src='/grow/partner-1.png'
          alt='partner'
          className='w-[17rem] h-[8.3rem] object-contain'
        />
      </footer>
    </section>
  )
}

const WhoSection = () => {
  const items = [
    'A female founder/co-founder or a woman from the next generation in a family business',
    'A scale-up/ growth company with product market fit and potential for domestic or international growth',
    'Headquartered in Bulgaria and achieved a minimum of EUR 50k in sales in 2023',
  ]

  return (
    <section id='who-section' className='bg-bgColor'>
      <div className='max-w-[90rem] px-[2rem] md:px-0 mx-auto w-full pt-[2rem] md:pt-[3rem] pb-[2rem] md:pb-[3rem] flex flex-col items-center justify-center'>
        <h2 className='text-[2rem] md:text-[3.75rem] font-extrabold leading-[110%] text-center md:leading-normal text-brandOrange'>
          Who are we looking for?
        </h2>
        <div className='grid w-full md:grid-cols-2'>
          <div className='flex flex-col items-center md:items-start relative'>
            <img
              src='/grow/pliokanica-1.png'
              alt='pliokanica'
              className='w-[19.4rem] h-[16.6rem] absolute left-0 translate-x-[-50%] top-0 translate-y-[30%] md:translate-y-[-20%]'
            />
            <img
              src='/grow/1.png'
              className='md:max-w-[34.1875rem] max-h-[32.5rem] object-cover'
            />
          </div>
          <div className='flex flex-col items-center md:items-start justify-center relative'>
            <img
              src='/grow/pliokanica-1.png'
              alt='pliokanica'
              className='w-[19.4rem] h-[16.6rem] absolute right-0 translate-x-[50%] top-0 md:top-[unset] md:bottom-0 translate-y-[-150%] md:translate-y-[0%]'
            />
            <ul className='flex flex-col space-y-[2.20rem] pl-[4rem] md:pl-0'>
              {items?.map((item, i) => (
                <li
                  key={i}
                  className='text-[1.25rem] relative leading-normal max-w-[30rem]'
                >
                  <img
                    src='/grow/check.svg'
                    alt='check'
                    className='absolute left-[-0.75rem] translate-x-[-100%]'
                  />
                  {item}
                </li>
              ))}
            </ul>
            <footer className='flex flex-col max-w-[30rem]'>
              <a
                href={'https://oneoffame.com/poll/growth-program/'}
                className='border border-brandOrange rounded-full text-[1rem] leading-[120%] px-[2rem] py-[0.44rem] mt-[2rem] bg-brandOrange text-white hover:saturate-150 transition-all w-fit ml-auto'
              >
                Apply
              </a>
            </footer>
          </div>
        </div>
      </div>
    </section>
  )
}

const GridSection = () => {
  const sections = [
    {
      src: '/grow/grid-1.png',
      title: 'Clarity & growth mindset',
      desc: 'Challenge you  to think differently about your venture and refine or completely reshape your business strategy for the next significant step.',
      cols: 2,
    },
    {
      src: '/grow/grid-2.png',
      title: 'Knowledge sharing',
      desc: 'Attend  group educational modules covering key business topics that help you build actionable plan to achieve sustainable growth. ',
      cols: 2,
    },
    {
      src: '/grow/grid-3.png',
      title: 'Relevant 1:1 attention ',
      desc: 'Access exclusive 1:1 mentoring sessions with EY consultants and other industry experts to navigate and help you accelerate your journey to market leadership.',
      cols: 2,
    },
    {
      src: '/grow/grid-4.png',
      title: 'Fundraising & access to investors',
      desc: 'Gain valuable guidance on the fundraising process and how to pitch with confidence as a female founder; introductions to financial institutions and investors.',
      cols: 3,
    },
    {
      src: '/grow/grid-5.png',
      title: 'Founder wellness & performance',
      desc: 'Help you as a female founder to unload, break the habits that hold you back and prepare you  for the next level in your journey.',
      cols: 3,
    },
  ]

  return (
    <section className='bg-lightBrown'>
      <div className='max-w-[90rem] mx-auto flex flex-col justify-center items-center py-[2rem] md:py-[3.75rem] md:px-0 px-[2rem]'>
        <h2 className='text-[2rem] md:text-[3.75rem] font-extrabold text-brandOrange text-center leading-[110%] md:leading-normal mb-[2rem] md:mb-[3rem]'>
          What you get..
        </h2>
        <p className='text-[1.25rem] leading-normal text-center'>
          Map your GROWTH journey together with industry experts that will help
          you bring your business on the next level{' '}
        </p>
        <ul className='grid grid-cols-6 items-start gap-y-[3rem] mt-[2.5rem]'>
          {sections?.map((section, i) => (
            <li
              style={{
                gridColumn: `${section.cols} span / ${section.cols} span`,
              }}
              className='flex flex-col text-center justify-center items-center mx-auto max-w-[20.6rem] [@media(max-width:768px)]:!col-span-6'
              key={i}
            >
              <img
                src={section.src}
                alt={section.title}
                className='w-[8rem] h-[8rem] object-cover'
              />
              <h3 className='text-[1.5625rem] font-bold leading-normal'>
                {section.title}
              </h3>
              <p className='text-[0.9375rem] mt-[1rem]'>{section.desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

const TimingSection = () => {
  return (
    <section className=''>
      <div className='max-w-[90rem] mx-auto flex flex-col justify-center items-center py-[2rem] md:py-[3.75rem] md:px-0 px-[2rem]'>
        <h2 className='text-[2rem] md:text-[3.75rem] font-extrabold text-brandOrange text-center leading-[110%] md:leading-normal md:mb-[3rem]'>
          Timing
        </h2>
        <img
          src='/grow/timing-desktop.svg'
          alt='timeline'
          className='md:block hidden'
        />
        <img
          src='/grow/timing-mobile.svg'
          alt='timeline'
          className='block md:hidden'
        />
        <p className='text-center'>
          Safe place to share.
          <br /> Limited access. Rigorous cohort selection. From all over the
          country.
        </p>
      </div>
    </section>
  )
}

const AlumniSection = () => {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  // const [membersData, setMembersData] = useState<Members>([])
  //   const { data: graphResponse, loading } = useGetAllMembersQuery({
  //     variables: {
  //       slug: String(communitySlug),
  //     },
  //   })

  // useEffect(() => {
  //   if (graphResponse && graphResponse.getAllMembers) {
  //     setMembersData(randomizeMembersResult(graphResponse.getAllMembers))
  //   }
  // }, [graphResponse])

  const alumiContent = [
    {
      avatar: alumiAvatar,
      name: 'Kimberly Abbott',
      position: 'Founder & CEO VestedImpact',
      companyLink: 'https://google.com',
      communityLink: 'someLink',
      message:
        'I had never met investors who not only truly "got" imoact, but ware as genuinely commited to it as the Impact Shakers team, From the terms in our formalagreement to the conversations , it\'s just so refreshing to have investors who are challenging you to grow a business, but even more so, to grow your impact to the best and biggest it can be',
    },
    {
      avatar: alumiAvatar,
      name: 'Kimberly Abbott',
      position: 'Founder & CEO VestedImpact',
      companyLink: '',
      message:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore minima aliquam veritatis dignissimos ullam, aspernatur obcaecati, deleniti sapiente repellat dolor fugiat optio numquam? Blanditiis, repellendus.',
    },
    {
      avatar: alumiAvatar,
      name: 'Kimberly Abbott',
      position: 'Founder & CEO VestedImpact',
      companyLink: '',
      message:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore minima aliquam veritatis dignissimos ullam, aspernatur obcaecati, deleniti sapiente repellat dolor fugiat optio numquam? Blanditiis, repellendus.',
    },
    {
      avatar: alumiAvatar,
      name: 'Kimberly Abbott',
      position: 'Founder & CEO VestedImpact',
      companyLink: '',
      message:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore minima aliquam veritatis dignissimos ullam, aspernatur obcaecati, deleniti sapiente repellat dolor fugiat optio numquam? Blanditiis, repellendus.',
    },
    {
      avatar: alumiAvatar,
      name: 'Kimberly Abbott',
      position: 'Founder & CEO VestedImpact',
      companyLink: '',
      message:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore minima aliquam veritatis dignissimos ullam, aspernatur obcaecati, deleniti sapiente repellat dolor fugiat optio numquam? Blanditiis, repellendus.',
    },
    {
      avatar: alumiAvatar,
      name: 'Kimberly Abbott',
      position: 'Founder & CEO VestedImpact',
      companyLink: '',
      message:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore minima aliquam veritatis dignissimos ullam, aspernatur obcaecati, deleniti sapiente repellat dolor fugiat optio numquam? Blanditiis, repellendus.',
    },
    {
      avatar: alumiAvatar,
      name: 'Kimberly Abbott',
      position: 'Founder & CEO VestedImpact',
      companyLink: '',
      message:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore minima aliquam veritatis dignissimos ullam, aspernatur obcaecati, deleniti sapiente repellat dolor fugiat optio numquam? Blanditiis, repellendus.',
    },
    {
      avatar: alumiAvatar,
      name: 'Kimberly Abbott',
      position: 'Founder & CEO VestedImpact',
      companyLink: '',
      message:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore minima aliquam veritatis dignissimos ullam, aspernatur obcaecati, deleniti sapiente repellat dolor fugiat optio numquam? Blanditiis, repellendus.',
    },
    {
      avatar: alumiAvatar,
      name: 'Kimberly Abbott',
      position: 'Founder & CEO VestedImpact',
      companyLink: '',
      message:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore minima aliquam veritatis dignissimos ullam, aspernatur obcaecati, deleniti sapiente repellat dolor fugiat optio numquam? Blanditiis, repellendus.',
    },
    {
      avatar: alumiAvatar,
      name: 'Kimberly Abbott',
      position: 'Founder & CEO VestedImpact',
      companyLink: '',
      message:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore minima aliquam veritatis dignissimos ullam, aspernatur obcaecati, deleniti sapiente repellat dolor fugiat optio numquam? Blanditiis, repellendus.',
    },
    {
      avatar: alumiAvatar,
      name: 'Kimberly Abbott',
      position: 'Founder & CEO VestedImpact',
      companyLink: '',
      message:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore minima aliquam veritatis dignissimos ullam, aspernatur obcaecati, deleniti sapiente repellat dolor fugiat optio numquam? Blanditiis, repellendus.',
    },
    {
      avatar: alumiAvatar,
      name: 'Kimberly Abbott',
      position: 'Founder & CEO VestedImpact',
      companyLink: '',
      message:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore minima aliquam veritatis dignissimos ullam, aspernatur obcaecati, deleniti sapiente repellat dolor fugiat optio numquam? Blanditiis, repellendus.',
    },
  ]

  return (
    <section className=''>
      <div className='max-w-[90rem] w-full mx-auto flex flex-col gap-4 justify-center items-center py-[2rem] md:py-[3.75rem] px-4 md:px-8 lg:px-0 relative'>
        <img
          src='/grow/flintifliushka-1.png'
          alt='flintiflushka'
          className='hidden md:block absolute left-0 translate-x-[-100%] sm:translate-x-[-40%] md:translate-x-[-50%] xl:translate-x-[20%] top-0 translate-y-[80%] w-[15rem] md:w-[25rem] h-auto object-contain'
        />
        <img
          src='/grow/flintifliushka-2.png'
          alt='flintiflushka'
          className='hidden md:block absolute right-0 translate-x-[100%] sm:translate-x-[20%] md:translate-x-[70%] xl:translate-x-0 translate-y-[90%] top-0 w-[12rem] md:w-[18rem] h-auto object-contain'
        />
        <h2 className='text-[2rem] md:text-[3rem] lg:text-[3.75rem] font-extrabold text-brandOrange text-center leading-[110%] md:leading-normal'>
          Meet our Alumni
        </h2>
        <p className='text-base md:text-[1.25rem] leading-normal text-center '>
          Our first cohort has been integral to the success of the first edition
          of F.A.M.E Growth Program.
        </p>
        <img
          src='/grow/alumni.png'
          alt='alumni'
          className='block w-full max-w-[600px] h-auto'
        />

        <Carousel setApi={setApi} className='w-full max-w-[650px]'>
          <CarouselContent>
            {alumiContent.map((alumi, index) => (
              <CarouselItem key={index}>
                <div className='flex flex-col items-center md:h-[390px] w-full px-4 md:px-0'>
                  <Image
                    src={alumi.avatar}
                    alt={alumi.name}
                    className='rounded-full border-[3px] border-orange-300 w-[80px] md:w-[120px] translate-y-6 md:translate-y-8'
                  />
                  <div className='bg-[rgba(255,241,217,1)] p-4 rounded-2xl mx-2 md:mx-10 flex-grow flex flex-col'>
                    <div className='flex flex-col items-center justify-between p-4 md:p-6 h-full'>
                      <p className='font-light text-center text-sm md:text-base flex-grow'>
                        "{alumi.message}"
                      </p>
                      <div className='flex flex-col items-center mt-4'>
                        {alumi.communityLink ? (
                          <Link
                            href={alumi.communityLink}
                            target='_self'
                            className='font-bold text-orange-300 text-sm md:text-base'
                          >
                            <span>{alumi.name}</span>
                          </Link>
                        ) : (
                          <span className='font-bold text-orange-300 text-sm md:text-base'>
                            {alumi.name}
                          </span>
                        )}
                        {alumi.companyLink ? (
                          <Link
                            href={alumi.companyLink}
                            target='_blank'
                            className='text-xs md:text-sm'
                          >
                            <span>{alumi.position}</span>
                          </Link>
                        ) : (
                          <span className='text-xs md:text-sm'>
                            {alumi.position}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className='text-brandOrange hover:text-brandOrange/80 hover:bg-transparent translate-y-4 hidden md:flex' />
          <CarouselNext className='text-brandOrange hover:text-brandOrange/80 hover:bg-transparent translate-y-4 hidden md:flex' />
        </Carousel>
      </div>
    </section>
  )
}

const OurPartners = () => {
  const images = [
    '/grow/partner-1.png',
    '/grow/partner-2.png',
    '/grow/partner-3.png',
    '/grow/partner-4.png',
    '/grow/partner-5.png',
    '/grow/partner-6.png',
    '/grow/partner-7.png',
  ]

  return (
    <section className='bg-bgColor'>
      <div className='max-w-[90rem] mx-auto flex flex-col justify-center items-center py-[2rem] md:py-[3.75rem] md:px-0 px-[2rem]'>
        <h2 className='text-[2rem] md:text-[3.75rem] font-extrabold text-brandOrange text-center'>
          Our partners
        </h2>
        <p className='md:text-[1.625rem] mt-[0.69rem] text-center'>
          The program is made possible by the support of our amazing partners:
        </p>
      </div>
      <Marquee>
        {images?.map((image, i) => (
          <img
            key={i}
            src={image}
            alt={`partner-${i}`}
            className='max-h-[10rem] px-[1rem]'
          />
        ))}
      </Marquee>
    </section>
  )
}

const FaqSection = () => {
  const qa = [
    {
      q: 'Who can apply?',
      a: 'If you are a female founder/co-founder or a woman from the next generation in a family business, you are the right fit for us. We are looking for growth-stage companies that have found product-market fit and are at an inflection point of growth. Minimum revenue requirement of EUR 50k for 2023.',
    },
    {
      q: 'I don’t have a woman as a co-founder, can I also apply?',
      a: 'Our mission is to exponentially advance women in the entrepreneurial ecosystem both as recipients and allocators of capital. To be able to join our growth program, you must meet the criteria.',
    },
    {
      q: 'How does the application process work?',
      a: 'You can apply by submitting your application [here](https://oneoffame.com/poll/growth-program/).\n\nProviding detailed responses in your application will greatly assist us in evaluating your company thoroughly. When you submit your application, in case we have some additional questions, we will reach out to you to make sure the program is a fit for you. \n\nPlease note, our selection process is highly competitive, involving a thorough assessment of applications based on key factors. Shortlisted candidates will proceed to an interview stage.',
    },
    {
      q: 'What`s the format of the program?',
      a: 'The program is a dynamic blend of educational yet practical workshops led by strong industry experts and inspirational entrepreneurs, mentoring sessions, and a hands-on assignment for crafting a growth strategy.\n\nAt the Demo Day, every participant will present their business case and program progress to potential investors and business executives, seeking valuable feedback and the opportunity for funding and additional support.\n\nThe program will be held in Bulgarian.',
    },
    {
      q: 'Who is your strategic partner EY (Ernst& Young)?',
      a: 'We are proud to have a strategic partnership with [EY (Ernst & Young) Bulgaria](https://www.ey.com/bg_bg), a global leader in assurance, tax, transaction, and advisory services. \n\nOur collaboration with EY will provide you with invaluable expertise through tailored workshops, personalized mentoring sessions, and access to resources and strategic support.',
    },
    {
      q: 'What is the time commitment?',
      a: 'You will meet once a week for two-hour group sessions over the 11-week program. Full participation in group workshops, mentoring sessions, social activities, and networking events is highly recommended, with an average weekly time commitment ranging from 2 to 4 hours.',
    },
    {
      q: 'What is the cost for participation?',
      a: 'For the first year, the program is offered at no cost as part of our commitment to supporting and empowering women entrepreneurs.',
    },
    {
      q: 'Should participants be in a specific sector?',
      a: 'We welcome participants from all sectors - we are sector-agnostic and encourage a diverse range of backgrounds and industries.',
    },
  ]

  return (
    <section className='bg-bgColor'>
      <div className='max-w-[90rem] mx-auto flex flex-col justify-center items-center py-[2rem] md:py-[3.75rem]'>
        <h2 className='text-[2rem] md:text-[3.75rem] text-brandOrange font-extrabold'>
          FAQs
        </h2>
        <FAQ qa={qa} />
      </div>
    </section>
  )
}

const ContactSection = () => {
  return (
    <section className='bg-lightBrown overflow-hidden pb-[4rem]'>
      <div className='max-w-[90rem] mx-auto flex flex-col justify-center items-center py-[3.75rem] relative'>
        <h2 className='text-[2rem] md:text-[3.75rem] font-extrabold text-brandOrange'>
          Get in Touch
        </h2>
        <a
          className='text-[1.875rem] cursor-pointer hover:underline'
          href='mailto:hello@oneoffame.com'
        >
          hello@oneoffame.com
        </a>
        <img
          src='/grow/pliokanica-1.png'
          alt='pliokanica'
          className='w-[19.4rem] h-[16.6rem] absolute left-0 translate-x-[-0%] top-0 translate-y-[1%] hidden md:block'
        />
        <img
          src='/grow/pliokanica-1.png'
          alt='pliokanica'
          className='w-[19.4rem] h-[16.6rem] absolute right-0 translate-x-[0%] bottom-0 translate-y-[20%] hidden md:block'
        />
      </div>
    </section>
  )
}
