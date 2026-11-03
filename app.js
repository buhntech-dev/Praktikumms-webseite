const initial = [
 {id:"laemmlein",name:"Schreinerei Lämmlein",email:"heike@schreinerei-laemmlein.de",status:"sent",note:"Anfrage per Gmail versendet. Gewünscht: eine Woche zwischen 01.02.2027 und 26.02.2027.",start:"",end:"",details:""},
 {id:"pieper",name:"Schreinerei Pieper Lohbauer",email:"info@pieper-lohbauer.de",status:"sent",note:"Anfrage per Gmail versendet. Gewünscht: eine Woche zwischen 01.02.2027 und 26.02.2027.",start:"",end:"",details:""},
 {id:"wolf",name:"Wolf Holzwerkstätten",email:"info@wolfholzwerkstaetten.de",status:"sent",note:"Anfrage per Gmail versendet. Gewünscht: eine Woche zwischen 01.02.2027 und 26.02.2027.",start:"",end:"",details:""},
 {id:"bbw",name:"Berufsbildungswerk Bezirk Mittelfranken",email:"Erstkontakt.bbw-hsl@bezirk-mittelfranken.de",status:"sent",note:"Anfrage per Gmail versendet. Zusätzlich wurde eine weitere Anfrage an holztechnikbbw-hsl@bezirk-mittelfranken.de gesendet.",start:"",end:"",details:""}
];
const KEY="damain-praktikum-v1";
let businesses=JSON.parse(localStorage.getItem(KEY)||"null")||initial;
const labels={sent:"Anfrage versendet",waiting:"Warte auf Antwort",replied:"Antwort erhalten",accepted:"Zusage erhalten",rejected:"Absage erhalten"};
const $=id=>document.getElementById(id);
const save=()=>localStorage.setItem(KEY,JSON.stringify(businesses));
function esc(s=""){return String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));}
function render(){
 $("businessGrid").innerHTML=businesses.map(b=>`<article class="business-card">
  <div class="card-top"><div><h3>${esc(b.name)}</h3><div class="email">${esc(b.email||"Keine E-Mail hinterlegt")}</div></div><span class="status ${b.status}">${labels[b.status]}</span></div>
  ${b.note?`<p class="card-note">${esc(b.note)}</p>`:""}
  <div class="card-meta"><span>${b.start&&b.end?`${fmt(b.start)} – ${fmt(b.end)}`:"Termin noch offen"}</span><span>${b.details?"Angaben ergänzt":"Angaben offen"}</span></div>
  <div class="card-actions"><button class="btn ghost small" onclick="editBusiness('${b.id}')">Bearbeiten</button>${b.email?`<a class="btn ghost small" href="mailto:${encodeURIComponent(b.email)}?subject=${encodeURIComponent("Rückfrage zum Schülerpraktikum 2027")}">E-Mail öffnen</a>`:""}</div>
 </article>`).join("");
 $("countSent").textContent=businesses.filter(b=>["sent","waiting","replied","accepted","rejected"].includes(b.status)).length;
 $("countReplies").textContent=businesses.filter(b=>["replied","accepted","rejected"].includes(b.status)).length;
 $("countAccepted").textContent=businesses.filter(b=>b.status==="accepted").length;
 const events=businesses.filter(b=>b.start&&b.end);
 $("countEvents").textContent=events.length;
 $("calendarList").innerHTML=events.length?events.map(b=>`<div class="calendar-item"><div><strong>${esc(b.name)}</strong><small>${fmt(b.start)} – ${fmt(b.end)}</small></div><span class="status accepted">Eingetragen</span></div>`).join(""):`<div class="empty">Noch kein Praktikumstermin eingetragen. Sobald ein Betrieb zusagt, kannst du hier den bestätigten Zeitraum hinterlegen.</div>`;
}
function fmt(d){return new Date(d+"T12:00:00").toLocaleDateString("de-DE",{day:"2-digit",month:"2-digit",year:"numeric"});}
function editBusiness(id){const b=businesses.find(x=>x.id===id);if(!b)return; $("dialogTitle").textContent="Betrieb bearbeiten";$("businessId").value=b.id;$("businessName").value=b.name;$("businessEmail").value=b.email||"";$("businessStatus").value=b.status;$("businessNote").value=b.note||"";$("dateStart").value=b.start||"";$("dateEnd").value=b.end||"";$("companyDetails").value=b.details||"";$("deleteBtn").style.display="";$("businessDialog").showModal();}
window.editBusiness=editBusiness;
function newBusiness(){$("dialogTitle").textContent="Neuen Betrieb hinzufügen";$("businessForm").reset();$("businessId").value="";$("deleteBtn").style.display="none";$("businessDialog").showModal();}
$("addBtn").onclick=newBusiness;
$("businessForm").addEventListener("submit",e=>{e.preventDefault();const id=$("businessId").value||("betrieb-"+Date.now());const old=businesses.find(b=>b.id===id)||{};const b={...old,id,name:$("businessName").value.trim(),email:$("businessEmail").value.trim(),status:$("businessStatus").value,note:$("businessNote").value.trim(),start:$("dateStart").value,end:$("dateEnd").value,details:$("companyDetails").value.trim()};if(b.start&&b.end&&b.start>b.end){alert("Das Enddatum darf nicht vor dem Startdatum liegen.");return;}if(b.start&& (b.start<"2027-02-01"||b.start>"2027-02-26") || b.end&&(b.end<"2027-02-01"||b.end>"2027-02-26")){alert("Der Termin muss im gewünschten Zeitraum 01.02.2027 bis 26.02.2027 liegen.");return;}const i=businesses.findIndex(x=>x.id===id);if(i>=0)businesses[i]=b;else businesses.push(b);save();render();$("businessDialog").close();});
$("deleteBtn").onclick=()=>{const id=$("businessId").value;if(id&&confirm("Diesen Betrieb wirklich löschen?")){businesses=businesses.filter(b=>b.id!==id);save();render();$("businessDialog").close();}};
$("today").textContent=new Date().toLocaleDateString("de-DE");
document.querySelectorAll("[data-check]").forEach(el=>{el.checked=localStorage.getItem("check-"+el.dataset.check)==="true";el.onchange=()=>localStorage.setItem("check-"+el.dataset.check,el.checked);});
$("copyMail").onclick=async()=>{await navigator.clipboard.writeText($("mailText").textContent);toast("Anfragetext kopiert");};
function toast(t){const d=document.createElement("div");d.className="toast";d.textContent=t;document.body.append(d);setTimeout(()=>d.remove(),2200);}
$("icsBtn").onclick=()=>{const ev=businesses.filter(b=>b.start&&b.end);if(!ev.length){alert("Es gibt noch keine bestätigten Termine. Trage zuerst bei einem Betrieb Start und Ende ein.");return;}const stamp=s=>s.replaceAll("-","");let data="BEGIN:VCALENDAR\r\nVERSION:2.0\r\nPRODID:-//Praktikums-Dashboard//DE\r\n";ev.forEach(b=>{const end=new Date(b.end+"T12:00:00");end.setDate(end.getDate()+1);const endStr=end.toISOString().slice(0,10).replaceAll("-","");data+=`BEGIN:VEVENT\r\nUID:${b.id}@praktikum-dashboard\r\nDTSTAMP:${new Date().toISOString().replace(/[-:]/g,"").replace(/\.\d{3}/,"")}\r\nDTSTART;VALUE=DATE:${stamp(b.start)}\r\nDTEND;VALUE=DATE:${endStr}\r\nSUMMARY:Schülerpraktikum – ${b.name.replace(/[,;\\]/g," ")}\r\nDESCRIPTION:BGJ Holztechnik – Damain Dressel\r\nEND:VEVENT\r\n`;});data+="END:VCALENDAR";download(data,"praktikum-termine.ics","text/calendar");};
function download(data,name,type){const a=document.createElement("a");a.href=URL.createObjectURL(new Blob([data],{type}));a.download=name;a.click();URL.revokeObjectURL(a.href);}
$("exportBtn").onclick=()=>download(JSON.stringify({exportiert:new Date().toISOString(),betriebe:businesses},null,2),"praktikum-daten.json","application/json");
render();