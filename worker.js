importScripts("pyodide/pyodide.js");
var py,ready=loadPyodide({indexURL:"pyodide/"}).then(function(p){py=p;postMessage({ready:true})});
onmessage=async function(e){
  await ready;var out=[];
  py.setStdout({batched:function(s){out.push(s)}});
  py.setStderr({batched:function(s){out.push(s)}});
  var g=py.globals.get("dict")();
  try{await py.runPythonAsync(e.data.code,{globals:g});postMessage({ok:true,out:out.join("\n")})}
  catch(err){var m=String(err.message||err).trim().split("\n");postMessage({ok:false,out:out.join("\n"),err:m[m.length-1]})}
  finally{g.destroy()}
};
