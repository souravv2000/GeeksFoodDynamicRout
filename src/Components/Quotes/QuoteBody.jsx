import './QuoteBody.css';
 function QuoteBody(obj){
   return (
    <>
    <div className='QuoteList'>
        <div className='Quote'>
            <h2>{obj.quote}</h2>
            <span>{obj.author}</span>
        </div>
    </div>
    </>
   )
 }
  export default QuoteBody;