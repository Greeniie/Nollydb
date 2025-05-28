import React from 'react'

const CastList = ({castList}) => {
  
  return (
    <div className='pt-[20px]'>
   <div className="flex flex-wrap gap-8 flex-wrap">
      {castList.map((cast, index) => (
        <div key={index}>
          <img
            src={cast.image}
            alt={cast.name}
            className="w-[150px] h-[183px] object-cover"
          />
          <div className="mt-2 text-[14px] font-bold text-[#2A2A2A]">{cast.name}</div>
        </div>
      ))}
    </div>
    </div>
  )
}

export default CastList