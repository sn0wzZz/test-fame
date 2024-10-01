import Link from 'next/link'
import React from 'react'

const HeroHome = () => {
  return (
    <section className='relative' data-aos='zoom-y-out'>
      <div className='block md:hidden bg-brandBlue'>
        <img src='../../images/hero-img.png' className='object-fill' />
      </div>
      <div className='flex flex-row items-center justify-between'>
        <div className='z-10 mx-auto md:mx-0 mt-0 md:mt-20 md:-mr-24'>
          <div
            className={`py-10 border-solid border-white inline-flex items-start text-left font-bold px-12 bg-[rgba(253,247,237,1)] rounded-br-[100px] border-[20px]`}
          >
            <div className='relative'>
              <p className='text-black m-0 text-2xl md:text-5xl leading-tight'>
                We aim to build the <br /> leading{' '}
                <span className='text-[rgba(255,124,92,1)]'>
                  female entrepreneurial <br /> community
                </span>{' '}
                <br />
              </p>
            </div>
          </div>
          <div className='px-12'>
            <p className='mb-8'>
              We help women inspire themselves and other women!
            </p>
            <Link legacyBehavior href={'#whoareyou'}>
              <a className='actionButtons'>Be one of us</a>
            </Link>
          </div>
        </div>
        <div className='hidden md:block bg-brandBlue w-4/5'>
          <img
            src='../../images/hero-img.png'
            className='object-fill mx-auto'
          />
        </div>
      </div>
    </section>
  )
}

export default HeroHome
