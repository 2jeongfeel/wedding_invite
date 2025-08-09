export function useScript(){
  const load = (src)=>new Promise((resolve,reject)=>{
    if(document.querySelector(`script[src="${src}"]`)){resolve();return}
    const s=document.createElement('script'); s.src=src; s.async=true
    s.onload=()=>resolve(); s.onerror=(e)=>reject(e); document.head.appendChild(s)
  })
  return { load }
}