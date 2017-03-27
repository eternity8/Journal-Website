
//finding the time & adding it to the journal panel
document.getElementById("time").innerHTML = Date();

//global vars
var currentEditId = -1;  //the id number of the selected journal entry
var i = 0;				//i is used to create id's, is incremented in save()
var paras = [10];		//stores journal entry paragraphs
var titles = [10];		//stores

//takes x, the xth journal entry, and allows the editing of a single entry 
function edit(x)
{
	//ensuring the blue border around the edit button only appears on a single edit button
	if(window.currentEditId != -1)
	{
		finishEdit();
	}
	document.getElementById("finishEdit").disabled = false;
	
	document.getElementById(x).style.border = "thick solid #0000FF";
	
	var textAreaContents = paras[x];
	var targ = document.getElementById("journalTextArea");
	targ.value = textAreaContents;
	
	var titleId = 'p'+x;
	var titleContents =  document.getElementById("input");
	var neededInput = titles[x];
	titleContents.value = neededInput; 
	
	currentEditId = x;
}

//completes the edit of a entry
function finishEdit()
{	
		document.getElementById(currentEditId).style.border = "1px solid grey";
		
		var titleId = 'p'+currentEditId;
		var editedTitle = document.getElementById("input").value;
		var targetTitle = document.getElementById(titleId);
		targetTitle.innerHTML = editedTitle;
		titles[currentEditId] = editedTitle;
		
		var editedPara = document.getElementById("journalTextArea").value;
		paras[currentEditId] = editedPara;
		document.getElementById("finishEdit").disabled = true;

	currentEditId=-1;
}
		   
//creates a new entry
function save()
{
	var para= document.createElement("P");
	para.id='p'+i;
	var userInput = document.getElementById("input").value;
	para.innerHTML = userInput;
	document.getElementById("events").appendChild(para);
	
	var paraTime= document.createElement("P");
	paraTime.innerHTML = Date();
	document.getElementById("events").appendChild(paraTime);
	
	var btn= document.createElement("button");
	btn.innerHTML = "edit";
	btn.id = i;
	btn.onclick = function () { edit(this.id); };
	document.getElementById("events").appendChild(btn);

		
    var paraBreak = document.createElement("hr");
    document.getElementById("events").appendChild(paraBreak);
	
	paras[i] = document.getElementById("journalTextArea").value;	
	titles[i] = document.getElementById("input").value;

	i++;
}

//clears the journal pane
function cancel()
{
	if(window.currentEditId != -1)
	{
		document.getElementById(window.currentEditId).style.border = "1px solid grey";
	}
	var currentEditId = -1;
	
	var currentTextArea = document.getElementById("journalTextArea");
	currentTextArea.value = "Enter text . . ."
	
	var currentInput = document.getElementById("input");
	currentInput.value = "";
}
	
	