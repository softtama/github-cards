(function(e){var t="//localhost/github-cards/jsdelivr/";var r,i=0;var a=e.getElementsByTagName("meta");var n,l,d,c;for(r=0;r<a.length;r++){var s=a[r].getAttribute("name");var f=a[r].getAttribute("content");if(s==="gc:url"){n=f}else if(s==="gc:base"){t=f}else if(s==="gc:client-id"){l=f}else if(s==="gc:client-secret"){d=f}else if(s==="gc:theme"){c=f}}function u(t){if(e.querySelectorAll){return e.querySelectorAll("."+t)}var i=e.getElementsByTagName("div");var a=[];for(r=0;r<i.length;r++){if(~i[r].className.split(" ").indexOf(t)){a.push(i[r])}}return a}function g(e,t){return e.getAttribute("data-"+t)}function h(e){if(window.addEventListener){window.addEventListener("message",function(t){if(e.id===t.data.sender){e.height=t.data.height}},false)}}function o(r,a){a=a||n;if(!a){var s=g(r,"theme")||c||"default";a=t+"cards/"+s+".html"}var f=g(r,"user");var u=g(r,"repo");var o=g(r,"github");if(o){o=o.split("/");if(o.length&&!f){f=o[0];u=u||o[1]}}if(!f){return}var v=g(r,"show-bio")!==null;i+=1;var b=g(r,"width");var m=g(r,"height");var w=g(r,"target");var p=g(r,"client-id")||l;var A=g(r,"client-secret")||d;var y="ghcard-"+f+"-"+i;var E=e.createElement("iframe");E.setAttribute("id",y);E.setAttribute("frameborder",0);E.setAttribute("scrolling",0);E.setAttribute("allowtransparency",true);var N=a+"?user="+f+"&identity="+y;if(v){N+="&showbio=1"}if(u){N+="&repo="+u}if(w){N+="&target="+w}if(p&&A){N+="&client_id="+p+"&client_secret="+A}E.src=N;E.width=b||Math.min(r.parentNode.clientWidth||400,400);if(m){E.height=m}h(E);r.parentNode.replaceChild(E,r);return E}var v=u("github-card");for(r=0;r<v.length;r++){o(v[r])}if(window.githubCard){window.githubCard.render=o}})(document);
