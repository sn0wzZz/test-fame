import { ChevronDown } from 'lucide-react'

const FAQ = ({ qa }: { qa: { q: string; a: string }[] }) => {
  return (
    <form
      action='get'
      className='flex w-full max-w-[60rem] mx-auto mt-[2rem]'
      onSubmit={(e) => e.preventDefault()}
    >
      <ul
        data-accordion
        className='w-full flex flex-col bg-lightOrange p-[0.5rem] space-y-[0.5rem]'
      >
        {qa?.map((entry) => {
          const id = entry?.q?.replace(' ', '-').toLowerCase()
          return (
            <li
              key={id}
              className='flex flex-col [&:has(input:checked)_svg]:rotate-180 w-full bg-white border relative'
            >
              <label
                htmlFor={id}
                className='p-[2rem] w-full flex justify-between font-bold text-gray-500'
              >
                {entry?.q}{' '}
                <ChevronDown className='transition-all inline-block' />
              </label>
              <input
                id={id}
                type='radio'
                hidden
                name='accordion-1'
                className='peer !hidden'
              />
              <div className='grid grid-rows-[0fr] peer-checked:grid-rows-[1fr] transition-all px-[2rem]'>
                <div className='overflow-hidden'>
                  <div
                    className='pb-[2rem] whitespace-pre-line'
                    dangerouslySetInnerHTML={{
                      __html: (entry?.a ?? '')?.replace(
                        /\[([^\[]+)\]\((.*)\)/gm,
                        `<a href="$2" target="_blank" class="text-brandOrange underline cursor-pointer">$1<a/>`
                      ),
                    }}
                  ></div>
                </div>
              </div>
              <button
                type='reset'
                className='hidden absolute inset-0 h-[88px] pointer-events-none peer-checked:pointer-events-auto peer-checked:block'
              ></button>
            </li>
          )
        })}
      </ul>
    </form>
  )
}

export default FAQ
