document.addEventListener('DOMContentLoaded',()=>{
  const $=s=>document.querySelector(s),modal=$('#profileModal'),input=$('#profileName');
  function greeting(name){let hour=new Date().getHours(),time=hour<12?'Good morning':hour<17?'Good afternoon':hour<21?'Good evening':'Good night';$('#greeting').textContent=`${time.toUpperCase()}, ${name.toUpperCase()}`}
  let profile=Store.get('profile',{name:''});
  if(profile.name){greeting(profile.name)}else{modal.hidden=false;setTimeout(()=>input.focus(),80)}
  $('#profileForm').onsubmit=e=>{e.preventDefault();let name=input.value.trim();if(!name)return;profile={name};Store.set('profile',profile);greeting(name);modal.hidden=true;window.toast(`Welcome in, ${name}.`) };
});
