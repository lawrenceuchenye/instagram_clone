
const LoginForm=()=>{
  return(
    <div className="flex justify-center items-center h-full">
      <div className="m-4 w-full h-[400px] bg-white rounded text-center flex flex-col justify-center items-center">
         <img className="w-2/6 md:w-40" style={{objectFit:"container"}} src="https://www.instagram.com/static/images/web/logged_out_wordmark-2x.png/d2529dbef8ed.png" alt="instagImage"/>
         <div className="text-center">
           <form className="p-2 flex flex-col">
             <input className="p-2 w-[250px] md:w-[400px] focus:bg-gray-100 focus:border-b-black border-b-gray-300 border-b-2 m-2 outline-none" type="text" placeholder="Username"/>
             <input className="p-2 w-[250px] md:w-[400px] focus:bg-gray-100 focus:border-b-black border-b-2 border-b-gray-200 m-2 outline-none" type="text" placeholder="Password"/>
             <input className="mt-2 ml-2 w-[250px] md:w-[400px] hover:bg-gray-200 px-3 py-4"  type="submit" value="SIGN IN"/>
           </form>
          </div>
      </div>
     </div>
  )
}

export default LoginForm
