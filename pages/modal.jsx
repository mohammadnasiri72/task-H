import Link from "next/link"

const modal = () => {
    return (
      <div className=" w-full rounded-md px-6 py-6 bg-slate-200">
          <h1 className="font-bold text-center text-2xl mb-5 text-[#d91b1b] flex items-center justify-center">
          حذف تسک
          </h1>
          <p>
            آیا اطمینان دارید از حذف تسک؟
          </p>
          <div className="flex">
            <button className="bg-green-700 rounded text-white w-full">بله</button>
            <button className="bg-red-700 rounded text-white w-full">خیر</button>
          </div>

      </div>
    )
  }
  
  export default modal