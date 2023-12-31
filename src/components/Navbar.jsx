import React,{useState} from "react";
const Navbar = () =>{
    const [item,setItem]=useState('0');
    const selected = ' [border-left:hidden] [border-right:hidden] [border-top:hidden] border-[4px] [border-bottom-color:lime] hover:border-none ';
    const notSelected = ' border-none '
    const isSelected = (val) =>{
        return item === (""+val) ? selected : notSelected;
    }
    const navItems = ['Fruits','Vegetables','More','Cart'];
    
    const [button,setButton]=useState(true);


    const btnState = (id) =>{
        if(id===0)
            return button===true ? 'close' : 'open';
        else if(id==1)
            return button === true ? 'bg-red-500' : 'bg-blue-500';
        else if(id===2)
            return button===true ? ' ' : 'hidden';
    } 
    return (
        <div className=" w-[90%] mx-auto my-5 flex flex-col lg:flex-row justify-between">
          <div className="flex cursor-pointer justify-between">
            <div className="">
                <span className="text-lime-500 font-bold text-5xl px-2">Fruit</span>
                <span className="text-slate-500 font-thin text-5xl">Shop</span>
            </div>
            <div className="lg:hidden items-center">
                <input type="button" value={btnState(0)} id="btn" className={`px-4 py-2 border cursor-pointer ${btnState(1)}`}  onClick={()=>setButton(!button)}/>
                {/* {console.log(button)} */}
            </div>
          </div>
          <div className = {`${btnState(2)}`}>
            <ul className="flex flex-col lg:flex-row gap-5 mb-5">
             {navItems.map((items,index)=>(
                <li 
                className={`border {${isSelected(index)}} hover:rounded-full px-10 py-3 hover:bg-lime-500 hover:text-white text-2xl cursor-pointer text-slate-500 transition:ease-in duration-300`} 
                onClick={()=>setItem(''+(index))}
                key={index}>
                  {items}
                </li>
             ))}
            </ul>
          </div>
        </div>
    )  
}
export default Navbar