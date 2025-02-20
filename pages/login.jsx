import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

const login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async () => {
    const res = await fetch(
      `http://localhost:3001/users?username=${username}&password=${password}`
    );
    const users = await res.json();

    

    if (users.length > 0) {
      // ذخیره اطلاعات کاربر در localStorage
      localStorage.setItem("user", JSON.stringify(users[0]));
      router.push("/todoList");
    } else {
      alert("نام کاربری یا رمز عبور اشتباه است");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">

    <div className="bg-cont w-1/2 rounded-md px-6 py-6 bg-slate-200">
      <h1 className="font-bold text-center text-2xl mb-5 text-[#fb6f92] flex items-center justify-center">
        <i className="fa fa-sign-in px-3" aria-hidden="true"></i>
        ورود
      </h1>
      <input
        className="w-full bg-[#ffffffb3] mb-3 rounded-sm py-1 px-3 outline-none focus:border-2 focus:border-[#fb6f92] focus:bg-[#fb6f92]"
        type="text"
        placeholder="نام کاربری "
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        className="w-full bg-[#ffffffb3] mb-3 rounded-sm py-1 px-3 outline-none focus:border-2 focus:border-[#fb6f92] focus:bg-[#fb6f92]"
        type="password"
        placeholder="رمز عبور"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        onClick={handleLogin}
        className="w-full bg-[#fb6f92] text-white mb-3 rounded-sm py-1 px-3 cursor-pointer"
      >
        ورود
      </button>
      <Link
        className="w-full block text-center  text-[#fb6f92] mt-5"
        href="/register"
      >
        حساب کاربری ندارید؟ اینجا کلیک کنید
      </Link>
    </div>
    </div>
  );
};

export default login;
