import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

const register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleRegister = async () => {
    const user = { username, password , todos:[]};

    // ذخیره کاربر در json-server
    const res = await fetch("http://localhost:3001/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    if (res.ok) {
      // ذخیره اطلاعات کاربر در localStorage
      const res = await fetch(
        `http://localhost:3001/users?username=${username}&password=${password}`
      );
      const users = await res.json();
      localStorage.setItem("user", JSON.stringify(users[0]));
      router.push("/todoList");
    } else {
      alert("خطا در ثبت نام");
    }
  };

  return (
    <div className="bg-cont w-full rounded-md px-6 py-6 bg-slate-200">
      <h1 className="font-bold text-center text-2xl mb-5 text-[#fb6f92] flex items-center justify-center">
        <i className="fa fa-sign-in px-3" aria-hidden="true"></i>
        ثبت نام
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
        onClick={handleRegister}
        className="w-full bg-[#fb6f92] text-white mb-3 rounded-sm py-1 px-3 cursor-pointer"
      >
        ثبت نام{" "}
      </button>
      <Link
        className="w-full block text-center  text-[#fb6f92] mt-5"
        href="/login"
      >
        حساب کاربری ندارید؟ اینجا کلیک کنید
      </Link>
    </div>
  );
};

export default register;
