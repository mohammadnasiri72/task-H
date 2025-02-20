import Link from "next/link";

const modal = () => {
  return (
    <div className=" w-full rounded-md px-6 py-6">
      <h1 className="font-bold text-3xl mb-5 text-[#d91b1b]">
        نام تسک : تثنتشنیس
      </h1>
      <h3 className="text-2xl">توضیحات تسک: </h3>
      <p className="my-5">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
        از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
        سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
        متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه
        درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با
        نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان
        خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید
        داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان
        رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات
        پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
      </p>
      {/* <div className="flex">
            <button className="bg-green-700 rounded text-white w-full">بله</button>
            <button className="bg-red-700 rounded text-white w-full">خیر</button>
          </div> */}

      <div className="flex items-center text-blue-800">
        <i class="fa fa-clock-o px-3" aria-hidden="true"></i>

        <div>مدت زمان انجام تسک : 2 روز</div>
      </div>

      <div className="flex items-center text-blue-800">
      <i class="fa fa-user px-3" aria-hidden="true"></i>

        <div>تسک تعریف شده توسط : محمد عالم زاده</div>
      </div>



    </div>
  );
};

export default modal;
