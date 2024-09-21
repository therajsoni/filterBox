import "./filterBox.css";
import {useContext, useEffect,useState} from "react"
import DataContext from "../context/dataContext";

const FilterBox = () => {

    const [text,setText] = useState(false)
    const {aSetT,bSetT,cSetT,dSetT,eSetT,fSetT,gSetT,hSetT} = useContext(DataContext)
  //  

  // const [aT,aSetT]  = useState(null);
  // const [bT,bSetT]  = useState(null);
  // const [cT,cSetT]  = useState(null);
  // const [dT,dSetT]  = useState(null);
  // const [eT,eSetT]  = useState(null);
  // const [fT,fSetT]  = useState(null);
  // const [gT,gSetT]  = useState(null);
  // const [hT,hSetT]  = useState(null);

  // 


   

    useEffect(()=>{
        if(document.body.style.backgroundColor==="white"){
            setText(false)
            }else{
              setText(true)
            } 
    })
   

    return (
<div className="hash h-[350px] flex flex-col justify-center items-center"> 
      {/* Centered Button */}
      <button
        className="button bg-blue-500 text-white font-bold py-2 px-4 rounded-lg mb-8"
        style={{
          width: "14vw",
          height: "4vh",
          borderRadius: "8px"
        }}
      >
        Filter
      </button>

      {/* Responsive Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-5xl">
       
        <div className="custom-select" style={{color:text?"black":"white"}} >
          <select
          onChange={(e) => aSetT(e.target.value)}
          className="w-full border border-gray-300 rounded-lg p-2">
            <option selected disabled>a</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>
        </div>

        <div className="custom-select" style={{color:text?"black":"white"}} >
          <select
          onChange={(e) => bSetT(e.target.value)}
          className="w-full border border-gray-300 rounded-lg p-2">
            <option selected disabled>b</option>
            <option>1</option>
            <option>2</option>
            <option>3</option> 
          </select>
        </div>

        <div className="custom-select" style={{color:text?"black":"white"}} >
          <select
          onChange={(e) => cSetT(e.target.value)}
          className="w-full border border-gray-300 rounded-lg p-2">
          <option selected disabled>c</option>
            <option>1</option>
            <option>2</option>
            <option>3</option> 
          </select>
        </div>

        <div className="custom-select" style={{color:text?"black":"white"}} >
          <select
          onChange={(e) => dSetT(e.target.value)}
          className="w-full border border-gray-300 rounded-lg p-2">
          <option selected disabled>d</option>
            <option>1</option>
            <option>2</option>
            <option>3</option> 
          </select>
        </div>

        <div className="custom-select" style={{color:text?"black":"white"}} >
          <select 
          onChange={(e) => eSetT(e.target.value)}
          className="w-full border border-gray-300 rounded-lg p-2">
          <option selected disabled>e</option>
            <option>1</option>
            <option>2</option>
            <option>3</option> 
          </select>
        </div>

        <div className="custom-select" style={{color:text?"black":"white"}} >
          <select 
          onChange={(e) => fSetT(e.target.value)}
          className="w-full border border-gray-300 rounded-lg p-2">
          <option selected disabled>f</option>
            <option>1</option>
            <option>2</option>
            <option>3</option> 
          </select>
        </div>

        <div className="custom-select" style={{color:text?"black":"white"}} >
          <select 
          onChange={(e) => gSetT(e.target.value)}
          className="w-full border border-gray-300 rounded-lg p-2">
          <option selected disabled>g</option>
            <option>1</option>
            <option>2</option>
            <option>3</option> 
          </select>
        </div>

        <div className="custom-select" style={{color:text?"black":"white"}} >
          <select
          onChange={(e) => hSetT(e.target.value)}
          className="w-full border border-gray-300 rounded-lg p-2">
          <option selected disabled>h</option>
            <option>1</option>
            <option>2</option>
            <option>3</option> 
          </select>
        </div>


      </div>
    </div>
  );
};

export default FilterBox;
