
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();

   useEffect(() => {
    // دریافت اطلاعات کاربر از localStorage
    const user = JSON.parse(localStorage.getItem('user'));

    if (user) {
      // اگر اطلاعات کاربر موجود بود، به صفحه todo هدایت می‌شود
      router.push('/todoList');
    } else {
      // اگر اطلاعات کاربر موجود نبود، به صفحه لاگین هدایت می‌شود
      router.push('/login');
    }
  }, []);


  return (
   
    <>
     <div>
      <h2>در حال هدایت...</h2>
    </div>
    </>
  );
}
