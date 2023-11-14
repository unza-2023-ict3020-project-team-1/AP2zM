let counter = 0;

function addFiles() {
	var pdfI = document.getElementById("pdfI" + counter);
	var metaI = document.getElementById("metaI" + counter);
	var p1 = pdfI.files[0];
	var m1 = metaI.files[0];

	if (pdfI.files.length > 0 && metaI.files.length > 0) {
		document.getElementById("apiForm").style.display = "none";
		var list = document.getElementById("list");
		const br = document.createElement("br");

		const pdfIn = pdfI.files;
		var p = pdfIn[0];
		const metaIn = metaI.files;
		var m = metaIn[0];

		const tableCont = document.getElementById("files-list");
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
		document.getElementById("choser").textContent = "Selecting Files";
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

function refresh() {
	location.reload();
}
