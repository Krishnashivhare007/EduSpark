import { useRef } from "react";
import mermaid from "mermaid";

mermaid.initialize({
    startOnLoad:false,
    theme: "default"
})

const cleanMermaidChart = (diagram)=>{
    if(!diagram) return "";

    let clean = diagram
    .replace(/\r?\n/g,"\n")
    .replace(/\//g," ")
    .replace(/\(/g,"")
    .replace(/\)/g,"")
    .replace(/:/g,"")
    .replace(/,/g,"");

    if(!clean.trim().startsWith("graph")){
        clean = `graph TD\n ${clean}`;
    }

    return clean;
}



function MermaidSetup({diagram}) {
    const containerRef = useRef(null)

    

    return ( 
        <div className="bg-white border rounded-lg p-4 overflow-x-auto">
            <div ref={containerRef}/>
        </div>
     );
}

export default MermaidSetup;