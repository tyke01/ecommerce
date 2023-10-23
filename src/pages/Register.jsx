//

const Register = () => {
  return (
    <main className="w-screen flex gap-3 items-center justify-center p-2 md:p-5 bg-gray-300">
      <div className=" w-full md:w-[60%] lg:w-[40%] bg-white rounded-2xl">
        <div className=" flex flex-col p-5">
          <h1 className="text-lg md:text-2xl font-light mb-5">CREATE AN ACCOUNT</h1>
          <form action="" className="flex flex-col">
            <label htmlFor="first-name">Enter First Name:</label>
            <input
              id="first-name"
              type="text"
              placeholder="First Name"
              className="input"
            />
            <label htmlFor="last-name">Enter Last Name:</label>
            <input
              id="last-name"
              type="text"
              placeholder="Last Name"
              className="input"
            />
            <label htmlFor="username">Enter Username:</label>
            <input
              id="username"
              type="text"
              placeholder="Username"
              className="input"
            />
            <label htmlFor="email">Enter Email:</label>
            <input
              id="email"
              type="text"
              placeholder="Email"
              className="input"
            />
            <label htmlFor="password">Enter Password:</label>
            <input
              id="password"
              type="password"
              placeholder="Password"
              className="input"
            />
            <label htmlFor="confirm-password">Confirm Password:</label>
            <input
              id="confirm-password"
              type="password"
              placeholder="Confirm Password"
              className="input"
            />
            <p className=" text-[10px] md:text-xs my-5">
              By creating an account, i consent to the processing of my personal
              data in accordance with the{" "}
              <span className="font-bold cursor-pointer">PRIVACY POLICY</span>
            </p>
            <div className="flex gap-3 items-center">
              <button className="w-2/5 text-xs px-2 py-3 md:py-3 md:px-5 bg-teal-700 text-white hover:opacity-95">
                CREATE ACCOUNT
              </button>
              <span className="w-[2px]"></span>
              <p className="text-xs md:text-sm">
                Already have an account ?{" "}
                <span className="font-bold cursor-pointer hover:opacity-90">
                  Login
                </span>
              </p>
            </div>
          </form>
        </div>
      </div>
      <div className="background-pic h-screen flex-auto hidden lg:block"></div>
    </main>
  );
};

export default Register;
