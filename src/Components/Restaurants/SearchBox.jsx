

function SearchBox({onType}){
    return(
        <>
        <input type="text"
        placeholder="Search Restaurant"
        onChange={(event) => {
            onType(event.target.value);
        }}  style={{width:`12rem`,
                    padding:"10px 20px",
                    border:"none",
                    outline:"none",
                    borderRadius:"5px",
                    backgroundColor:"lightGray"
        }}/>
        </>
    )

}

export default SearchBox;