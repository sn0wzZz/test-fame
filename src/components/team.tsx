import BoardMembers from '@/components/board-members'

const Team = () => {
  return (
    <div className="flex flex-col items-center m-5 pt-4 max-w-[1045px] mx-auto bg-bgColor">
      <h5 className="font-sans font-bold text-3xl md:text-5xl text-textBlack text-center">
        Meet <span className="text-brandOrange">F.A.M.E board</span>
      </h5>
      <p className="font-sans font-normal text-lg md:text-xl text-textBlack text-center lg:px-0 px-[33px]">
        Our Advisory Board is made up of leaders from some of the world's most
        successful companies.
      </p>
      <div className="bg-bgColor">
        <BoardMembers />
      </div>
    </div>
  )
}

export default Team
