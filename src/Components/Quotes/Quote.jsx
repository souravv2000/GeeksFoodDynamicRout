import React from "react";
import quoteData from './quotes.json';
import QuoteBody from "./QuoteBody";

function Quote(){
    return(
        <>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        <div className='QuoteContainer' style={{paddingTop:"5rem",
                                                 display:" flex",
                                                 flexDirection: "column",
                                                justifyContent:" center",
                                                alignItems: "center",
                                                gap: "1rem"}}>
        {quoteData.map((quoteObj,index)=>(
          <QuoteBody key={index} quote={quoteObj.quote} author={quoteObj.author} />
        ))}
        </div>
        </>
    )
}

export default Quote;