
const Header=({authFormToggle})=>{
  return(
    <div>
      <div className="px-4 py-6 shadow-lg w-full bg-white">
         <div className="flex justify-between">
            <img className="w-2/4 md:w-[200px]" style={{objectFit:"container"}} src="https://www.instagram.com/static/images/web/logged_out_wordmark-2x.png/d2529dbef8ed.png" alt="instagImage"/>
            <div className="flex py-2 m-2 ml-4">
               <h2 className="text-gray-500 mr-3" onClick={()=>authFormToggle(false)}>SIGN UP</h2>
               <h2 className="text-gray-500" onClick={()=>authFormToggle(true)}>SIGN IN</h2>
           </div>
         </div>
      </div>
    </div>
 );
}

export default Header
