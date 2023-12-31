import React from 'react'
import { BsStarFill } from 'react-icons/bs'
import { parseISO, format } from "date-fns";

type Props = {
    comment: string,
    name: string,
    date: string,
    rating: number
  }

const Comment = ({comment, name, date, rating}: Props) => {
  return (
    <div className="flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md divide-gold bg-chelseaBlue text-gray-100 my-2">
        <div className="flex justify-between pb-2">
            <div className="flex space-x-4">
                <div className="flex bg-none ml-1 max-sm:hidden">
                    <span className="w-12 h-12 rounded-full my-1 border-2 bg-gold border-lightGold text-4xl text-chelsea text-center pt-1 uppercase">
                        {name.charAt(0)}
                    </span>
                </div>
        
                <div>
                    <h4 className="font-bold max-sm:text-sm">{name}</h4>
                    <span className='text-xs text-lightGold mr-1'>on</span>
                    <time
                        className="text-xs text-lightGold"
                        dateTime={date}
                    >
                        {format(
                            parseISO(date),
                            "MMMM dd, yyyy"
                        )}
                    </time>
                </div>
            </div>
            <div className={`flex items-center space-x-2 ${rating < 3 ? "text-red-500" : rating > 3 ? "text-yellow-500" : "text-lightGold"}`}>
                <BsStarFill className="w-5 h-5 fill-current"/>
                <span className="text-base sm:text-xl font-bold">{rating}</span>
            </div>
        </div>
        <div className="p-4 space-y-2 text-sm text-lightGold">
            <p>{comment}</p>
        </div>
    </div>
  )
}

export default Comment