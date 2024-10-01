import { useGetMembersQuery } from '@/generated/apolloComponents'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import Footer from '../../../../partials/Footer'
import Loading from '@/partials/Loading'
import Link from 'next/link'

const Member = () => {
  const router = useRouter()
  const [memberData, setMemberData] = useState<any>(null)
  const { id } = router.query
  const { data: graphResponse, loading } = useGetMembersQuery({
    variables: {
      id: String(id),
    },
  })

  useEffect(() => {
    if (graphResponse && graphResponse.getMembers) {
      setMemberData(graphResponse.getMembers) // why? the graph response is state aswell
    }
  }, [graphResponse])

  function createMarkup(text: string) {
    return { __html: text }
  }

  if (loading) return <Loading />

  return (
    <>
      {memberData && (
        <>
          <div className="w-full overflow-hidden min-h-screen">
            <main className="grow">
              <section className="relative bg-[rgba(255,241,217,1)] flex flex-col overflow-hidden">
                <div className="sm:ml-[30px] ml-[10px] flex justify-between z-10 pt-[5px]">
                  <Link
                    href="/"
                    className="block md:text-2xl font-bold text-md"
                  >
                    F.A.M.E
                  </Link>
                  <button
                    onClick={() => {
                      router.back()
                    }}
                    className="block md:text-xl text-md font-bold sm:mr-[20px] pt-[5px]"
                  >
                    <div className="flex justify-between">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
                        />
                      </svg>

                      <p className="mr-[5px]">Meet the others</p>
                    </div>
                  </button>
                </div>

                <div className="absolute -top-28 -translate-x-10">
                  <img
                    src="../../../../../images/clouds.png"
                    className="max-w-[50%]"
                  />
                </div>
                <div className="absolute -right-36 -bottom-36">
                  <img
                    src="../../../../../images/clouds.png"
                    className="max-w-[80%]"
                  />
                </div>
                <div className="absolute -right-96 -top-56">
                  <img
                    src="../../../../../images/clouds.png"
                    className="max-w-[80%]"
                  />
                </div>
                <div className="flex flex-wrap z-10 items-center ml-[22px] mr-[22px] min-[2000px]:ml-[15%] min-[2000px]:mr-[15%] ">
                  <div className="w-full xl:w-6/12 rounded-[100%] float-left items-center">
                    <div className="w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:min-w-[500px] lg:min-h-[500px]  overflow-hidden rounded-[100%] mx-auto min-[1750px]:min-w-[600px] min-[1750px]:min-h-[600px]">
                      <img
                        src={memberData.currentMember.imgUrl}
                        className="shadow align-middle border-none min-w-[300px] min-h-[300px] sm:min-w-[400px] sm:min-h-[400px] lg:min-w-[500px] lg:min-h-[500px] min-[1750px]:min-w-[600px] min-[1750px]:min-h-[600px]"
                      />
                    </div>

                    <p className="text-brandOrange text-3xl font-bold text-center mb-10">
                      #ItMattersWhoYouAre
                    </p>
                  </div>
                  <div className="w-full sm:w-6/12 text-center block mx-auto md:mb-[10px]">
                    <h1 className="text-3xl font-extrabold md:text-4xl">{`${memberData.currentMember.firstName} ${memberData.currentMember.lastName}`}</h1>
                    <h2 className="text-2xl mb-2 md:text-3xl">{`${memberData.currentMember.role}, ${memberData.currentMember.company}`}</h2>
                    <div className="inline-flex">
                      {memberData.currentMember.logos &&
                        memberData.currentMember.logos.map(
                          (logoUrl: string, index: number) => {
                            return (
                              <div
                                className="w-auto h-[80px] mb-2 mr-4 float-left"
                                key={index}
                              >
                                <img className=" h-[70px]" src={logoUrl} />
                              </div>
                            )
                          }
                        )}
                    </div>
                    <div className="mx-auto lg:mt-12 mt-[15px] max-w-[500px] 2xl:max-w-[600px]">
                      <p className="break-normal text-center text-2xl mb-8 2xl:mb-0">
                        {memberData.currentMember.shortDesc}
                      </p>
                    </div>
                  </div>
                </div>
              </section>
              <section className="relative sm:mb-20 overflow-hidden">
                <Link
                  href={`/community/member/${memberData.previousMember.id}/${memberData.previousMember.firstName}_${memberData.previousMember.lastName}`}
                  className="fixed left-0 top-1/2 text-white p-2 cursor-pointer hidden md:block z-20"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="rgba(255,124,92,1)"
                    height="6em"
                    width="6em"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M8 12l6-6v12z" />
                  </svg>
                </Link>

                <a
                  href={`/community/member/${memberData.nextMember.id}/${memberData.nextMember.firstName}_${memberData.nextMember.lastName}`}
                  className="fixed right-0 top-1/2 text-white p-2 cursor-pointer hidden md:block z-20"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="rgba(255,124,92,1)"
                    height="6em"
                    width="6em"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M16 12l-6 6V6z" />
                  </svg>
                </a>

                <div className="max-w-3xl pt-14 sm:mx-auto mx-8">
                  <div
                    className="text-xl whitespace-pre-wrap"
                    dangerouslySetInnerHTML={createMarkup(
                      memberData.currentMember.longDesc
                    )}
                  >
                    {}
                  </div>
                </div>
              </section>
            </main>
          </div>
          <div className="mt-auto">
            <Footer></Footer>
          </div>
        </>
      )}
    </>
  )
}

export default Member
