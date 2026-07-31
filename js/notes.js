window.Notes=(()=>{
  const $=s=>document.querySelector(s);
  function init(){
    let n=Store.get('note',{text:'',color:'cream',pinned:false}),card=$('.notes-card'),pin=$('#pinNote');
    function renderPin(){card.classList.toggle('pinned',n.pinned);pin.textContent=n.pinned?'⌖ Pinned':'⌖ Pin note';pin.setAttribute('aria-pressed',n.pinned);$('#noteSaveStatus').textContent=n.pinned?'Pinned locally':'Saved locally'}
    function setColor(){card.style.background=n.color==='lilac'?'rgba(151,130,183,.28)':n.color==='peach'?'rgba(207,133,96,.25)':'var(--surface)';document.querySelectorAll('.note-colors button').forEach(b=>b.classList.toggle('active',b.dataset.color===n.color))}
    $('#noteArea').value=n.text;setColor();renderPin();
    document.querySelectorAll('.note-colors button').forEach(b=>b.onclick=()=>{n.color=b.dataset.color;setColor();Store.set('note',n)});
    $('#noteArea').oninput=e=>{n.text=e.target.value;Store.set('note',n);$('#noteSaveStatus').textContent=n.pinned?'Pinned locally':'Saved just now'};
    pin.onclick=()=>{n.pinned=!n.pinned;Store.set('note',n);renderPin();window.toast(n.pinned?'Note pinned — it will stay at the top.':'Note unpinned')};
  }
  return{init}
})();
