import React from 'react'

const Graph = (props) => {
  const data = props.data;
  return (
    // <section className="time-graph mt-2">
    //   <h1 className="text-xl text-slate-50 font-medium">Education</h1>
    //   <div className='h-1 w-32 border-[1px] border-[#f5a3a3] rounded-sm bg-transparent' />
    //   <div className="flex flex-col m-4 justify-start items-start w-full">
    //     {data.map((item, index) => (

    //       <div key={index} className='border-l-2 border-violet-700 border-dotted w-1 text-slate-50'>
    //         <div className="relative flex flex-row ">

    //           <div className="h-6 w-6 rounded-full bg-violet-700 " />
    //           <div className="absolute w-6 text-slate-50 ml-8 top-1/2 -translate-y-1/3">
    //             {item.field}
    //           </div>
    //         </div>
    //         {item.description.map((meta, index) => (
    //           <div key={index}>
    //             {meta.specialization}
    //             {meta.institution}
    //             {meta.duration}
    //             {meta.score}
    //           </div>
    //         ))}
    //       </div>
    //     ))}
    //   </div>
    // </section>
    <section className="time-graph mt-6">
      <div className="flex flex-col">
        <h1 className="text-2xl font-bold text-violet-400 ml-1">{props.sectionName} :</h1>
        <div className='h-1 w-32 border-[1px] border-[#f5a3a3] rounded-sm bg-transparent' />
      </div>

      <div className="mt-4">
        {data.map((item, index) => (
          <div key={index} className="flex flex-col justify-start items-start gap-0 m-0">
            <div className="flex flex-row items-center gap-2">

              <div className="h-6 w-6 rounded-full bg-violet-600 " />
              <div className=" font-semibold top-[2px] text-violet-300 ">
                <div className="  ">{item.field}</div>
              </div>
            </div>
            <div className="ml-[11px]">
              <div className='border-l-2 border-violet-700 border-dotted w-full text-slate-50'>
                {item.description.map((meta, index) => (
                  <div className={`ml-5 ${item.id + 1 !== data.length && 'pb-4'} w-full text-sm font-medium`}>
                    <div className=''>{meta.specialization}</div>
                    <div className=''>{meta.institution}</div>
                    <div className=''>{meta.duration}</div>
                    <div className=''>{meta.score}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

    </section>
  )
}

export default Graph