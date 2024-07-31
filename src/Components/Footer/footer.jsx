import './footer.css'


function Footer(obj){
    return (
        <>
        <div className='footerContainer'>
            <img src={obj.logoIpsum} alt="" />
            <p>{obj.footerPara}</p>
            <div className='footerList'>
                <li>{obj.list1}</li>
                <li>{obj.list2}</li>
                <li>{obj.list3}</li>
                <li>{obj.list4}</li>
                <li>{obj.list5}</li>
                <li>{obj.list6}</li>
            </div>
            <div className='social'>
            {/* <i class="fa-brands fa-facebook"></i> */}
                <li>{obj.icon1}</li>
                <li>{obj.icon2}</li>
                <li>{obj.icon3}</li>
                <li>{obj.icon4}</li>
                <li>{obj.icon5}</li>
            </div>
        </div>
        </>
    )
}

export default Footer;