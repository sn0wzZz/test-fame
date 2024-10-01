import { useGetAllMembersQuery } from '@/generated/apolloComponents'
import Link from 'next/link'

const BoardMembers = () => {
  const { data } = useGetAllMembersQuery({
    variables: {
      slug: 'board',
    },
  })

  const boardMembers = data && data.getAllMembers ? [...data.getAllMembers] : []
  const sortedData = boardMembers.sort((a, b) =>
    a.firstName.localeCompare(b.firstName)
  )

  return (
    <div className="grid px-[33px] md:grid-cols-3 gap-[35px] mt-[74px] mb-[74px]">
      {sortedData.map((member) => {
        return (
          <Link
            href={`/community/member/${member?.id}/${member.firstName}_${member.lastName}`}
            key={member?.id}
            className="flex flex-col h-full items-center max-w-[320px] cursor-pointer"
          >
            <div className="flex flex-col h-full items-center max-w-[320px]">
              <div className="relative h-0 w-full pb-[100%] mb-[12px]">
                <img
                  src={member?.imgUrl}
                  className="object-cover absolute inset-0 w-full h-full"
                />
              </div>
              <h3 className="font-sans font-semibold text-brandOrange text-2xl">
                {member?.firstName} {member?.lastName}
              </h3>
              <p className="font-sans font-normal text-textBlack text-lg leading-8 text-center pb-6">
                {member?.company}
              </p>
              <img
                src={member?.logos?.[0]}
                className="w-full max-w-[152px] md:h-[70px] object-contain mt-auto"
              />
            </div>
          </Link>
        )
      })}
      {/* <div className="flex flex-col items-center m-4 mb-4">
        <img src="../../images/b1.jpg" className="md:w-[325px] md:h-[322px]" />
        <span className="font-sans font-semibold text-brandOrange text-2xl">
          Diana Nikolaeva, CFA
        </span>
        <p className="font-sans font-normal text-textBlack text-lg leading-8 text-center pb-6">
          Strategy and Transactions Partner,
          <br />  EY Bulgaria, N. Macedonia, Albania & Kosovo
        </p>
        <img src="../../images/l1.png" className="md:w-[152px] md:h-[70px]" />
      </div>
      <div className="flex flex-col items-center m-4 mb-4">
        <img src="../../images/b2.jpg" className="md:w-[325px] md:h-[322px]" />
        <span className="font-sans font-semibold text-brandOrange text-2xl">
          Maria Shishkova
        </span>
        <p className="font-sans font-normal text-textBlack text-lg leading-8 text-center pb-6">
          Managing Partner, AIMS Human Capital
          <br />
          Bulgaria & Dale Carnegie Training Bulgaria
        </p>
        <img src="../../images/l2.png" className="md:w-[136px] md:h-[65px]" />
      </div>
      <div className="flex flex-col items-center m-4 mb-4">
        <img src="../../images/b3.jpg" className="md:w-[325px] md:h-[322px]" />
        <span className="font-sans font-semibold text-brandOrange text-2xl">
          Monica Ionescu
        </span>
        <p className="font-sans font-normal text-textBlack text-lg leading-8 text-center pb-6">
          Executive Director at UBS Wealth
          <br />
          Management, Romania & Bulgaria UHNW
        </p>
        <img src="../../images/l3.png" className="md:w-[142px] md:h-[55px]" />
      </div> */}
    </div>
  )
}

export default BoardMembers
