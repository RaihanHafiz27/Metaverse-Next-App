import Image from "next/image";
import GoogleIcon from "../../../../public/icons/google";
import FacebookIcon from "../../../../public/icons/facebook";
import Link from "next/link";
import AuthForm from "@/components/auth/AuthForm";

const LoginPage = () => {
  return (
    <div
      className=" flex flex-col justify-between w-full  items-center h-screen bg-center bg-no-repeat bg-cover py-4"
      style={{ backgroundImage: 'url("/images/bg-auth.jpg")' }}
    >
      <div className="w-11/12 2xl:w-4/5 h-full flex flex-col justify-between">
        <div className="flex items-center w-full border border-red-600">
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
        <div className="flex justify-end  items-center w-full border border-pink-600">
          <AuthForm isRegister={false} />
          {/* <div className="backdrop-blur-md max-w-md p-8 border border-yellow-600">
            <h1 className="text-3xl font-bold text-slate-200 mb-6">Sign In</h1>
            <form>
              <label className="text-slate-200 font-semibold" htmlFor="email">
                Sign in with email address
              </label>
              <input
                type="email"
                className="w-full bg-transparent border-b border-pink-200 my-4"
                placeholder="Email"
              />
              <input
                type="password"
                className="w-full  bg-transparent border-b border-pink-200 my-4"
                placeholder="Password"
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white  px-4 py-2 rounded-md w-full"
              >
                Sign in
              </button>
              <hr className="my-8" />
              <p className="text-slate-200">Or continue with</p>
              <div className="w-full grid grid-cols-2 gap-4 my-2">
                <button className="flex items-center justify-center bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-2">
                  <GoogleIcon />
                  Google
                </button>
                <button className="flex items-center justify-center bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-2">
                  <FacebookIcon />
                  facebook
                </button>
              </div>
              <Link href="/register">
                Don't have an account? <span>Register</span>
              </Link>
            </form>
          </div> */}
        </div>
        <div className="w-full flex flex-col justify-center items-center lg:items-start border border-green-600">
          <h2 className="text-2xl 2xl:text-3xl font-bold text-slate-200">
            SIGN IN TO YOUR
          </h2>
          <h2 className="text-2xl 2xl:text-3xl tracking-widest font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
            ADVENTURE!!
          </h2>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
