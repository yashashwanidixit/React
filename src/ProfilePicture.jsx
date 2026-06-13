


function ProfileFunction(){
    const imageurl="https://yt3.ggpht.com/yRSsOF201JJZPWOAjLpz_VVsqBhFlWg_dMOJOwafh4ZtBBRia3cpZewN-_lBAa-855BePE-vBPI=s88-c-k-c0x00ffffff-no-rj";
    const handleClick=(e)=>e.target.style.display="none";
    return(
        <img onClick={(e)=>handleClick(e)} src={imageurl}></img>
    )

}

export default ProfileFunction