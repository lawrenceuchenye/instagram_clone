import {useState} from "react";

const Post=({imgUrl,userName,body})=>{
  const [comments,setComments]=useState([]);

  const [comment,setComment]=useState("");

  const Comment=()=>{
    let username="@"+userName;
    const newComment={username,comment};
    setComments([...comments,newComment]);
    setComment("");
  }

  return(
   <div className="mb-4 mx-4 my-2 md:w-1/2" style={{boxShadow:"0 0 5px rgba(0,0,0,0.4)"}}>
       <div className="flex items-center px-4 py-2">
           <div className="bg-gray-300 w-12 h-12 m-2 flex justify-center items-center rounded-full">
              <span className="font-bold text-3xl text-white">{userName[0]}</span>
           </div>
           <h2 className="ml-3 font-bold"><b>{userName}</b></h2>
        </div>
        <div style={{height:"300px"}}>
          <img  className="w-full h-full" src={imgUrl} />
         </div>
        <div className="mt-2 mb-1 p-2 shadow-none">
          <p>{body}</p>
        </div>
        <div className="px-2 py-4 shadow my-2">
          {comments.map(comment=>(
            <p><span className="font-bold">{comment.username}</span> {comment.comment}</p>
         ))}
       </div>
       <div class="flex mt-1">
         <div className="w-full">
            <input className="w-full py-2 outline-none px-2" value={comment} type="text" placeholder="comment" onChange={(e)=>setComment(e.target.value)}/>
          </div>
          <h1 className="font-bold m-2 text-gray-300 hover:text-black" onClick={()=>Comment()}>POST</h1>
        </div>
   </div>
  )
 }

export default Post
