document.addEventListener('DOMContentLoaded',()=>{
  const $=s=>document.querySelector(s), modal=$('#detailsModal');
  function openDetails(){
    let stats=Store.get('stats',{minutes:0,week:[23,41,18,58,33,67,45]}),tasks=Store.get('tasks',[]),done=tasks.filter(t=>t.done).length;
    $('#detailHours').textContent=(stats.minutes/60).toFixed(1)+'h';
    $('#detailPomos').textContent=Store.get('timer',{sessions:0}).sessions||0;
    $('#detailTasks').textContent=done;
    $('#detailChart').innerHTML=stats.week.map(v=>`<i style="height:${v}%" data-time="${Math.round(v/10)}h"></i>`).join('');
    $('#detailPrompt').textContent=tasks.find(t=>!t.done)?.text||'Your list is clear. Take a restorative break — you earned it.';
    modal.hidden=false;document.body.style.overflow='hidden';$('#closeDetails').focus();
  }
  function closeDetails(){modal.hidden=true;document.body.style.overflow=''}
  $('#statsButton').onclick=openDetails;$('#closeDetails').onclick=closeDetails;
  modal.onclick=e=>{if(e.target===modal)closeDetails()};
  document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!modal.hidden)closeDetails()});
});
