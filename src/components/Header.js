import React from 'react'

export const Header = ({display}) => {
  return (
    <div className='bg-[#435B66] w-full flex justify-between items-center px-[73px] py-[9px] text-blue font-aclonica h-[80px]'>
			{display !== 'start' && <div className='text-[55px]'>QUIZ APP</div>}
		</div>
  )
}

export default Header