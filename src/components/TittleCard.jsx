const TittleCard = (props) =>{
    return(
        <div className="w-full py-1">
            <div className="relative">
                <div className="w-4/5 mx-auto my-12 border-[slate] border-[1px] " />
            </div>
            <div className="relative bottom-[4.5rem] left-[40%] md:left-[45%] lg:left-[48%]">
                <span className="bg-white text-2xl px-2 text-slate-500">{props.tittle}</span>
            </div>
        </div>
    )
}
export default TittleCard