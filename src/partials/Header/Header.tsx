/* eslint-disable tailwindcss/migration-from-tailwind-2 */
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetTitle,
  SheetTrigger,
} from '@/components/sheet'
import { Menu } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useRef, useState } from 'react'
import { Socials } from '../Footer'

const Header = () => {
  const router = useRouter()
  const [top, setTop] = useState<boolean>(true)
  const logo = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const scrollHandler = () => {
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      window.scrollY > 10 ? setTop(false) : setTop(true)
    }
    window.addEventListener('scroll', scrollHandler)
    return () => window.removeEventListener('scroll', scrollHandler)
  }, [top])

  const menu = [
    { name: 'Home', href: '/', exact: true },
    { name: 'About us', href: '/about' },
    { name: 'Growth Program', href: '/grow' },
    {
      name: 'Community',
      href: '/community/members',
    },
    { name: 'Contact', href: 'mailto:hello@oneoffame.com' },
  ]

  return (
    <>
      <header
        className={`fixed z-30 w-full transition duration-300 h-[64px] ease-in-out bg-opacity-50 md:bg-opacity-10  ${
          !top ? 'bg-white shadow-lg backdrop-blur-md' : ''
        }`}
      >
        <div className="mx-4 md:mx-12 sm:pl-6 mb-10 md:mb-1">
          <div className="flex h-16 md:h-16 items-center justify-start flex-wrap mx-auto">
            <div ref={logo} className="mr-4 shrink-0">
              <Link href="/" legacyBehavior>
                <a
                  className="block text-2xl font-bold"
                  data-aos="zoom-y-out"
                  data-aos-delay="50"
                >
                  F.A.M.E
                </a>
              </Link>
            </div>
            <ul
              style={{
                paddingRight: `${logo?.current?.clientWidth}px`,
              }}
              className="mb-4 hidden md:flex flex-row md:p-0 mt-4 md:order-1 z-10 mx-auto"
            >
              {menu.map((item, i) => {
                return (
                  <li key={item.href + i}>
                    <Link
                      href={item.href}
                      className="block text-md min-[340px]:text-xl font-bold "
                      data-aos="zoom-y-out"
                      data-aos-delay="50"
                    >
                      <div
                        data-aspath={router.asPath}
                        data-selected={
                          item?.exact
                            ? router.asPath == item.href
                            : router.asPath.startsWith(item.href)
                        }
                        className="flex justify-between data-[selected=true]:font-bold data-[selected=true]:text-[#FF7C5C] cursor-pointer"
                      >
                        <p className="mr-[5px] px-5">{item.name}</p>
                      </div>
                    </Link>
                  </li>
                )
              })}
            </ul>
            <Sheet>
              <SheetTrigger className="md:hidden ml-auto">
                <Menu />
              </SheetTrigger>
              <SheetContent
                onOpenAutoFocus={(e) => e.preventDefault()}
                className="bg-white max-w-[450px] w-full flex flex-col"
              >
                <SheetTitle className="text-[24px]">F.A.M.E.</SheetTitle>
                <ul className="flex flex-col mt-[20px] text-[40px]">
                  {menu.map((item, i) => {
                    return (
                      <li key={item.href + i}>
                        <SheetClose>
                          <Link
                            href={item.href}
                            className="block text-md min-[340px]:text-xl font-bold outline-none"
                          >
                            <div
                              data-selected={
                                item?.exact
                                  ? router.asPath == item.href
                                  : router.asPath.startsWith(item.href)
                              }
                              className="flex justify-between data-[selected=true]:font-bold data-[selected=true]:text-[#FF7C5C] cursor-pointer"
                            >
                              <p className="mr-[5px] px-5">{item.name}</p>
                            </div>
                          </Link>
                        </SheetClose>
                      </li>
                    )
                  })}
                </ul>
                <SheetFooter className="mt-auto">
                  <Socials />
                </SheetFooter>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
