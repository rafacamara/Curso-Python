import {loadPyodide} from "./pyodide/pyodide.module.js";
var py,ready=loadPyodide({indexURL:new URL("pyodide/",import.meta.url).href}).then(function(p){py=p;postMessage({ready:true})});
onmessage=async function(e){
  await ready;var out=[],lines=e.data.input?e.data.input.split("\n"):[];
  py.setStdout({batched:function(s){out.push(s)}});
  py.setStderr({batched:function(s){out.push(s)}});
  py.setStdin({stdin:function(){return lines.length?lines.shift():undefined}});
  var g=py.globals.get("dict")();
  try{await py.runPythonAsync(e.data.code,{globals:g});postMessage({ok:true,out:out.join("\n")})}
  catch(err){var m=String(err.message||err).trim().split("\n");postMessage({ok:false,out:out.join("\n"),err:m[m.length-1]})}
  finally{g.destroy()}
};
