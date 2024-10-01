import { FC, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Pagination from '@/partials/Pagination'
import InnerLoading from '@/partials/InnerLoading'
import { useGetAllMembersQuery } from '@/generated/apolloComponents'
import { Member, Members } from 'utils/types'
import Footer from '@/partials/Footer'
import Header from '@/partials/Header/Header'

const CommunityMembers: FC = () => {
  const router = useRouter()
  const { communitySlug } = router.query
  const [currentPage, setCurrentPage] = useState(1)
  const [currentProfiles, setCurrentProfiles] = useState<Members>([])
  const [membersData, setMembersData] = useState<Members>([])
  const [profilesPerPage] = useState(20)

  const { data: graphResponse, loading } = useGetAllMembersQuery({
    variables: {
      slug: String(communitySlug),
    },
  })

  const previousPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  const nextPage = () => {
    if (currentPage !== Math.ceil(membersData.length / profilesPerPage)) {
      setCurrentPage(currentPage + 1)
    }
  }

  const handlePageChange = (selected: number) => {
    if (selected !== currentPage) {
      setCurrentPage(selected)
    }
  }

  const randomizeMembersResult = (array: Members) => {
    const arrayToShuffle = [...array]
    for (let i = arrayToShuffle.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      const temp = arrayToShuffle[i]
      arrayToShuffle[i] = arrayToShuffle[j] as Member
      arrayToShuffle[j] = temp as Member
    }
    return arrayToShuffle
  }

  useEffect(() => {
    if (graphResponse && graphResponse.getAllMembers) {
      setMembersData(randomizeMembersResult(graphResponse.getAllMembers))
    }
  }, [graphResponse])

  useEffect(() => {
    if (membersData) {
      const indexOfLastPost = currentPage * profilesPerPage
      const indexOfFirstPost = indexOfLastPost - profilesPerPage
      const currentData = membersData.slice(indexOfFirstPost, indexOfLastPost)
      setCurrentProfiles(currentData)
    }
  }, [currentPage, membersData, profilesPerPage])

  return (
    <div className="flex min-h-screen flex-col overflow-hidden">
      <Header />
      <main className="grow ">
        <div className="w-full overflow-hidden">
          <main className="grow">
            <section className="relative pt-28 pb-24 bg-[rgba(255,241,217,1)] flex flex-col items-center justify-center text-center overflow-hidden">
              <div className="absolute -left-10 -top-28 -translate-x-10">
                <img src="../../../images/clouds.png" className="max-w-[50%]" />
              </div>
              <div className="absolute -left-20 -bottom-10 -translate-x-10 z-10">
                <img
                  src="../../../images/capa_11.png"
                  className="lg:max-w-[70%] md:max-w-[60%] max-w-[55%]"
                />
              </div>
              <div className="absolute -right-96 -bottom-56">
                <img src="../../../images/clouds.png" className="max-w-[80%]" />
              </div>
              <div className="mb-10 z-10">
                <h1 className="xl:text-4xl lg:text-4xl text-3xl text-center font-extrabold mx-auto sm:mx-0">
                  The #OneOfFame{' '}
                  <span className="text-[rgba(255,124,92,1)]">Community</span>{' '}
                </h1>
                <p className="text-2xl max-w-[800px] 2xl:max-w-[100%] mx-10">
                  Meet some of our inspiring and empowered female members
                  passionate about creating things that matter.
                </p>
              </div>

              <a
                href={'/#whoareyou'}
                className="z-10 px-4 mt-6 py-2 border rounded-full bg-brandOrange text-white hover:bg-transparent hover:text-black hover:border-brandOrange transition duration-150 ease-in-out text-2xl"
              >
                Be one of us
              </a>
            </section>
            <section className="container mx-auto overflow-hidden max-w-[95%]">
              {loading && (
                <div className="items-center mt-20">
                  <InnerLoading />{' '}
                </div>
              )}
              <div className="mx-auto mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-5 justify-center items-center x-12 z-20 container">
                {membersData &&
                  currentProfiles &&
                  currentProfiles.map((profile: Member, index: number) => {
                    return (
                      <Link
                        href={`member/${profile.id}/${profile.firstName}_${profile.lastName}`}
                        key={index}
                      >
                        <div className="sm:mb-8 border-b border-gray-100 pb-2 cursor-pointer flex flex-col">
                          <div className="rounded-md h-[160px] w-full min-[480px]:h-[250px] sm:h-[270px] overflow-hidden scale-90 hover:scale-105 ease-inborder-gray-100">
                            <img
                              src={profile.imgUrl}
                              role="img"
                              className=" min-h-[160px] min-w-full min-[480px]:min-w-[180px] min-[480px]:min-h-[250px] sm:min-w-[270px] sm:min-h-[270px] rounded shadow border-gray-100"
                            />
                          </div>
                          <div className="ml-[10px] w-full 2xl:w-[270px] max-h-[143px]">
                            <div className="flex w-full items-center justify-between pt-6 pb-1">
                              <p className="text-black m-0 text-lg min-[480px]:text-2xl leading-tight font-bold">{`${profile.firstName} ${profile.lastName}`}</p>
                            </div>
                            <p className="text-[rgba(255,124,92,1)] text-md min-[480px]:text-xl pb-3 font-bold min-h-[60px] min-[480px]:min-h-[85px]">
                              {profile.company}
                            </p>
                          </div>
                        </div>
                      </Link>
                    )
                  })}
              </div>
              {membersData && (
                <div className="my-4 pr-2 mr-10 mb-10 mt-10">
                  <a
                    href={'/#whoareyou'}
                    className="px-4 mt-[40px] py-2 underline text-brandOrange float-left font-bold"
                  >
                    Become F.A.M.E. Member
                  </a>

                  <Pagination
                    profilesPerPage={profilesPerPage}
                    totalProfiles={membersData.length}
                    handlePageChange={handlePageChange}
                    previousPage={previousPage}
                    nextPage={nextPage}
                    currentPage={currentPage}
                  />
                </div>
              )}
            </section>
          </main>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default CommunityMembers
