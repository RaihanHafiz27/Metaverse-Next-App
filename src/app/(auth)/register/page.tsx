import AuthForm from "@/components/auth/AuthForm";
import Image from "next/image";

const RegisterPage = () => {
  return (
    <div
      className="flex flex-col justify-between w-full items-center h-screen bg-center bg-no-repeat bg-cover py-4"
      style={{ backgroundImage: 'url("/images/bg-auth.jpg")' }}
    >
      <div className="w-11/12 2xl:w-4/5 h-full flex flex-col justify-between">
        <div className="flex items-center w-full">
          <Image
            className="w-8 h-8 2xl:w-12 2xl:h-12"
            src="/images/logo-1.png"
            alt="Logo"
            width={100}
            height={100}
          />
          <h1 className="font-bold text-2xl 2xl:text-3xl bg-gradient-to-r from-blue-300 to-teal-500 bg-clip-text text-transparent">
            MyApp
          </h1>
        </div>
        <div className="flex justify-end items-center w-full">
          <AuthForm isRegister />
        </div>
        <div className="w-full flex flex-col justify-center items-center lg:items-start border border-green-600">
          <h2 className="text-2xl 2xl:text-3xl font-bold text-slate-200">
            SIGN UP TO YOUR
          </h2>
          <h2 className="text-2xl 2xl:text-3xl tracking-widest font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
            ADVENTURE!!
          </h2>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
