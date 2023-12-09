let counter = 0;

function addFiles() {
	var pdfI = document.getElementById("pdfI" + counter);
	var metaI = document.getElementById("metaI" + counter);

	if (pdfI.files.length > 0 && metaI.files.length > 0) {
		const br = document.createElement("br");
		const tableCont = document.getElementById("files-list");
		if (counter == 0){
			document.getElementById("listMsg").textContent = "Selected Files";
			tableCont.appendChild(listMsg);
			tableCont.appendChild(br);
		} 
		const pdfIn = pdfI.files;
		var p = pdfIn[0];
		const metaIn = metaI.files;
		var m = metaIn[0];

		var table = document.createElement("table");
		var newRow = table.insertRow(-1);
		var cell1 = newRow.insertCell(0);
		var cell2 = newRow.insertCell(1);
		cell1.className = "file-cell";
		cell2.className = "file-cell";
		cell1.style.width = "50%";
		cell2.style.width = "60%";
		cell2.style.paddingLeft = "10%";
		cell1.innerHTML = p.name;
		cell2.innerHTML = m.name;
		table.style.width = "92%";
		table.style.tableLayout = "fixed";
		tableCont.appendChild(table);
		tableCont.appendChild(document.createElement("hr"));
		

		const parent = document.getElementById("inputForm");

		var pdfOld = document.getElementById("pdfL");
		pdfOld.setAttribute("for", "pdfI" + (counter + 1));
		pdfOld = document.getElementById("pdfI" + counter);
		var pdfNew = pdfOld.cloneNode(true);
		pdfNew.id = "pdfI" + (counter + 1);
		pdfNew.value = "";
		parent.insertBefore(pdfNew, pdfOld.nextSibling);

		var metaOld = document.getElementById("metaL");
		metaOld.setAttribute("for", "metaI" + (counter + 1));
		metaOld = document.getElementById("metaI" + counter);
		var metaNew = metaOld.cloneNode(true);
		metaNew.id = "metaI" + (counter + 1);
		metaNew.value = "";

		parent.insertBefore(metaNew, metaOld.nextSibling);
		counter++;
	} else {
		alert("please select files for both inputs to continue");
	}
}


function show_pane(){
	document.getElementById("left_pane").style.left = "0px";
		document.getElementById("show_p").style.display = "none";
		document.getElementById("hide_p").style.display = "block";
	document.getElementById("main").style.paddingLeft = '265px';
}

function hide_pane(){
	document.getElementById("left_pane").style.left = "-250px";
	document.getElementById("show_p").style.display = "block";
	document.getElementById("hide_p").style.display = "none";
	document.getElementById("main").style.paddingLeft = '105px';
}


function use_api(){
	document.getElementById("default").style.display = "none";
	document.getElementById("file_sect").style.display = "none";
	document.getElementById("left_pane").style.left = "-250px";
	document.getElementById("show_p").style.display = "block";
	document.getElementById("hide_p").style.display = "none";
	document.getElementById("api_sect").style.display = 'block';
	document.getElementById("main").style.paddingLeft = '105px';
}

function f_upload(){
	document.getElementById("default").style.display = "none";
	document.getElementById("api_sect").style.display = "none";
	document.getElementById("left_pane").style.left = "-250px";
	document.getElementById("show_p").style.display = "block";
	document.getElementById("hide_p").style.display = "none";
	document.getElementById("file_sect").style.display = 'block';
	document.getElementById("main").style.paddingLeft = '105px';
}

function usage(){
	document.getElementById("default").style.display = "block";
	document.getElementById("api_sect").style.display = "none";
	document.getElementById("left_pane").style.left = "-250px";
	document.getElementById("show_p").style.display = "block";
	document.getElementById("hide_p").style.display = "none";
	document.getElementById("file_sect").style.display = 'none';
	document.getElementById("main").style.paddingLeft = '105px';
}

function dwnld(){
	document.getElementById("default").style.display = "none";
	document.getElementById("dwnld_sect").style.display = "block";
	document.getElementById("api_sect").style.display = "none";
	document.getElementById("left_pane").style.left = "-250px";
	document.getElementById("show_p").style.display = "block";
	document.getElementById("hide_p").style.display = "none";
	document.getElementById("file_sect").style.display = 'none';
	document.getElementById("main").style.paddingLeft = '105px';
}

