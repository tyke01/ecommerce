//

const Login = () => {
  return (
    <main className="w-screen h-screen  flex gap-3 items-center justify-center p-5 bg-gray-300">
      <div className="w-[40%] bg-white rounded-2xl p-5">
        <h1 className="text-2xl font-light mb-5">Login to your Account</h1>

        <form action="" className="flex flex-col">
          <label htmlFor="username">Enter your Username:</label>
          <input type="text" placeholder="Enter username" className="input" />

          <label htmlFor="email">Enter your Email:</label>
          <input type="text" placeholder="Email" className="input" />

          <label htmlFor="password">Enter password:</label>
          <input
            type="text"
            className="input"
            placeholder="Enter your password"
          />

          <p className="mt-5">
            Don&apos;t have an account?{" "}
            <span className="font-bold cursor-pointer">Register</span>
          </p>
        </form>
      </div>
      <div className="background-pic h-screen flex-auto"></div>
    </main>
  );
};

export default Login;
