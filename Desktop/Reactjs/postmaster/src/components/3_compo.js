import React , {useState}  from 'react'

export default function Data(props) {
    const changeMe=(e)=>{
        setText(e.target.value);

   }
   const copyText=(e)=>{
    let d=document.getElementById('text').value;
    if(d===''){
        alert('Oops! first enter your Text')
    }else{
   let d=document.getElementById('text');
   d.select()
   navigator.clipboard.writeText(d.value)}
   props.bhejna('text copied successfully','success ')
}


   const clickMe=(e)=>{
       let text=document.getElementById('text').value;
       if(text===''){
           alert('please enter the text value')
       }else{

           let text=data.toUpperCase();
           setText(text)
           props.bhejna(' coverted in capital','success')
        }
   }
   const smallMe=()=>{
       let a=document.getElementById('text').value;
       if(a===''){
           alert('OOps! first enter your text')
       }else{
           let d=data.toLowerCase();
           setText(d);
           props.bhejna('converted in lower case','success ')
       }
   }
   const pressMe=()=>{
       let d=document.getElementById('text').value;
       if(d===''){
           alert('Text is already clear')
       }else{

           setText('')
           props.bhejna('Text Cleared','success ')
       }
    

   } 
   const spaceMe=()=>{
       let val=document.getElementById('text').value
       if(val===''){
           alert('please first enter your text');
        }else{
    let val=document.getElementById('text').value
    let regex=/[ ]+/;
    let newReg=val.split(regex);
    setText(newReg.join(' '))
    props.bhejna('removed spaces successfully','success ')
}
   }

  const prince=(e)=>{
      let d=document.getElementById('input').value;
    if(d==='')
    {
        alert(` please enter your replace value`);
    }
      else if(data.includes(d)){
          let newC=data.replace(d,'');
          setText(newC)

      }
      else{
          alert(`Oops : your given string does not exist\nwrite correct Text!`)
      }

  }


    const[data,setText]=useState('');
    return (
        <>
        <div>
           <div className="container">
               <h1>{props.data} </h1>
               <textarea  value={data} id='text' onChange={changeMe} placeholder="please enter your String Here" style={{backgroundColor:'#f3a532',width:'70vw',height:'50%',rows:'8',color:'black'}}>
            </textarea><br/>
            <button className={props.className} onClick={clickMe}>convert in Capital</button>
            <button className={props.className} onClick={smallMe}>convert in lowercase</button>
            <button className={props.className} onClick={pressMe}>Clear Text</button>
            <button className={props.className} onClick={spaceMe}>Clear Extra spaces</button>
            <button className="btn btn-primary mx-2 my-2" onClick={copyText}>copy your text</button>
        </div>
            
        </div>

       <div className="container my-4 mx-2" style={{backgroundColor:'#f3a532',color:'black', width:'70vw'}}>
           <h2 className="head">length of data  </h2>
           <p>{data.length}</p>
           <h2 className="head">take time to read</h2>
           <p>{0.008*data.length} minutes</p>
       </div>
        
       <div className="container my-4 mx-2" style={{backgroundColor:'#f3a532',color:'black', width:'70vw'}}>
           <h2 className="head">no of words in text area</h2>
           <p>{data.split(' ').filter((e)=>{return e.length!==0}).length}</p>
       </div>
        
       
       <div className="container my-4 mx-2" style={{backgroundColor:'#f3a532',color:'black', width:'70vw'}}>
           <input type='text' className='my-2' id="input" placeholder="enter your desire value"/><button className="btn btn-primary mx-2 my-2" onClick={prince}>replace desire data</button>
           <p>{data}</p>
       </div>
       
    
        </>
    )
}

 