function RatingFilter({onChange}){
 return(
    <>
      <input type="number" name="rating" placeholder="Rating"
      onChange={(event)=>{
         onChange(event.target.value);
      }} max={6} min={0} style={{width:`10rem`,
         padding:"10px 20px",
         border:"none",
         outline:"none",
         borderRadius:"5px",
         backgroundColor:"lightGray"
}}/>
    </>
 )
}

export default RatingFilter;