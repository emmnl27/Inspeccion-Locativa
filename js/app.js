const HEADER_FIELDS = [
  {id:'empresa', label:'Empresa / Institución inspeccionada', type:'text', full:true},
  {id:'nit', label:'NIT', type:'text'},
  {id:'fecha', label:'Fecha de inspección', type:'date'},
  {id:'hora', label:'Hora', type:'time'},
  {id:'inspector', label:'Inspección realizada por', type:'text'},
  {id:'responsable', label:'Nombre responsable de la unidad', type:'text'},
  {id:'direccion', label:'Dirección', type:'text'},
  {id:'tel', label:'Teléfono', type:'text'},
];

const SECTIONS = [
  {id:'s1', num:'1', title:'Peligros físicos', type:'sn', items:[
    {id:'1.1', text:'Existe buena iluminación artificial y natural.'},
    {id:'1.2', text:'Las luminarias están en buen estado.'},
    {id:'1.3', text:'Las persianas, cortinas o protección de vidrios están en buen estado.'},
    {id:'1.4', text:'Hay buena ventilación en el área.'},
  ]},
  {id:'s2', num:'2', title:'Peligros locativos', type:'sn', items:[
    {id:'2.1', text:'Los muros están en buen estado (sin grietas, sin humedad, pintura en buen estado).'},
    {id:'2.2', text:'Escaleras en buen estado (pasamanos, antideslizantes).'},
    {id:'2.3', text:'Pisos en buen estado.'},
    {id:'2.4', text:'Ventanas, puertas en buen estado (manijas, chapas).'},
    {id:'2.5', text:'Techos en buen estado (sin goteras).'},
    {id:'2.6', text:'Áreas de circulación despejadas (escaleras, zonas de tránsito en almacén, etc).'},
    {id:'2.7', text:'Están claramente demarcadas las áreas de trabajo.'},
    {id:'2.8', text:'En general se observan las sillas en buen estado.'},
    {id:'2.9', text:'Las divisiones modulares, escritorio y cajones se encuentran en buenas condiciones.'},
  ]},
  {id:'s3', num:'3', title:'Peligros eléctricos', type:'sn', items:[
    {id:'3.1', text:'Cables eléctricos debidamente entubados.'},
    {id:'3.2', text:'No se observan cables expuestos, sueltos o colgando sin protección.'},
    {id:'3.3', text:'Tomas e interruptores en buen estado.'},
    {id:'3.4', text:'Se observa cajas o toma corriente sin sobrecarga.'},
    {id:'3.5', text:'Cables en buen estado.'},
    {id:'3.6', text:'Los tableros, cajas y circuitos están identificados.'},
    {id:'3.7', text:'Los tableros y cajas están libres de obstáculos.'},
    {id:'3.8', text:'Existe señalización de peligros.'},
  ]},
  {id:'s4', num:'4', title:'Peligros de seguridad', type:'sn', items:[
    {id:'4.1', text:'Los extintores son los adecuados al tipo de peligros del área.'},
    {id:'4.2', text:'Extintores de carga vigente.'},
    {id:'4.3', text:'Extintores libres de obstáculos.'},
    {id:'4.4', text:'Existe señalización de extintores.'},
    {id:'4.5', text:'Existe señalización en todas las instalaciones y en las salidas de emergencia.'},
    {id:'4.6', text:'Las áreas de salida de emergencia y punto de encuentro se encuentran despejadas.'},
    {id:'4.7', text:'El personal cuenta con los elementos de protección personal (EPP).'},
    {id:'4.8', text:'Hay camilla en el área (solo si es necesaria).'},
    {id:'4.9', text:'Hay botiquín y control de consumo.'},
    {id:'4.10', text:'Se tiene la lista de teléfonos de emergencia a la mano.'},
    {id:'4.11', text:'Se tiene la lista de centros de salud u hospitales de referencia cercanos.'},
  ]},
  {id:'s5', num:'5', title:'Peligros biológicos', type:'sn', items:[
    {id:'5.1', text:'El área está libre de insectos y roedores.'},
  ]},
  {id:'s6', num:'6', title:'Peligro biomecánico', type:'sn', items:[
    {id:'6.1', text:'Espacio de trabajo adecuado (miembros inferiores, desplazamientos y salidas del puesto de trabajo).'},
    {id:'6.2', text:'Altura adecuada de la pantalla del computador respecto a la horizontal.'},
    {id:'6.3', text:'Silla en buenas condiciones: espaldar, asiento, palas o base.'},
    {id:'6.4', text:'El peso de los objetos que levanta o almacena está dentro de los límites permisibles.'},
  ]},
  {id:'s7', num:'7', title:'Orden y aseo', type:'sn', items:[
    {id:'7.1', text:'El área se encuentra organizada.'},
    {id:'7.2', text:'Se realiza la clasificación de residuos sólidos en forma correcta.'},
    {id:'7.3', text:'Los residuos peligrosos se separan y disponen con empresas autorizadas.'},
    {id:'7.4', text:'El sitio inspeccionado se encuentra en buen estado de aseo y mantenimiento.'},
  ]},
  {id:'s8', num:'8', title:'Saneamiento básico', type:'sn', items:[
    {id:'8.1', text:'Servicios higiénicos en buen estado y limpieza.'},
    {id:'8.2', text:'Luminarias de baños en buen estado.'},
    {id:'8.3', text:'Hay papel higiénico, jabón, toallas y papeleras con pedal y tapa.'},
    {id:'8.4', text:'Están los inodoros limpios y en buen estado.'},
    {id:'8.5', text:'Se tienen reguladores o ahorradores de agua en los lavamanos y sanitarios.'},
  ]},
  {id:'s9', num:'9', title:'Peligro mecánico (herramientas de oficina)', type:'sn', items:[
    {id:'9.1', text:'Equipos y herramientas de oficina en buen estado.'},
    {id:'9.2', text:'Archivo rodante en buen estado.'},
  ]},
  {id:'s10', num:'10', title:'Capacitación y conocimiento', type:'sn', items:[
    {id:'10.1', text:'Los funcionarios cumplen con las normas de seguridad de su actividad.'},
    {id:'10.2', text:'Los funcionarios conocen los peligros a los que están expuestos.'},
    {id:'10.3', text:'El personal tiene claro qué hacer en caso de un incidente, accidente de trabajo y enfermedad laboral.'},
    {id:'10.4', text:'Los funcionarios conocen la Política de Seguridad y Salud en el Trabajo.'},
    {id:'10.5', text:'Los funcionarios saben cómo usar y cuidar sus EPP.'},
  ]},
  {id:'s11a', num:'11.1', title:'Medio ambiente — Agua y energía', type:'sn', items:[
    {id:'11.1.1', text:'Horno microondas (si aplica).'},
    {id:'11.1.2', text:'Nevera (si aplica).'},
    {id:'11.1.3', text:'Cafetera (si aplica).'},
    {id:'11.1.4', text:'Aire acondicionado (si aplica).'},
    {id:'11.1.5', text:'Impresora / fotocopiadora (si aplica).'},
    {id:'11.1.6', text:'Computador (si aplica).'},
  ]},
  {id:'s11b', num:'11.2', title:'Medio ambiente — Sustancias químicas', type:'sn', items:[
    {id:'11.2.1', text:'El área cuenta con las tarjetas de emergencia.'},
    {id:'11.2.2', text:'El área cuenta con las hojas de seguridad.'},
  ]},
];

const VALS_SN = [['si','SI'],['no','NO'],['na','N.A.']];
const VALS_ESTADO = [['bueno','Bueno'],['regular','Regular'],['malo','Deficiente']];


let config = {
  header: Object.fromEntries(HEADER_FIELDS.map(f=>[f.id,true])),
  headerDefaults: { empresa: '' },
  headerLabels: {},
  headerOrder: [],
  customHeaderFields: [],
  headerRemoved: [],
  items: Object.fromEntries(SECTIONS.flatMap(s=>s.items.map(i=>[i.id,true]))),
  customItems: {},
  itemsLabels: {},
  itemsOrder: {},
  sectionOrder: [],
  removedItems: {},
  sectionsRemoved: [],
  logo: null
};

function orderedHeaderFields(){
  const order = Array.isArray(config.headerOrder) ? config.headerOrder : [];
  const out = [];
  order.forEach(id=>{ const f = headerFieldById(id); if(f && !out.includes(f)) out.push(f); });
  allHeaderFields().forEach(f=>{ if(!out.includes(f)) out.push(f); });
  return out;
}
function customHeaderFields(){
  config.customHeaderFields = Array.isArray(config.customHeaderFields) ? config.customHeaderFields : [];
  return config.customHeaderFields;
}
function isCustomHeaderField(id){
  return customHeaderFields().some(f=>f.id===id);
}
function isHeaderRemoved(id){
  return Array.isArray(config.headerRemoved) && config.headerRemoved.some(r=>r.id===id);
}
function headerFieldById(id){
  if(isHeaderRemoved(id)) return null;
  const d = HEADER_FIELDS.find(f=>f.id===id);
  if(d) return d;
  return customHeaderFields().find(f=>f.id===id) || null;
}
function allHeaderFields(){
  const out = HEADER_FIELDS.filter(f=>!isHeaderRemoved(f.id));
  customHeaderFields().forEach(f=>{ if(!out.some(x=>x.id===f.id)) out.push(f); });
  return out;
}
function newHeaderFieldId(){
  return 'hf' + Date.now().toString(36) + Math.random().toString(36).slice(2,6);
}
function addCustomHeaderField(label, type, full){
  const t = (label||'').trim();
  if(!t) return null;
  const f = { id:newHeaderFieldId(), label:t, type:(type==='date'||type==='time')?type:'text', full:!!full };
  customHeaderFields().push(f);
  config.header[f.id] = true;
  configDirty = true;
  return f;
}
function deleteHeaderField(id){
  const f = headerFieldById(id);
  if(!f) return;
  config.headerRemoved = Array.isArray(config.headerRemoved) ? config.headerRemoved : [];
  if(!config.headerRemoved.some(r=>r.id===id)){
    config.headerRemoved.push({ id:f.id, label:fieldTitle(f), type:f.type||'text', full:!!f.full, custom:isCustomHeaderField(id) });
  }
  config.header[id] = false;
  if(isCustomHeaderField(id)){
    config.customHeaderFields = customHeaderFields().filter(x=>x.id!==id);
  }
  if(Array.isArray(config.headerOrder)) config.headerOrder = config.headerOrder.filter(x=>x!==id);
  configDirty = true;
}
function restoreHeaderField(id){
  const arr = Array.isArray(config.headerRemoved) ? config.headerRemoved : [];
  const idx = arr.findIndex(r=>r.id===id);
  if(idx<0) return;
  const r = arr[idx];
  if(r.custom){
    customHeaderFields().push({ id:r.id, label:r.label, type:r.type||'text', full:!!r.full });
  }else{
    config.headerLabels = config.headerLabels || {};
    const def = HEADER_FIELDS.find(f=>f.id===id);
    if(def && r.label && r.label!==def.label) config.headerLabels[id] = r.label;
  }
  arr.splice(idx,1);
  config.header[id] = true;
  configDirty = true;
}
function fieldTitle(f){
  const custom = config.headerLabels && config.headerLabels[f.id];
  return (custom && custom.trim()) ? custom.trim() : f.label;
}
function moveHeaderField(id, dir){
  const fields = orderedHeaderFields();
  const idx = fields.findIndex(f=>f.id===id);
  const target = dir==='up' ? idx-1 : idx+1;
  if(idx<0 || target<0 || target>=fields.length) return;
  const a = fields[idx], b = fields[target];
  fields[idx] = b; fields[target] = a;
  config.headerOrder = fields.map(f=>f.id);
  configDirty = true;
  renderHeaderConfig();
}

function orderedSections(){
  const order = Array.isArray(config.sectionOrder) ? config.sectionOrder : [];
  const out = [];
  order.forEach(id=>{ const s = SECTIONS.find(x=>x.id===id); if(s && !out.includes(s) && !isSectionRemoved(id)) out.push(s); });
  SECTIONS.forEach(s=>{ if(!out.includes(s) && !isSectionRemoved(s.id)) out.push(s); });
  return out;
}
function isSectionRemoved(id){
  return Array.isArray(config.sectionsRemoved) && config.sectionsRemoved.includes(id);
}
function removeSection(secId){
  config.sectionsRemoved = Array.isArray(config.sectionsRemoved) ? config.sectionsRemoved : [];
  if(!config.sectionsRemoved.includes(secId)) config.sectionsRemoved.push(secId);
  configDirty = true;
}
function restoreSection(secId){
  config.sectionsRemoved = (Array.isArray(config.sectionsRemoved)?config.sectionsRemoved:[]).filter(x=>x!==secId);
  configDirty = true;
}
function sectionDisplayNumber(secId){
  return orderedSections().findIndex(s=>s.id===secId)+1;
}
function activeSections(){
  return orderedSections().map(s=>({...s, items: sectionItemList(s.id).filter(i=>config.items[i.id])})).filter(s=>s.items.length>0);
}
function moveSection(secId, dir){
  const list = orderedSections();
  const idx = list.findIndex(s=>s.id===secId);
  const target = dir==='up' ? idx-1 : idx+1;
  if(idx<0 || target<0 || target>=list.length) return;
  const a = list[idx], b = list[target];
  list[idx] = b; list[target] = a;
  config.sectionOrder = list.map(s=>s.id);
  configDirty = true;
}
function isRemovedDefault(secId, id){
  return !!(config.removedItems && config.removedItems[secId] && config.removedItems[secId].includes(id));
}
function removeDefaultItem(secId, id){
  config.removedItems = config.removedItems || {};
  if(!Array.isArray(config.removedItems[secId])) config.removedItems[secId] = [];
  if(!config.removedItems[secId].includes(id)) config.removedItems[secId].push(id);
  config.items[id] = false;
  delete config.itemsLabels[id];
  configDirty = true;
}
function restoreDefaultItem(secId, id){
  if(config.removedItems && config.removedItems[secId]){
    config.removedItems[secId] = config.removedItems[secId].filter(x=>x!==id);
  }
  config.items[id] = true;
  configDirty = true;
}
function deleteItemFromConfig(secId, id){
  if(isCustomItem(secId, id)) deleteCustomItem(secId, id);
  else removeDefaultItem(secId, id);
}

function secById(id){ return SECTIONS.find(s=>s.id===id); }
function customItemsOf(secId){
  config.customItems = config.customItems || {};
  if(!Array.isArray(config.customItems[secId])) config.customItems[secId] = [];
  return config.customItems[secId];
}
function isCustomItem(secId, id){
  return customItemsOf(secId).some(i=>i.id===id);
}
function itemTextOf(secId, id){
  const lab = config.itemsLabels && config.itemsLabels[id];
  if(lab && lab.trim()) return lab.trim();
  const d = secById(secId).items.find(i=>i.id===id);
  if(d) return d.text;
  const c = customItemsOf(secId).find(i=>i.id===id);
  return c ? c.text : '';
}
function sectionItemList(secId){
  const defIds = secById(secId).items.map(i=>i.id).filter(id=> !isRemovedDefault(secId,id));
  const cusIds = customItemsOf(secId).map(i=>i.id);
  const known = id=> defIds.includes(id) || cusIds.includes(id);
  const order = Array.isArray(config.itemsOrder && config.itemsOrder[secId]) ? config.itemsOrder[secId] : [];
  const ids = [];
  order.forEach(id=>{ if(known(id) && !ids.includes(id)) ids.push(id); });
  defIds.forEach(id=>{ if(!ids.includes(id)) ids.push(id); });
  cusIds.forEach(id=>{ if(!ids.includes(id)) ids.push(id); });
  return ids.map(id=>({ id, text: itemTextOf(secId, id) }));
}
function allItemIds(){
  return orderedSections().flatMap(s=> sectionItemList(s.id).map(i=>i.id));
}
function newCustomItemId(secId){
  const n = String(secById(secId).items.length + customItemsOf(secId).length + 1);
  const t = Date.now().toString(36).slice(-4);
  return `${secId}.n${t}${n}`;
}
function moveSectionItem(secId, id, dir){
  const items = sectionItemList(secId);
  const idx = items.findIndex(i=>i.id===id);
  const target = dir==='up' ? idx-1 : idx+1;
  if(idx<0 || target<0 || target>=items.length) return;
  const a = items[idx], b = items[target];
  items[idx] = b; items[target] = a;
  config.itemsOrder = config.itemsOrder || {};
  config.itemsOrder[secId] = items.map(i=>i.id);
  configDirty = true;
}
function addSectionItem(secId, text){
  const t = (text||'').trim();
  if(!t) return;
  const id = newCustomItemId(secId);
  customItemsOf(secId).push({ id, text: t });
  config.items[id] = true;
  configDirty = true;
}
function syncCustomText(secId, id, text){
  customItemsOf(secId).forEach(i=>{ if(i.id===id) i.text = text; });
}
function deleteCustomItem(secId, id){
  const arr = customItemsOf(secId);
  const idx = arr.findIndex(i=>i.id===id);
  if(idx<0) return;
  arr.splice(idx,1);
  if(config.itemsLabels) delete config.itemsLabels[id];
  delete config.items[id];
  configDirty = true;
}
function deleteItemFromForm(secId, id){
  if(isCustomItem(secId, id)) deleteCustomItem(secId, id);
  else config.items[id] = false;
  configDirty = true;
}

const REQUIRED_HEADER = ['empresa','inspector'];
let editId = null;
let currentView = 'nuevo';
let recordDirty = false;
let configDirty = false;
let fromDraft = false;
let histQuery = '';
let cfgOpen = {};
let _draftTimer = null;
const ITEM_SEC = {};
SECTIONS.forEach(s=> s.items.forEach(i=> ITEM_SEC[i.id] = s.id));

let record = { header:{}, values:{} };
resetRecord();

function pad2(n){ return String(n).padStart(2,'0'); }
function isoDateNow(){ const d=new Date(); return `${d.getFullYear()}-${pad2(d.getMonth()+1)}-${pad2(d.getDate())}`; }
function isoTimeNow(){ const d=new Date(); return `${pad2(d.getHours())}:${pad2(d.getMinutes())}`; }




function defaultValueFor(field){
  const explicit = config.headerDefaults[field.id];
  if(explicit) return explicit;
  if(field.id==='fecha' || field.type==='date') return isoDateNow();
  if(field.id==='hora' || field.type==='time') return isoTimeNow();
  return '';
}

function resetRecord(){
  record = { header:{}, values:{}, savedAt:null, anexos:[] };
  allHeaderFields().forEach(f=> record.header[f.id] = defaultValueFor(f));
  allItemIds().forEach(id=> record.values[id] = {answer:'', obs:''});
  editId = null;
  recordDirty = false;
  fromDraft = false;
}


const DB_NAME = 'inspeccion_locativa_db';
const DB_STORE = 'kv';
let _dbPromise = null;

function openDB(){
  if(_dbPromise) return _dbPromise;
  _dbPromise = new Promise((resolve, reject)=>{
    if(!('indexedDB' in window)){
      reject(new Error('IndexedDB no está disponible en este navegador.'));
      return;
    }
    const req = indexedDB.open(DB_NAME, 1);
    req.onupgradeneeded = ()=>{ req.result.createObjectStore(DB_STORE, {keyPath:'key'}); };
    req.onsuccess = ()=> resolve(req.result);
    req.onerror = ()=> reject(req.error);
  });
  return _dbPromise;
}


const storage = {
  async get(key){
    const db = await openDB();
    return new Promise((resolve, reject)=>{
      const tx = db.transaction(DB_STORE, 'readonly');
      const req = tx.objectStore(DB_STORE).get(key);
      req.onsuccess = ()=> resolve(req.result ? {key, value: req.result.value} : null);
      req.onerror = ()=> reject(req.error);
    });
  },
  async set(key, value){
    const db = await openDB();
    return new Promise((resolve, reject)=>{
      const tx = db.transaction(DB_STORE, 'readwrite');
      tx.objectStore(DB_STORE).put({key, value});
      tx.oncomplete = ()=> resolve({key, value});
      tx.onerror = ()=> reject(tx.error);
    });
  },
  async delete(key){
    const db = await openDB();
    return new Promise((resolve, reject)=>{
      const tx = db.transaction(DB_STORE, 'readwrite');
      tx.objectStore(DB_STORE).delete(key);
      tx.oncomplete = ()=> resolve({key, deleted:true});
      tx.onerror = ()=> reject(tx.error);
    });
  },
  async list(prefix){
    const db = await openDB();
    return new Promise((resolve, reject)=>{
      const tx = db.transaction(DB_STORE, 'readonly');
      const req = tx.objectStore(DB_STORE).getAllKeys();
      req.onsuccess = ()=> resolve({ keys: req.result.filter(k=> !prefix || k.startsWith(prefix)) });
      req.onerror = ()=> reject(req.error);
    });
  }
};


async function loadConfig(){
  try{
    const res = await storage.get('config');
    if(res && res.value){
      const saved = JSON.parse(res.value);
      config.header = Object.assign(config.header, saved.header||{});
      config.headerDefaults = Object.assign({}, config.headerDefaults, saved.headerDefaults||{});
      config.headerLabels = Object.assign({}, config.headerLabels, saved.headerLabels||{});
      config.customHeaderFields = Array.isArray(saved.customHeaderFields) ? saved.customHeaderFields.map(f=>({id:f.id, label:f.label, type:f.type||'text', full:!!f.full})) : config.customHeaderFields;
      config.headerRemoved = Array.isArray(saved.headerRemoved) ? saved.headerRemoved : config.headerRemoved;
      config.headerOrder = Array.isArray(saved.headerOrder) ? saved.headerOrder.filter(id=>allHeaderFields().some(f=>f.id===id)) : config.headerOrder;
      config.items = Object.assign(config.items, saved.items||{});
      config.customItems = Object.assign(config.customItems, saved.customItems||{});
      config.itemsLabels = Object.assign(config.itemsLabels, saved.itemsLabels||{});
      config.itemsOrder = Object.assign(config.itemsOrder, saved.itemsOrder||{});
      config.removedItems = Object.assign(config.removedItems, saved.removedItems||{});
      config.sectionOrder = Array.isArray(saved.sectionOrder) ? saved.sectionOrder.filter(id=>SECTIONS.some(s=>s.id===id)) : config.sectionOrder;
      config.sectionsRemoved = Array.isArray(saved.sectionsRemoved) ? saved.sectionsRemoved.filter(id=>SECTIONS.some(s=>s.id===id)) : config.sectionsRemoved;
      config.logo = (saved.logo && saved.logo.dataUrl) ? saved.logo : config.logo;
    }
  }catch(e){  }
}
async function saveConfigToStorage(){
  try{
    await storage.set('config', JSON.stringify(config));
    return true;
  }catch(e){ console.error(e); return false; }
}
async function saveRecordToStorage(rec){
  const key = 'record:' + rec.id;
  await storage.set(key, JSON.stringify(rec));
}
async function listAllRecords(){
  try{
    const res = await storage.list('record:');
    if(!res || !res.keys) return [];
    const recs = [];
    for(const k of res.keys){
      try{
        const r = await storage.get(k);
        if(r && r.value) recs.push(JSON.parse(r.value));
      }catch(e){}
    }
    recs.sort((a,b)=> (b.savedAt||0) - (a.savedAt||0));
    return recs;
  }catch(e){ return []; }
}
async function listRecords(){
  const all = await listAllRecords();
  return all.filter(r=> !r.deletedAt);
}
async function deleteRecord(id){
  try{
    const r = await storage.get('record:'+id);
    if(r && r.value){
      let rec = r.value;
      if(typeof rec === 'string'){ try{ rec = JSON.parse(rec); }catch(e){} }
      if(rec && typeof rec === 'object'){
        rec.deletedAt = Date.now();
        await saveRecordToStorage(rec);
        return;
      }
    }
  }catch(e){}
}
async function listDeletedRecords(){
  const all = await listAllRecords();
  return all.filter(r=> r.deletedAt).sort((a,b)=> (b.deletedAt||0) - (a.deletedAt||0));
}
async function restoreDeletedRecord(id){
  try{
    const r = await storage.get('record:'+id);
    if(!r || !r.value) return false;
    const rec = JSON.parse(r.value);
    if(!rec.deletedAt) return false;
    delete rec.deletedAt;
    await saveRecordToStorage(rec);
    return true;
  }catch(e){ return false; }
}
async function migrateLegacyDeleted(){
  try{
    const res = await storage.list('deleted_record:');
    if(!res || !res.keys || !res.keys.length) return;
    for(const k of res.keys){
      try{
        const r = await storage.get(k);
        if(r && r.value){
          const rec = JSON.parse(r.value);
          if(rec && typeof rec === 'object'){
            if(!rec.deletedAt) rec.deletedAt = Date.now();
            await saveRecordToStorage(rec);
          }
        }
        await storage.delete(k);
      }catch(e){}
    }
  }catch(e){}
}

function formatTime(v){
  if(!v) return '—';
  const d = new Date(`1970-01-01T${v}`);
  if(isNaN(d.getTime())) return '—';
  return d.toLocaleTimeString('es-CO', {hour:'numeric', minute:'2-digit', hour12:true});
}

function loadRecordIntoForm(rec){
  record = { header:{}, values:{}, savedAt: rec.savedAt || Date.now(), anexos: Array.isArray(rec.anexos) ? rec.anexos : [] };
  allHeaderFields().forEach(f=> record.header[f.id] = (rec.header && rec.header[f.id] !== undefined) ? rec.header[f.id] : defaultValueFor(f));
  allItemIds().forEach(id=> record.values[id] = (rec.values && rec.values[id]) ? {answer:rec.values[id].answer||'', obs:rec.values[id].obs||''} : {answer:'', obs:''});
  editId = rec.id;
  recordDirty = false;
  fromDraft = false;
}

function scheduleDraftSave(){
  clearTimeout(_draftTimer);
  _draftTimer = setTimeout(saveDraft, 1200);
}
async function saveDraft(){
  try{ await storage.set('draft', JSON.stringify({editId, savedAt: record.savedAt, header: record.header, values: record.values, anexos: record.anexos})); }catch(e){}
}
async function clearDraft(){
  try{ await storage.delete('draft'); }catch(e){}
}
async function loadDraft(){
  try{
    const res = await storage.get('draft');
    if(!res || !res.value) return false;
    const d = JSON.parse(res.value);
    if(!d || typeof d.values !== 'object') return false;
    record.header = Object.fromEntries(allHeaderFields().map(f=>[f.id, defaultValueFor(f)]));
    Object.assign(record.header, d.header||{});
    record.values = {};
    allItemIds().forEach(id=> record.values[id] = (d.values[id]) ? {answer:d.values[id].answer||'', obs:d.values[id].obs||''} : {answer:'', obs:''});
    record.savedAt = d.savedAt || null;
    record.anexos = Array.isArray(d.anexos) ? d.anexos : [];
    editId = d.editId || null;
    recordDirty = false;
    fromDraft = true;
    return true;
  }catch(e){ return false; }
}

function exportBackup(){
  Promise.all([listRecords(), listDeletedRecords()]).then(([recs, deleted])=>{
    const data = {
      app:'inspeccion_locativa', version:3, exportedAt: Date.now(),
      config: JSON.parse(JSON.stringify(config)),
      records: recs,
      deletedRecords: deleted
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], {type:'application/json'});
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = `respaldo_inspecciones_${isoDateNow()}.json`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(a.href);
    const total = recs.length + deleted.length;
    showToast(total ? `Respaldo completo: configuración + ${total} registros (${deleted.length} eliminados)` : 'Configuración exportada');
  });
}
function importBackup(){
  const inp = document.createElement('input');
  inp.type = 'file';
  inp.accept = '.json,application/json';
  inp.onchange = async ()=>{
    const f = inp.files[0];
    if(!f) return;
    try{
      const data = JSON.parse(await f.text());
      if(!data) throw new Error('formato');

      let hasConfig = false;
      if(data.config && typeof data.config === 'object'){
        Object.assign(config, data.config);
        await saveConfigToStorage();
        hasConfig = true;
      }

      let n = 0;
      const recordsArr = Array.isArray(data.records) ? data.records : [];
      for(const r of recordsArr){
        if(r && r.id){
          await saveRecordToStorage(Object.assign({}, r, {
            header: (r.header && typeof r.header === 'object') ? r.header : {},
            values: (r.values && typeof r.values === 'object') ? r.values : {},
            anexos: Array.isArray(r.anexos) ? r.anexos : [],
            savedAt: r.savedAt || Date.now(),
            updatedAt: r.updatedAt || Date.now()
          }));
          n++;
        }
      }
      let dn = 0;
      const deletedArr = Array.isArray(data.deletedRecords) ? data.deletedRecords : [];
      for(const r of deletedArr){
        if(r && r.id){
          const rec = Object.assign({}, r, {
            header: (r.header && typeof r.header === 'object') ? r.header : {},
            values: (r.values && typeof r.values === 'object') ? r.values : {},
            anexos: Array.isArray(r.anexos) ? r.anexos : [],
            savedAt: r.savedAt || Date.now(),
            updatedAt: r.updatedAt || Date.now()
          });
          if(!rec.deletedAt) rec.deletedAt = Date.now();
          await saveRecordToStorage(rec);
          dn++;
        }
      }
      const parts = [];
      if(hasConfig) parts.push('configuración');
      if(n) parts.push(`${n} registros`);
      if(dn) parts.push(`${dn} en respaldo`);
      showToast(parts.length ? `Importado: ${parts.join(', ')}` : 'El archivo no contiene datos');
      if(hasConfig) switchView('nuevo');
      else renderHistorial();
    }catch(e){
      showToast('Archivo de respaldo inválido');
    }
  };
  inp.click();
}


function renderHeaderCard(){
  const box = document.getElementById('header-card');
  const active = orderedHeaderFields().filter(f=>config.header[f.id]);
  if(active.length===0){
    box.innerHTML = '<div class="empty-state"><h3>No hay campos de encabezado activos</h3><p>Actívalos desde Configuración.</p></div>';
    return;
  }
  box.innerHTML = '<div class="card-title"><span class="badge">Encabezado</span> Datos generales</div><div class="field-grid" id="header-fields"></div>';
  const grid = document.getElementById('header-fields');
  active.forEach(f=>{
    const wrap = document.createElement('div');
    wrap.className = 'field' + (f.full ? ' full':'');
    const inputType = f.type==='date' ? 'date' : f.type==='time' ? 'time' : 'text';
    wrap.innerHTML = `<label for="hdr-${f.id}">${fieldTitle(f)}</label><input id="hdr-${f.id}" type="${inputType}" data-field="${f.id}" value="${escapeAttr(record.header[f.id]||'')}">`;
    grid.appendChild(wrap);
  });
  grid.querySelectorAll('input').forEach(inp=>{
    inp.addEventListener('input', e=>{
      record.header[e.target.dataset.field] = e.target.value;
      recordDirty = true;
      scheduleDraftSave();
      updateStatus();
    });
  });
}

function renderAnexos(){
  const card = document.createElement('div');
  card.className = 'card anexos-card';
  const items = Array.isArray(record.anexos) ? record.anexos : [];
  card.innerHTML = `
    <div class="card-title"><span class="badge">Anexos</span> Fotos y evidencias</div>
    <p class="cfg-hint">Sube imágenes del lugar inspeccionado; se incluirán como anexos en el PDF.</p>
    <div style="display:flex; align-items:center; gap:10px; margin-top:10px;">
      <button type="button" class="btn btn-primary anexos-upload">Subir imágenes</button>
      <input type="file" class="anexos-file" multiple accept="image/*" style="display:none">
    </div>
    <div class="anexos-grid">${items.length ? items.map(ax=>`
      <div class="anexo-item">
        <img src="${ax.dataUrl}" alt="${escapeAttr(ax.name||'anexo')}" class="anexo-thumb">
        <div class="anexo-name">${escapeHtml(ax.name||'')}</div>
        <button type="button" class="cfg-del-btn anexo-del" data-anexodel="${ax.id}" title="Quitar imagen" aria-label="Quitar imagen">✕</button>
      </div>`).join('') : '<div class="anexo-empty">Sin imágenes todavía.</div>'}
    </div>`;
  const fileInp = card.querySelector('.anexos-file');
  const upBtn = card.querySelector('.anexos-upload');
  if(upBtn && fileInp) upBtn.addEventListener('click', ()=> fileInp.click());
  if(fileInp){
    fileInp.addEventListener('change', async e=>{
      const files = e.target.files ? Array.from(e.target.files) : [];
      if(!files.length) return;
      await addImages(files);
      fileInp.value = '';
    });
  }
  card.querySelectorAll('.anexo-del').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      record.anexos = (record.anexos||[]).filter(a=>a.id!==btn.dataset.anexodel);
      recordDirty = true;
      scheduleDraftSave();
      renderSections();
      updateStatus();
    });
  });
  return card;
}

function readImageFile(file){
  return new Promise((res, rej)=>{
    const fr = new FileReader();
    fr.onload = ()=> res(fr.result);
    fr.onerror = rej;
    fr.readAsDataURL(file);
  });
}
function getImgSize(dataUrl){
  return new Promise(res=>{
    try{
      const img = new Image();
      img.onload = ()=> res({w: img.naturalWidth||0, h: img.naturalHeight||0});
      img.onerror = ()=> res({w:0, h:0});
      img.src = dataUrl;
    }catch(e){ res({w:0, h:0}); }
  });
}
function imgFormat(dataUrl){
  const m = /^data:image\/(\w+);/.exec(dataUrl||'');
  const f = m ? m[1].toUpperCase() : 'JPEG';
  return f==='JPG' ? 'JPEG' : (f==='PNG' ? 'PNG' : (f==='WEBP' ? 'WEBP' : 'JPEG'));
}
async function addImages(files){
  for(const f of files){
    if(!f.type || !String(f.type).startsWith('image/')) continue;
    if(f.size > 8*1024*1024){
      showToast('Imagen muy grande (máx. 8 MB): '+f.name);
      continue;
    }
    try{
      const dataUrl = await readImageFile(f);
      const dim = await getImgSize(dataUrl);
      record.anexos = record.anexos || [];
      record.anexos.push({ id:'img'+Date.now()+(Math.floor(Math.random()*9999)), name:f.name||'', dataUrl, w:dim.w, h:dim.h });
      recordDirty = true;
      scheduleDraftSave();
    }catch(e){}
  }
  renderSections();
  updateStatus();
}

function renderSections(){
  const container = document.getElementById('sections-container');
  container.innerHTML = '';
  allItemIds().forEach(id=>{ if(!record.values[id]) record.values[id] = {answer:'', obs:''}; });
  const visibleSections = activeSections();

  if(visibleSections.length===0){
    container.innerHTML = '<div class="card"><div class="empty-state"><h3>No hay elementos activos</h3><p>Ve a Configuración y activa al menos un elemento de la lista de chequeo.</p></div></div>';
    container.appendChild(renderAnexos());
    return;
  }

  visibleSections.forEach((sec, sidx)=>{
    const card = document.createElement('div');
    card.className = 'card';
    const sItems = sec.items;
    const sDone = sItems.filter(i=>record.values[i.id] && record.values[i.id].answer).length;
    const sPct = sItems.length ? Math.round(sDone/sItems.length*100) : 0;
    card.innerHTML = `<div class="card-title"><span class="badge">${sidx+1}</span> ${sec.title}
      <div class="sec-progress"><div class="sec-progress-bar"><div class="sec-progress-fill" id="secbar-${sec.id}" style="width:${sPct}%"></div></div><span class="sec-count" id="seccnt-${sec.id}">${sDone}/${sItems.length}</span></div>
    </div>`;
    const vals = sec.type==='estado' ? VALS_ESTADO : VALS_SN;
    sec.items.forEach((item, idx)=>{
      const row = document.createElement('div');
      row.className = 'item-row';
      const segBtns = vals.map(([v,label])=>{
        const cls = 'val-'+v;
        const on = record.values[item.id].answer===v ? ' on':'';
        return `<button type="button" class="${cls}${on}" data-item="${item.id}" data-val="${v}" aria-pressed="${on?'true':'false'}">${label}</button>`;
      }).join('');
      row.innerHTML = `
        <div class="item-row-top">
          <div class="id">${sidx+1}.${idx+1}</div>
          <div class="txt">${item.text}</div>
          <button type="button" class="item-del" data-idelform="${item.id}" data-isec="${sec.id}" title="Eliminar este punto" aria-label="Eliminar este punto">✕</button>
          <div class="seg" role="group" aria-label="Respuesta para ${item.id}">${segBtns}</div>
        </div>
        <textarea class="obs" placeholder="Observaciones (opcional)" data-obs="${item.id}" aria-label="Observaciones de ${item.id}">${escapeHtml(record.values[item.id].obs||'')}</textarea>
      `;
      card.appendChild(row);
    });
    const addBox = document.createElement('div');
    addBox.className = 'section-add';
    addBox.innerHTML = `<input class="punto-add-input" type="text" placeholder="+ Nuevo punto a evaluar…" data-puntoadd="${sec.id}"><button type="button" class="btn btn-primary punto-add-btn" data-puntoaddbtn="${sec.id}">Agregar</button>`;
    card.appendChild(addBox);
    container.appendChild(card);
  });

  container.appendChild(renderAnexos());

  container.querySelectorAll('.seg button').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      const id = btn.dataset.item, val = btn.dataset.val;
      record.values[id].answer = record.values[id].answer===val ? '' : val;
      container.querySelectorAll(`.seg button[data-item="${id}"]`).forEach(b=>{
        const on = b.dataset.val===record.values[id].answer;
        b.classList.toggle('on', on);
        b.setAttribute('aria-pressed', on?'true':'false');
      });
      updateSectionProgressFor(id);
      recordDirty = true;
      scheduleDraftSave();
      updateStatus();
    });
  });
  container.querySelectorAll('.seg').forEach(seg=>{
    seg.addEventListener('keydown', e=>{
      if(e.key!=='ArrowRight' && e.key!=='ArrowLeft') return;
      e.preventDefault();
      const btns = [...seg.querySelectorAll('button')];
      const idx = btns.indexOf(document.activeElement);
      if(idx<0) return;
      const n = e.key==='ArrowRight' ? (idx+1)%btns.length : (idx-1+btns.length)%btns.length;
      btns[n].focus();
    });
  });
  container.querySelectorAll('textarea.obs').forEach(ta=>{
    ta.addEventListener('input', e=>{
      record.values[e.target.dataset.obs].obs = e.target.value;
      recordDirty = true;
      scheduleDraftSave();
      updateStatus();
    });
  });
  container.querySelectorAll('.item-del').forEach(delBtn=>{
    delBtn.addEventListener('click', ()=>{
      const sid = delBtn.dataset.isec, id = delBtn.dataset.idelform;
      const it = sectionItemList(sid).find(i=>i.id===id);
      const custom = isCustomItem(sid, id);
      const t = (it && it.text) || id;
      if(!confirm(custom ? '¿Eliminar el punto "'+t+'"?'
                          : '¿Ocultar el punto "'+t+'"? Puedes reactivarlo en Configuración.')) return;
      deleteItemFromForm(sid, id);
      renderSections();
      renderSectionsConfig();
      updateStatus();
    });
  });
  container.querySelectorAll('.punto-add-btn').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      const sid = btn.dataset.puntoaddbtn;
      const inp = btn.parentElement.querySelector('.punto-add-input');
      if(inp && !(inp.value||'').trim()) return;
      addSectionItem(sid, inp.value);
      renderSections();
      renderSectionsConfig();
      updateStatus();
    });
  });
  container.querySelectorAll('.punto-add-input').forEach(inp=>{
    inp.addEventListener('keydown', e=>{
      if(e.key!=='Enter') return;
      e.preventDefault();
      const sid = e.target.dataset.puntoadd;
      if(!(e.target.value||'').trim()) return;
      addSectionItem(sid, e.target.value);
      renderSections();
      renderSectionsConfig();
      updateStatus();
    });
  });
}

function missingRequired(){
  return REQUIRED_HEADER.filter(id=> config.header[id] && !(record.header[id]||'').trim());
}
function highlightMissing(){
  const wrap = document.getElementById('header-fields');
  if(!wrap) return;
  wrap.querySelectorAll('.field').forEach(f=> f.classList.remove('error'));
  missingRequired().forEach(id=>{
    const inp = wrap.querySelector(`input[data-field="${id}"]`);
    if(inp && inp.closest('.field')) inp.closest('.field').classList.add('error');
  });
}
function updateStatus(){
  const known = new Set(allItemIds());
  const allIds = Object.keys(record.values).filter(id=> config.items[id] && known.has(id));
  const answered = allIds.filter(id=>record.values[id].answer);
  const total = allIds.length, done = answered.length;
  const pct = total ? Math.round(done/total*100) : 0;
  const bar = document.getElementById('progress-bar');
  if(bar){
    bar.style.width = pct+'%';
    bar.classList.toggle('low', pct>0 && pct<50);
    bar.classList.toggle('warm', pct>=50 && pct<100);
  }
  const status = document.getElementById('status-text');
  status.textContent = `${editId ? 'Editando · ':''}${done} de ${total} elementos diligenciados`;
  const btnSave = document.getElementById('btn-save');
  if(btnSave){
    btnSave.disabled = missingRequired().length>0 || total===0;
    btnSave.textContent = editId ? 'Guardar cambios' : 'Guardar registro';
  }
  highlightMissing();
}
function updateSectionProgressFor(itemId){
  const secId = ITEM_SEC[itemId];
  if(!secId || isSectionRemoved(secId)) return;
  const bar = document.getElementById('secbar-'+secId);
  const cnt = document.getElementById('seccnt-'+secId);
  if(!bar || !cnt) return;
  const items = sectionItemList(secId).filter(i=>config.items[i.id]);
  const count = items.filter(i=>record.values[i.id] && record.values[i.id].answer).length;
  bar.style.width = items.length ? Math.round(count/items.length*100)+'%' : '0%';
  cnt.textContent = `${count}/${items.length}`;
}


function renderHeaderConfig(){
  const box = document.getElementById('header-config');
  const fields = orderedHeaderFields();
  const removed = Array.isArray(config.headerRemoved) ? config.headerRemoved : [];
  box.innerHTML = fields.map((f,i)=>{
    const isDateOrTime = f.id==='fecha' || f.id==='hora' || f.type==='date' || f.type==='time';
    const inputType = f.type==='date' ? 'date' : f.type==='time' ? 'time' : 'text';
    const placeholder = isDateOrTime ? 'Usar fecha/hora actual' : 'Sin valor predeterminado';
    const val = config.headerDefaults[f.id] || '';
    const hasCustom = config.headerLabels && config.headerLabels[f.id] !== undefined;
    const titleVal = hasCustom ? config.headerLabels[f.id] : f.label;
    return `
    <div class="cfg-item cfg-item-header">
      <input type="checkbox" data-hcfg="${f.id}" ${config.header[f.id] ? 'checked':''}>
      <input class="hdr-title" type="text" maxlength="90" placeholder="Título del campo" data-hlabel="${f.id}" value="${escapeAttr(titleVal)}">
      <input class="hdr-default" type="${inputType}" placeholder="${placeholder}" data-hdefault="${f.id}" value="${escapeAttr(val)}">
      <div class="cfg-move">
        <button type="button" class="cfg-move-btn" data-move="${f.id}" data-dir="up" title="Mover hacia arriba" aria-label="Mover hacia arriba" ${i===0?'disabled':''}>▲</button>
        <button type="button" class="cfg-move-btn" data-move="${f.id}" data-dir="down" title="Mover hacia abajo" aria-label="Mover hacia abajo" ${i===fields.length-1?'disabled':''}>▼</button>
      </div>
      <button type="button" class="cfg-del-btn" data-hdel="${f.id}" title="Eliminar campo del encabezado (lo conservamos en el respaldo)" aria-label="Eliminar campo del encabezado">✕</button>
    </div>`;
  }).join('')
  + `<div class="cfg-add">
      <input class="add-hdr-label" type="text" placeholder="Nuevo campo del encabezado (ej. Cargo del inspector)…" data-hadd="1">
      <select class="add-hdr-type" aria-label="Tipo de campo del encabezado">
        <option value="text">Texto</option>
        <option value="date">Fecha</option>
        <option value="time">Hora</option>
      </select>
      <label class="add-hdr-full"><input type="checkbox" class="add-hdr-full-cb" checked> Ancho completo</label>
      <button type="button" class="btn btn-primary btn-add-hdr" data-haddbtn="1">Agregar</button>
    </div>`
  + (removed.length ? `<div class="cfg-restore">
      <div class="cfg-restore-title">Campos de encabezado eliminados (respaldo):</div>
      ${removed.map(r=>`<div class="cfg-restore-row"><span>${escapeHtml(r.label)}</span><span class="cfg-restore-type">${r.type==='date'?'Fecha':r.type==='time'?'Hora':'Texto'}</span><button type="button" class="cfg-restore-btn" data-hrestore="${r.id}">↩ Restaurar</button></div>`).join('')}
    </div>` : '');
  box.querySelectorAll('input[type=checkbox][data-hcfg]').forEach(cb=>{
    cb.addEventListener('change', e=>{
      config.header[e.target.dataset.hcfg] = e.target.checked;
      configDirty = true;
    });
  });
  box.querySelectorAll('.hdr-default').forEach(inp=>{
    inp.addEventListener('input', e=>{
      config.headerDefaults[e.target.dataset.hdefault] = e.target.value;
      configDirty = true;
    });
  });
  box.querySelectorAll('.hdr-title').forEach(inp=>{
    inp.addEventListener('input', e=>{
      config.headerLabels[e.target.dataset.hlabel] = e.target.value;
      configDirty = true;
    });
  });
  box.querySelectorAll('.cfg-move-btn').forEach(btn=>{
    btn.addEventListener('click', e=>{
      moveHeaderField(e.target.dataset.move, e.target.dataset.dir);
    });
  });
  box.querySelectorAll('.cfg-del-btn[data-hdel]').forEach(btn=>{
    btn.addEventListener('click', e=>{
      const id = e.target.dataset.hdel;
      const f = headerFieldById(id);
      const t = f ? fieldTitle(f) : id;
      if(!confirm('¿Eliminar el campo "'+t+'" del encabezado?\nNo se borrará definitivamente: podrás recuperarlo en el respaldo.')) return;
      deleteHeaderField(id);
      renderHeaderConfig();
      showToast('Campo "'+t+'" movido al respaldo');
    });
  });
  box.querySelectorAll('.cfg-restore-btn[data-hrestore]').forEach(btn=>{
    btn.addEventListener('click', e=>{
      restoreHeaderField(e.target.dataset.hrestore);
      renderHeaderConfig();
      showToast('Campo restaurado');
    });
  });
  box.querySelectorAll('.btn-add-hdr').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      const inp = box.querySelector('.add-hdr-label');
      const sel = box.querySelector('.add-hdr-type');
      const fullCb = box.querySelector('.add-hdr-full-cb');
      if(!(inp.value||'').trim()){ inp.focus(); return; }
      addCustomHeaderField(inp.value, sel.value, fullCb.checked);
      renderHeaderConfig();
      showToast('Campo agregado al encabezado');
    });
  });
  box.querySelectorAll('.add-hdr-label').forEach(inp=>{
    inp.addEventListener('keydown', e=>{
      if(e.key!=='Enter') return;
      e.preventDefault();
      const sel = box.querySelector('.add-hdr-type');
      const fullCb = box.querySelector('.add-hdr-full-cb');
      if(!(e.target.value||'').trim()) return;
      addCustomHeaderField(e.target.value, sel.value, fullCb.checked);
      renderHeaderConfig();
    });
  });
}

function renderLogoConfig(){
  const box = document.getElementById('logo-config');
  if(!box) return;
  const has = !!(config.logo && config.logo.dataUrl);
  box.innerHTML = `<div class="card-title"><span class="badge">Logo</span> Logo de la empresa</div>
    <p class="cfg-hint">Aparecerá arriba a la derecha en la primera página del PDF.</p>
    ${has
      ? `<div class="logo-preview"><img src="${config.logo.dataUrl}" alt="Logo de la empresa" class="logo-thumb"><button type="button" class="cfg-del-btn" data-logodel="1" title="Quitar logo" aria-label="Quitar logo">✕</button></div>`
      : '<div class="logo-empty">No has subido ningún logo todavía.</div>'}
    <div style="display:flex; align-items:center; gap:10px; margin-top:10px;">
      <button type="button" class="btn btn-primary" data-logoupload="1">Subir logo</button>
      <input type="file" class="logo-file" accept="image/*" style="display:none">
    </div>`;
  const fileInp = box.querySelector('.logo-file');
  box.querySelector('[data-logoupload]').addEventListener('click', ()=> fileInp.click());
  fileInp.addEventListener('change', async e=>{
    const f = e.target.files ? e.target.files[0] : null;
    if(!f || !f.type || !String(f.type).startsWith('image/')) return;
    if(f.size > 8*1024*1024){ showToast('Imagen muy grande (máx. 8 MB): '+f.name); return; }
    try{
      const dataUrl = await readImageFile(f);
      const dim = await getImgSize(dataUrl);
      config.logo = { dataUrl, w: dim.w, h: dim.h };
      configDirty = true;
      renderLogoConfig();
      showToast('Logo cargado. Recuerda guardar la configuración.');
    }catch(e){ showToast('No se pudo cargar la imagen'); }
  });
  box.querySelectorAll('[data-logodel]').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      if(!confirm('¿Quitar el logo de la empresa?')) return;
      config.logo = null;
      configDirty = true;
      renderLogoConfig();
    });
  });
}

function renderSectionsConfig(){
  const container = document.getElementById('sections-config');
  container.innerHTML = '';
  const sections = orderedSections();
  sections.forEach((sec, sidx)=>{
    const items = sectionItemList(sec.id);
    const activeItems = items.filter(i=>config.items[i.id]);
    const removedList = Array.isArray(config.removedItems && config.removedItems[sec.id]) ? config.removedItems[sec.id].filter(rid=> !isCustomItem(sec.id,rid)) : [];
    const wrap = document.createElement('div');
    wrap.className = 'cfg-section' + (cfgOpen[sec.id] ? ' open' : '');
    wrap.innerHTML = `
      <div class="cfg-section-head">
        <div class="cfg-section-head-left">
          <span class="chevron">▶</span>
          <span class="badge">${sectionDisplayNumber(sec.id)}</span>
          <h3>${sec.title}</h3>
        </div>
        <div style="display:flex; align-items:center; gap:10px;">
          <span class="cfg-count">${activeItems.length}/${items.length}</span>
          <div class="cfg-move">
            <button type="button" class="cfg-move-btn" data-secmove="${sec.id}" data-dir="up" title="Mover categoría hacia arriba" aria-label="Mover categoría hacia arriba" ${sidx===0?'disabled':''}>▲</button>
            <button type="button" class="cfg-move-btn" data-secmove="${sec.id}" data-dir="down" title="Mover categoría hacia abajo" aria-label="Mover categoría hacia abajo" ${sidx===sections.length-1?'disabled':''}>▼</button>
          </div>
          <button type="button" class="cfg-del-btn sec-del" data-secdel="${sec.id}" title="Eliminar categoría con todos sus apartados" aria-label="Eliminar categoría">✕</button>
        </div>
      </div>
      <div class="cfg-items">
        <div class="cfg-toggle-row">
          <button class="cfg-toggle-btn" data-all="${sec.id}">✓ Marcar todo</button>
          <button class="cfg-toggle-btn danger" data-none="${sec.id}">✕ Desmarcar todo</button>
        </div>
        ${items.map((i,idx)=>`
          <div class="cfg-item cfg-item-item">
            <input type="checkbox" data-icfg="${i.id}" ${config.items[i.id] ? 'checked':''}>
            <div class="id">${sectionDisplayNumber(sec.id)}.${idx+1}</div>
            <input class="item-text" type="text" maxlength="140" placeholder="Texto del elemento" data-isec="${sec.id}" data-itext="${i.id}" value="${escapeAttr(i.text)}">
            <div class="cfg-move">
              <button type="button" class="cfg-move-btn" data-imove="${i.id}" data-sec="${sec.id}" data-dir="up" title="Mover hacia arriba" aria-label="Mover hacia arriba" ${idx===0?'disabled':''}>▲</button>
              <button type="button" class="cfg-move-btn" data-imove="${i.id}" data-sec="${sec.id}" data-dir="down" title="Mover hacia abajo" aria-label="Mover hacia abajo" ${idx===items.length-1?'disabled':''}>▼</button>
            </div>
            <button type="button" class="cfg-del-btn" data-idel="${i.id}" data-sec="${sec.id}" title="Eliminar elemento" aria-label="Eliminar elemento">✕</button>
          </div>
        `).join('')}
        ${removedList.length ? `
        <div class="cfg-restore">
          <div class="cfg-restore-title">Puntos eliminados en esta categoría:</div>
          ${removedList.map(rid=>{
            const d = secById(sec.id).items.find(x=>x.id===rid);
            return `<div class="cfg-restore-row"><span>${escapeHtml(d?d.text:rid)}</span><button type="button" class="cfg-restore-btn" data-restore="${rid}" data-sec="${sec.id}">↩ Restaurar</button></div>`;
          }).join('')}
        </div>` : ''}
        <div class="cfg-add">
          <input class="add-item" type="text" placeholder="Agregar nuevo elemento…" data-add="${sec.id}">
          <button type="button" class="btn btn-primary btn-add-item" data-addbtn="${sec.id}">Agregar</button>
        </div>
      </div>
    `;
    container.appendChild(wrap);

    wrap.querySelector('.cfg-section-head').addEventListener('click', ()=>{
      wrap.classList.toggle('open');
      cfgOpen[sec.id] = wrap.classList.contains('open');
    });
    wrap.querySelectorAll('input[type=checkbox]').forEach(cb=>{
      cb.addEventListener('change', e=>{
        config.items[e.target.dataset.icfg] = e.target.checked;
        configDirty = true;
        const list = sectionItemList(sec.id);
        wrap.querySelector('.cfg-count').textContent = `${list.filter(i=>config.items[i.id]).length}/${list.length}`;
      });
    });
    wrap.querySelector('.cfg-toggle-btn[data-all]').addEventListener('click', e=>{
      e.stopPropagation();
      const list = sectionItemList(sec.id);
      list.forEach(i=> config.items[i.id] = true);
      configDirty = true;
      wrap.querySelectorAll('.cfg-item input[type=checkbox]').forEach(cb=> cb.checked = true);
      wrap.querySelector('.cfg-count').textContent = `${list.length}/${list.length}`;
    });
    wrap.querySelector('.cfg-toggle-btn[data-none]').addEventListener('click', e=>{
      e.stopPropagation();
      const list = sectionItemList(sec.id);
      list.forEach(i=> config.items[i.id] = false);
      configDirty = true;
      wrap.querySelectorAll('.cfg-item input[type=checkbox]').forEach(cb=> cb.checked = false);
      wrap.querySelector('.cfg-count').textContent = `0/${list.length}`;
    });
    wrap.querySelectorAll('.item-text').forEach(inp=>{
      inp.addEventListener('input', e=>{
        config.itemsLabels = config.itemsLabels || {};
        config.itemsLabels[e.target.dataset.itext] = e.target.value;
        configDirty = true;
        syncCustomText(e.target.dataset.sec, e.target.dataset.itext, e.target.value);
      });
    });
    wrap.querySelectorAll('.cfg-move-btn[data-imove]').forEach(btn=>{
      btn.addEventListener('click', e=>{
        moveSectionItem(e.target.dataset.sec, e.target.dataset.imove, e.target.dataset.dir);
        renderSectionsConfig();
      });
    });
    wrap.querySelectorAll('.cfg-move-btn[data-secmove]').forEach(btn=>{
      btn.addEventListener('click', e=>{
        e.stopPropagation();
        moveSection(e.target.dataset.secmove, e.target.dataset.dir);
        renderSectionsConfig();
      });
    });
    wrap.querySelectorAll('.cfg-del-btn[data-idel]').forEach(btn=>{
      btn.addEventListener('click', e=>{
        e.stopPropagation();
        const id = e.target.dataset.idel, s = e.target.dataset.sec;
        const it = sectionItemList(s).find(i=>i.id===id);
        const custom = isCustomItem(s, id);
        const t = (it&&it.text)||id;
        if(!confirm(custom ? '¿Eliminar el punto "'+t+'"?'
                            : '¿Eliminar el punto "'+t+'"? Podrás restaurarlo más abajo.')) return;
        deleteItemFromConfig(s, id);
        renderSectionsConfig();
      });
    });
    wrap.querySelectorAll('.cfg-del-btn[data-secdel]').forEach(btn=>{
      btn.addEventListener('click', e=>{
        e.stopPropagation();
        const s = e.target.dataset.secdel;
        const sec = secById(s);
        if(!confirm('¿Eliminar la categoría "'+(sec?sec.title:s)+'" con todos sus apartados? Podrás restaurarla más abajo.')) return;
        removeSection(s);
        renderSectionsConfig();
      });
    });
    wrap.querySelectorAll('.cfg-restore-btn').forEach(btn=>{
      btn.addEventListener('click', e=>{
        e.stopPropagation();
        restoreDefaultItem(e.target.dataset.sec, e.target.dataset.restore);
        renderSectionsConfig();
      });
    });
    wrap.querySelectorAll('.btn-add-item').forEach(btn=>{
      btn.addEventListener('click', e=>{
        const s = e.target.dataset.addbtn;
        const inp = wrap.querySelector('.add-item[data-add="'+s+'"]');
        addSectionItem(s, inp.value);
        renderSectionsConfig();
        inp.value = '';
      });
    });
    wrap.querySelectorAll('.add-item').forEach(inp=>{
      inp.addEventListener('keydown', e=>{
        if(e.key!=='Enter') return;
        e.preventDefault();
        const s = e.target.dataset.add;
        addSectionItem(s, e.target.value);
        renderSectionsConfig();
        e.target.value = '';
      });
    });
  });

  const removedSects = Array.isArray(config.sectionsRemoved) ? config.sectionsRemoved : [];
  if(removedSects.length){
    const rb = document.createElement('div');
    rb.className = 'cfg-section cfg-restore';
    rb.innerHTML = '<div class="cfg-restore-title">Categorías eliminadas:</div>' + removedSects.map(id=>{
      const s = secById(id);
      return `<div class="cfg-restore-row"><span>${s ? escapeHtml(s.title) : id}</span><button type="button" class="cfg-restore-btn" data-secrestore="${id}">↩ Restaurar</button></div>`;
    }).join('');
    container.appendChild(rb);
    rb.querySelectorAll('.cfg-restore-btn[data-secrestore]').forEach(btn=>{
      btn.addEventListener('click', e=>{
        e.stopPropagation();
        restoreSection(e.target.dataset.secrestore);
        renderSectionsConfig();
      });
    });
  }
}


async function renderHistorial(){
  const box = document.getElementById('historial-list');
  const q = histQuery.trim().toLowerCase();
  box.innerHTML = '<div class="empty-state"><p>Cargando…</p></div>';
  const recs = await listRecords();
  const filtered = q ? recs.filter(rec=>{
    const hay = [rec.header?rec.header.empresa:'', rec.header?rec.header.fecha:'', rec.header?rec.header.inspector:'', rec.header?rec.header.direccion:'', rec.header?rec.header.responsable:''].join(' ').toLowerCase();
    return hay.includes(q);
  }) : recs;
  box.innerHTML = '';
  if(filtered.length===0){
    const emptyCard = document.createElement('div');
    emptyCard.className = 'card';
    emptyCard.innerHTML = '<div class="empty-state"><h3>'+ (q ? 'Sin resultados para "'+escapeHtml(histQuery)+'"' : 'Aún no hay registros guardados') +'</h3><p>'+ (q ? 'Prueba con otro término de búsqueda.' : 'Completa un formulario en "Nuevo registro" y presiona "Guardar registro".') +'</p></div>';
    box.appendChild(emptyCard);
  }else{
    filtered.forEach(rec=>{
      const card = document.createElement('div');
      card.className = 'card rec-card';
      const empresa = (rec.header && rec.header.empresa) || 'Sin nombre de empresa';
      const fecha = (rec.header && rec.header.fecha) || '—';
      card.innerHTML = `
        <div class="rec-info">
          <h4>${escapeHtml(empresa)}</h4>
          <p>Fecha: ${fecha} · Actualizado ${new Date(rec.updatedAt||rec.savedAt).toLocaleString('es-CO')}</p>
        </div>
        <div class="rec-actions">
          <button class="btn" data-load="${rec.id}">Abrir</button>
          <button class="btn btn-primary" data-export="${rec.id}">PDF</button>
          <button class="btn btn-danger" data-del="${rec.id}">Eliminar</button>
        </div>
      `;
      box.appendChild(card);
      card.querySelector('[data-load]').addEventListener('click', ()=>{
        loadRecordIntoForm(rec);
        switchView('nuevo');
        showToast('Registro cargado');
      });
      card.querySelector('[data-export]').addEventListener('click', ()=> exportRecordToPDF(rec));
      card.querySelector('[data-del]').addEventListener('click', async ()=>{
        if(!confirm('¿Eliminar este registro del historial?\nNo se borrará definitivamente: podrás restaurarlo en el respaldo.')) return;
        await deleteRecord(rec.id);
        renderHistorial();
        showToast('Registro movido al respaldo');
      });
    });
  }
}

async function renderRespaldo(){
  const box = document.getElementById('respaldo-list');
  box.innerHTML = '<div class="empty-state"><p>Cargando…</p></div>';
  const deleted = await listDeletedRecords();
  if(deleted.length===0){
    box.innerHTML = '<div class="card"><div class="empty-state"><h3>No hay registros en el respaldo</h3><p>Los registros que elimines del historial aparecerán aquí y podrás restaurarlos cuando quieras.</p></div></div>';
    return;
  }
  box.innerHTML = '';
  deleted.forEach(rec=>{
    const rowCard = document.createElement('div');
    rowCard.className = 'card rec-card';
    const empresa = (rec.header && rec.header.empresa) || 'Sin nombre de empresa';
    const fecha = (rec.header && rec.header.fecha) || '—';
    rowCard.innerHTML = `
      <div class="rec-info">
        <h4>${escapeHtml(empresa)}</h4>
        <p>Fecha: ${fecha} · Eliminado ${new Date(rec.deletedAt||Date.now()).toLocaleString('es-CO')}</p>
      </div>
      <div class="rec-actions">
        <button class="btn btn-primary" data-bakrestore="${rec.id}">↩ Restaurar</button>
      </div>
    `;
    box.appendChild(rowCard);
    rowCard.querySelector('[data-bakrestore]').addEventListener('click', async ()=>{
      const ok = await restoreDeletedRecord(rec.id);
      renderRespaldo();
      showToast(ok ? 'Registro restaurado al historial' : 'No se pudo restaurar el registro');
    });
  });
}

function buildPDF(rec){
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF({unit:'pt', format:'a4'});
  const marginX = 40;
  const pageW = doc.internal.pageSize.getWidth();
  let y = 46;

  let logoReserve = 0;
  let logoBottom = 0;
  const logo = config.logo && config.logo.dataUrl ? config.logo : null;
  if(logo){
    let lw = Number(logo.w)||0, lh = Number(logo.h)||0;
    if(!lw || !lh){ lw = 400; lh = 200; }
    const maxW = 230, maxH = 72;
    let s = Math.min(maxW/lw, maxH/lh);
    if(s > 2) s = 2;
    const iwl = lw*s, ihl = lh*s;
    doc.addImage(logo.dataUrl, imgFormat(logo.dataUrl), pageW - marginX - iwl, 30, iwl, ihl);
    logoReserve = iwl + 2;
    logoBottom = 30 + ihl + 6;
  }
  const rightMarginAt = (curY)=> (logoReserve && curY < logoBottom) ? marginX + logoReserve : marginX;
  const skipLogo = ()=> {
    if(logoReserve && doc.internal.getNumberOfPages()===1 && y < logoBottom) y = logoBottom + 6;
  };

  doc.setFont('helvetica','bold');
  doc.setFontSize(14);
  doc.text('INSPECCIÓN LOCATIVA', marginX, y);
  y += 22;

  const headerRows = orderedHeaderFields()
    .filter(f=>config.header[f.id])
    .map(f=>[fieldTitle(f), f.id === 'hora' ? formatTime(rec.header[f.id]) : rec.header[f.id] || '—']);

  if(headerRows.length){
    doc.autoTable({
      startY: y,
      margin:{left:marginX, right:rightMarginAt(y)},
      body: headerRows,
      theme:'plain',
      styles:{fontSize:9.5, cellPadding:3},
      columnStyles:{0:{fontStyle:'bold', cellWidth:170, textColor:[75,90,99]}, 1:{textColor:[22,33,42]}},
    });
    y = doc.lastAutoTable.finalY + 14;
  }

  activeSections().forEach((sec, sidx)=>{
    const items = sec.items;
    if(items.length===0) return;
    const secNum = sidx+1;
    const vals = sec.type==='estado' ? VALS_ESTADO : VALS_SN;
    const head = [['No.','Elemento a inspeccionar', ...vals.map(v=>v[1]), 'Observaciones']];
    const body = items.map((it,idx)=>{
      const ans = rec.values[it.id] ? rec.values[it.id].answer : '';
      const obs = rec.values[it.id] ? rec.values[it.id].obs : '';
      const marks = vals.map(([v])=> v===ans ? 'X' : '');
      return [secNum+'.'+(idx+1), it.text, ...marks, obs || ''];
    });

    if(y > 740){ doc.addPage(); y = 46; }
    skipLogo();
    doc.setFont('helvetica','bold');
    doc.setFontSize(10.5);
    doc.text(`${secNum}. ${sec.title}`.toUpperCase(), marginX, y);
    y += 8;

    doc.autoTable({
      startY: y + 4,
      margin:{left:marginX, right:marginX},
      head,
      body,
      theme:'grid',
      styles:{fontSize:8.5, cellPadding:4, valign:'middle'},
      headStyles:{fillColor:[47,111,94], textColor:255, fontStyle:'bold'},
      columnStyles:{
        0:{cellWidth:28, halign:'center'},
        1:{cellWidth:210},
        2:{cellWidth:34, halign:'center'},
        3:{cellWidth:34, halign:'center'},
        4:{cellWidth:34, halign:'center'},
      },
      didParseCell: function(data){
        if(data.section==='body' && data.column.index>=2 && data.column.index<=4 && data.cell.raw==='X'){
          const colIdx = data.column.index - 2;
          const colors = sec.type==='estado' ? [[47,111,94],[196,132,44],[75,90,99]] : [[47,111,94],[163,64,43],[196,132,44]];
          data.cell.styles.fillColor = colors[colIdx];
          data.cell.styles.textColor = 255;
          data.cell.styles.fontStyle = 'bold';
        }
      }
    });
    y = doc.lastAutoTable.finalY + 16;
  });

  const anexos = Array.isArray(rec.anexos) ? rec.anexos : [];
  if(anexos.length){
    const avail = pageW - marginX*2;
    const gap = 12;
    const cellW = (avail - gap)/2;
    const cellH = 230;
    doc.setFont('helvetica','bold');
    doc.setFontSize(12);
    doc.setTextColor(22,33,42);
    if(y > 700){ doc.addPage(); y = 46; }
    skipLogo();
    doc.text('ANEXOS', marginX, y);
    y += 18;
    const row = [];
    const flushRow = ()=>{
      row.forEach((ax, col)=>{
        let wpx = Number(ax.w)||0, hpx = Number(ax.h)||0;
        if(!wpx || !hpx){ wpx = 1200; hpx = 900; }
        const s = Math.min(cellW/wpx, cellH/hpx);
        const iw = wpx*s, ih = hpx*s;
        const cx = marginX + col*(cellW+gap) + cellW/2;
        doc.addImage(ax.dataUrl, imgFormat(ax.dataUrl), cx - iw/2, y, iw, ih);
      });
      y += cellH + 10;
      row.length = 0;
    };
    anexos.forEach(ax=>{
      if(row.length===2) flushRow();
      if(y + cellH > 740){ doc.addPage(); y = 50; }
      row.push(ax);
    });
    if(row.length) flushRow();
    y = 46;
  }

  const pageCount = doc.internal.getNumberOfPages();
  for(let p=1; p<=pageCount; p++){
    doc.setPage(p);
    doc.setFont('helvetica','normal');
    doc.setFontSize(8);
    doc.setTextColor(140,140,140);
    doc.text(`Página ${p} de ${pageCount}`, 555, 830, {align:'right'});
  }

  return doc;
}

function exportRecordToPDF(rec){
  const doc = buildPDF(rec);
  const empresa = (rec.header.empresa || 'inspeccion').replace(/[^a-z0-9]+/gi,'_');
  const fecha = (rec.header.fecha || '').replace(/[^0-9]+/g,'') || Date.now();
  doc.save(`Inspeccion_${empresa}_${fecha}.pdf`);
}


function switchView(name){
  document.querySelectorAll('.nav-item').forEach(n=> n.classList.toggle('active', n.dataset.view===name));
  document.querySelectorAll('.view').forEach(v=> v.classList.remove('active'));
  document.getElementById('view-'+name).classList.add('active');
  if(name==='nuevo'){
    if(!recordDirty && !editId && !fromDraft) resetRecord();
    renderHeaderCard(); renderSections(); updateStatus();
  }
  if(name==='config'){ renderHeaderConfig(); renderLogoConfig(); renderSectionsConfig(); }
  if(name==='historial'){ renderHistorial(); }
  if(name==='respaldo'){ renderRespaldo(); }
  currentView = name;
}

function showToast(msg){
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(()=> t.classList.remove('show'), 2200);
}
function escapeHtml(s){ return (s||'').replace(/[&<>"']/g, c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }
function escapeAttr(s){ return escapeHtml(s); }

document.querySelectorAll('.nav-item').forEach(n=>{
  n.addEventListener('click', ()=>{
    const target = n.dataset.view;
    if(target!==currentView){
      if(currentView==='nuevo' && recordDirty && !confirm('Hay cambios sin guardar en el registro actual. ¿Continuar?')) return;
      if(currentView==='config' && configDirty && !confirm('La configuración tiene cambios sin guardar. ¿Continuar?')) return;
    }
    switchView(target);
  });
});

document.getElementById('btn-clear').addEventListener('click', ()=>{
  if(confirm('¿Limpiar todas las respuestas del registro actual?')){
    resetRecord();
    clearDraft();
    renderHeaderCard();
    renderSections();
    updateStatus();
    showToast('Registro limpiado');
  }
});

document.getElementById('btn-save').addEventListener('click', async ()=>{
  const missing = missingRequired();
  if(missing.length){
    highlightMissing();
    const names = missing.map(id=> fieldTitle(HEADER_FIELDS.find(f=>f.id===id)));
    showToast('Completa: '+names.join(', '));
    return;
  }
  const wasEdit = !!editId;
  const now = Date.now();
  const rec = wasEdit
    ? { id: editId, header: record.header, values: record.values, anexos: record.anexos, savedAt: record.savedAt || now, updatedAt: now }
    : { id: String(now), header: record.header, values: record.values, anexos: record.anexos, savedAt: now };
  await saveRecordToStorage(rec);
  editId = rec.id;
  record.savedAt = rec.savedAt;
  recordDirty = false;
  clearDraft();
  updateStatus();
  showToast(wasEdit ? 'Cambios guardados en el historial' : 'Registro guardado en el historial');
});

document.getElementById('btn-pdf').addEventListener('click', ()=>{
  exportRecordToPDF({ header: record.header, values: record.values, anexos: record.anexos });
  showToast('Generando PDF…');
});

document.getElementById('btn-cfg-all').addEventListener('click', ()=>{
  Object.keys(config.header).forEach(k=> config.header[k]=true);
  Object.keys(config.items).forEach(k=> config.items[k]=true);
  renderHeaderConfig(); renderSectionsConfig();
});
document.getElementById('btn-cfg-none').addEventListener('click', ()=>{
  Object.keys(config.header).forEach(k=> config.header[k]=false);
  Object.keys(config.items).forEach(k=> config.items[k]=false);
  renderHeaderConfig(); renderSectionsConfig();
});
document.getElementById('btn-cfg-save').addEventListener('click', async ()=>{
  const ok = await saveConfigToStorage();
  if(ok) configDirty = false;
  document.getElementById('config-status').textContent = ok ? 'Configuración guardada en este navegador.' : 'No se pudo guardar: este navegador bloqueó el almacenamiento local.';
  showToast(ok ? 'Configuración guardada' : 'No se pudo guardar la configuración');
});

document.getElementById('btn-backup-export').addEventListener('click', exportBackup);
document.getElementById('btn-backup-import').addEventListener('click', importBackup);
const histSearchEl = document.getElementById('hist-search');
if(histSearchEl){
  histSearchEl.addEventListener('input', ()=>{ histQuery = histSearchEl.value; renderHistorial(); });
}

(async function init(){
  await migrateLegacyDeleted();
  await loadConfig();
  const restored = await loadDraft();
  if(!restored) resetRecord();
  renderHeaderCard();
  renderSections();
  updateStatus();
  if(restored) showToast('Borrador restaurado');
})();
