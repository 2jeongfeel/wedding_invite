export function useClipboard(){
  async function copy(text){
    try{ await navigator.clipboard.writeText(text); return true }
    catch(e){ const ok=window.prompt('복사 실패. 아래 내용을 직접 복사해주세요.', text); return !!ok }
  }
  return { copy }
}