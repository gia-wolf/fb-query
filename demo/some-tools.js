
function urlparamsbind(location, d) {
	var a = location.search.substr(1).split('&');
    var b = {};
    if (a == "") return b;

	// 1. Extract parameters
    for (var i = 0; i < a.length; ++i) {
        var p=a[i].split('=', 2);
        if (p.length == 1)
            b[p[0]] = "";
        else
            b[p[0]] = decodeURIComponent(p[1].replace(/\+/g, " "));
    }
    
    // 2. Optional: copy properties into target object "d" (f.i. main-doc-template)
    if (d) {
		for(var index in b) { 
		   if (b.hasOwnProperty(index)) {
		       d[index] = b[index];
		   }
		} 
    } 
    
    return b;
}