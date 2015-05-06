var num=1;
var curEditor;
var curSwitch;
var curTitle;
var curContent;

/*function pageOver(id) {
	id.style.backgroundColor="#D86A65";
	id.style.borderColor="#DC7975"
}

function pageOff(id) {
	id.style.backgroundColor="#518DCA";
	id.style.borderColor="#6399CF";
}*/

function startupEditorandPage() {
	curEditor="e1";
	document.getElementById("e1").id="selectedEdit";
	curSwitch="s1";
	document.getElementById("s1").id="selectedSwitch";
	curTitle="t1";
	document.getElementById("t1").id="selectedTitle";
	curContent="c1";
	document.getElementById("c1").id="selectedContent";
}

function addPage() {
	var switchID;
	var editorID;

	var pageName=document.getElementById("page-text-box").value;
	if(pageName != '') {
		//Create IDs
		num=num+1;
		var numStr=num.toString();
		var newPref="e";

		//Create Editor
		document.getElementById("page-text-box").value='';
		var div=document.createElement("div");
		var node=document.createTextNode(pageName);
		div.id=newPref.concat(numStr);
		div.setAttribute("class", "page-editor");
		div.appendChild(node);
		var element=document.getElementById("templates");
		var child=document.getElementById("add-new");
		element.insertBefore(div,child);

		//Create Switch
		
		var div2 =document.createElement("div");
		var node2=document.createTextNode(pageName);
		div2.appendChild(node2);
		
		newPref="s";
		div2.id=newPref.concat(numStr);
		div2.setAttribute("class", "switch");
		div2.setAttribute("onclick", "switchCurPage(this)");
		var element2=document.getElementById("page-sel");
		element2.appendChild(div2);

		//Create Title
		newPref="t";
		var input=document.createElement("input");
		input.id=newPref.concat(numStr);
		input.setAttribute("class", "title");
		input.placeholder="Add Title Here";
		var element3=document.getElementById("workspace");
		element3.appendChild(input);

		//Create Content
		newPref="c";
		var tf=document.createElement("textarea");
		tf.id=newPref.concat(numStr);
		tf.placeholder="Start typing here";
		tf.setAttribute("class", "content");
		element3.appendChild(tf);
	}
	
}

function deletePage(editId) {
	if(editId="selectedEdit") {

	} else {
		var snum=editId.id.slice(1).toString();
		var newPref="s";
		while(editId.firstChild) {
			editId.removeChild(editId.firstChild);
		}
		editId.parenNode.removeChild(editId);
		/*
		var switchStr=newPref.concat(snum);
		var switchId=document.getElementById(switchStr);
		while()*/
	}
}

function switchCurPage(swPromote) {
	/*(document.getElementById("selectedSwitch").id=curSwitch;
	switchId.id="selectedSwitch"*/
	//Get the clicked elements
	if(swPromote.id != "selectedSwitch") {
		var snum=swPromote.id.slice(1).toString();
		var newPref="e";
		var editorId=newPref.concat(snum);
		var edPromote=document.getElementById(editorId);
		newPref="t";
		var titleId=newPref.concat(snum);
		var tPromote=document.getElementById(titleId);
		newPref="c";
		var conId=newPref.concat(snum);
		var cPromote=document.getElementById(conId);
		
		//Return previously selected IDs
		document.getElementById("selectedEdit").id=curEditor;
		document.getElementById("selectedSwitch").id=curSwitch;
		document.getElementById("selectedTitle").id=curTitle;
		document.getElementById("selectedContent").id=curContent;

		//record current promoted IDs
		curEditor=edPromote.id; 
		curSwitch=swPromote.id;
		curTitle=tPromote.id;
		curContent=cPromote.id;

		//promote the current clicked
		edPromote.id="selectedEdit";
		swPromote.id="selectedSwitch";
		tPromote.id="selectedTitle";
		cPromote.id="selectedContent";
	}
}