var canvasSalazar = document.getElementById("canvasSalazar"),
	canvasBogoya = document.getElementById("canvasBogoya"),
	cxtSalazar = canvasSalazar.getContext("2d");
	cxtBogoya = canvasBogoya.getContext("2d");

cxtSalazar.moveTo(15,0);
cxtSalazar.lineTo(110,100);
cxtSalazar.lineWidth = 1;
cxtSalazar.strokeStyle = "#8c8c8c";
cxtSalazar.stroke();

cxtBogoya.moveTo(280,0);
cxtBogoya.lineTo(130,190);
cxtBogoya.lineWidth = 1;
cxtBogoya.strokeStyle = "#8c8c8c";
cxtBogoya.stroke();