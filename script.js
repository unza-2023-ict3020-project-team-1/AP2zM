let counter = 0;
function addFiles() {
	let pdfI = document.getElementById("pdfI" + counter);
	let metaI = document.getElementById("metaI" + counter);

	if (pdfI.files.length > 0 && metaI.files.length > 0) {
		const br = document.createElement("br");
		const tableCont = document.getElementById("files-list");
		if (counter == 0){
			document.getElementById("listMsg").textContent = "Selected Files";
			tableCont.appendChild(br);
		} 
		const pdfFile = pdfI.files[0];
		const metaFile = metaI.files[0];

		const table = document.createElement("table");
		const newRow = table.insertRow(-1);
		const cell1 = newRow.insertCell(0);
		const cell2 = newRow.insertCell(1);
		cell1.className = "file-cell";
		cell2.className = "file-cell";
		cell1.style.width = "50%";
		cell2.style.width = "60%";
		
		cell1.style.fontSize = "130%";
		cell2.style.fontSize = "130%";
		
		cell2.style.paddingLeft = "10%";
		cell1.innerHTML = pdfFile.name;
		cell2.innerHTML = metaFile.name;
		table.style.width = "92%";
		table.style.tableLayout = "fixed";
		tableCont.appendChild(table);
		tableCont.appendChild(document.createElement("hr"));
		
		const uploadForm = document.getElementById("fileInputForm");

		let nextCounter = counter + 1;
		const pdfL = document.getElementById("pdfL");
		pdfL.setAttribute("for", "pdfI" + nextCounter);
		const oldPdfI = document.getElementById("pdfI" + counter);
		const newPdfI = oldPdfI.cloneNode(true);
		newPdfI.id = "pdfI" + nextCounter;
		newPdfI.value = "";

		uploadForm.appendChild(newPdfI);

		const metaL = document.getElementById("metaL");
		metaL.setAttribute("for", "metaI" + nextCounter);
		const oldMetaI = document.getElementById("metaI" + counter);
		const newMetaI = oldMetaI.cloneNode(true);
		newMetaI.id = "metaI" + nextCounter;
		newMetaI.value = "";
		uploadForm.appendChild(newMetaI);

		counter++;
	} else {
		alert("please select files for both inputs to continue");
	}
}


function show_pane(){
	document.getElementById("left_pane").style.left = "0vw";
	document.getElementById("show_p").style.display = "none";
	document.getElementById("hide_p").style.display = "block";
	document.getElementById("main").style.paddingLeft = '30vw';
}

function hide_pane(){
	document.getElementById("left_pane").style.left = "-23vw";
	const width = getBtnWidth("hide_p");	
	document.getElementById("show_p").style.display = "block";
	document.getElementById("show_p").style.height = width + "vw";
	document.getElementById("hide_p").style.display = "none";
	document.getElementById("main").style.paddingLeft = '20vw';
}


function use_api(){
	document.getElementById("default").style.display = "none";
	document.getElementById("file_sect").style.display = "none";
	document.getElementById("left_pane").style.left = "-23vw";
	document.getElementById("show_p").style.display = "block";
	const width = getBtnWidth("show_p");
	document.getElementById("show_p").style.height = width + "vw";
	document.getElementById("hide_p").style.display = "none";
	document.getElementById("api_sect").style.display = "block";
	document.getElementById("main").style.paddingLeft = "20vw";
}

function f_upload(){
	document.getElementById("default").style.display = "none";
	document.getElementById("api_sect").style.display = "none";
	document.getElementById("left_pane").style.left = "-23vw";
	document.getElementById("show_p").style.display = "block";
	const width = getBtnWidth("hide_p");
	document.getElementById("show_p").style.height = width + "vw";
	document.getElementById("hide_p").style.display = "none";
	document.getElementById("file_sect").style.display = 'block';
	document.getElementById("main").style.paddingLeft = '20vw';
}

function usage(){
	document.getElementById("default").style.display = "block";
	document.getElementById("api_sect").style.display = "none";
	document.getElementById("left_pane").style.left = "-23.5%";
	document.getElementById("show_p").style.display = "block";
	const width = getBtnWidth("hide_p");
	document.getElementById("show_p").style.height = width + "vw";
	document.getElementById("hide_p").style.display = "none";
	document.getElementById("file_sect").style.display = 'none';
	document.getElementById("main").style.paddingLeft = '20vw';
}

function dwnld(){
	document.getElementById("default").style.display = "none";
	document.getElementById("dwnld_sect").style.display = "block";
	document.getElementById("api_sect").style.display = "none";
	document.getElementById("left_pane").style.left = "-23vw";
	document.getElementById("show_p").style.display = "block";
	const width = getBtnWidth("hide_p");
	document.getElementById("show_p").style.height = width + "vw";
	document.getElementById("hide_p").style.display = "none";
	document.getElementById("file_sect").style.display = 'none';
	document.getElementById("main").style.paddingLeft = '20vw';
}

function squareIt(arg){
	const btns = document.querySelectorAll(arg);

	// Loop through each button and set its height
	btns.forEach(function(btn) {
	// Get the button's width
		let btnWidth = window.getComputedStyle(btn).width;
		btnWidth = parseFloat(btnWidth);
		btnWidth = (btnWidth / window.innerWidth) *100;

		// Set the button's height to match its width
		btn.style.height = btnWidth + "vw";
	});
}

function getBtnWidth(arg){
	const btn  = document.getElementById(arg);
	let btnWidth = window.getComputedStyle(btn).width;
	btnWidth = btnWidth / window.innerWidth;
	btnWidth = btnWidth * 100;
	
	return btnWidth;
}
