<?php
	if ($_SERVER['REQUEST_METHOD'] == 'POST') {
		session_start();
	}
?>

<!DOCTYPE html>
<html>
	<head>
		<!-- application title-->
		<title>AP2zM</title>
		<!--<base href="/ap2zm/">-->
		<link href="style.css" rel="stylesheet" type="text/css">
		<script src="script.js"></script>
	</head>	
	<body>
		<div id="left_pane">
			<button id="hide_p" class="pane_btn" onclick="hide_pane()">☰</button>
			<br>
			<div id="dwnld-pane-btn" class="chose">
				<hr>
				<button class="choose" style="word-wrap: break-word;" onclick="dwnld()">DOWNLOAD</button>
			</div>
			<hr>
			<button class="choose" onclick="use_api()">USE API </button>
			<hr>
			<button class="choose" onclick="f_upload()">UPLOAD</button>
			<hr>
			<button class="choose" onclick="usage()">USAGE</button>
			<hr>
		</div>
		<div id="main">
			<button id="show_p" class="pane_btn" onclick="show_pane()" style="display: none;">☰</button>
			<div id="dwnld_sect">
				<?php
					if ($_SERVER['REQUEST_METHOD'] == 'POST') {
						// The session ID is created and can be accessed via the session_id() function
						$userDir = "user_data/".session_id();
						$num = 0;
						$checkDir = $userDir;
						while(file_exists($checkDir)){
							$checkDir = $userDir.$num;
							$num++;
						}
						$userDir = $checkDir;
						mkdir($userDir, 0777, true);
						$pdfDir = $userDir."/pdfFiles";
						$metaDir = $userDir."/metaFiles";
						mkdir($pdfDir, 0777, true);
						mkdir($metaDir, 0777, true);

						// Handle file upload
						$pdfNames = [];
						for($i = 0; $i < count($_FILES['pdfFile']['name']); $i++){
							move_uploaded_file($_FILES['pdfFile']['tmp_name'][$i], $pdfDir."/".$_FILES['pdfFile']['name'][$i]);
							$pdfNames[] = $pdfDir."/".$_FILES['pdfFile']['name'][$i];
						}
						$metaNames = [];
						for($i = 0; $i < count($_FILES['metaFile']['name']); $i++){
							move_uploaded_file($_FILES['metaFile']['tmp_name'][$i], $metaDir."/".$_FILES['metaFile']['name'][$i]);
							$metaNames[] = $metaDir."/".$_FILES['metaFile']['name'][$i];
						}
						$zip = new ZipArchive();
						$zipName = $userDir."/ap2zm.zip";

						if ($zip->open($zipName, ZipArchive::CREATE) === TRUE) {
							for($i = 0; $i < count($pdfNames); $i++){
								$zip->addFile($pdfNames[$i], basename($pdfNames[$i]));
							}
							echo "<h1 class=\"choice\">DOWNLOAD YOUR FILES:</h1>";
							echo "<a href=\"".$zipName."\" download>Click to Download</a>";
							$zip->close();
						}
					//add metadata crosswalking code
					}
				?>
			</div>

			<div id="default" style="display: none;">
			    <h1 class="choice">USAGE</h1>
			    <h3>
			        1.API ENDPOINTS <br><br>
			        <ul>
			            <li>
			                to use API endpoints for the files and their metadata, the app give you a option to use those to fetch(by enterring the urls for document and metadata urls in the spaces provided respectively) and download your zipped files just by clicking download.
			            </li>
			        </ul>

			        2.LOCAL FILE BROWSING
			    </h3>
			    <p style="font-size:100;">
			        <ul>
			           
			        <li>
			            If you have your files and their metadata localy available on you lacal machine, you can also use that as the system has a provision for that aswell.
			             <ol type="i"><li>
			                scroll down to where you see the pdf icon,, click  there and  browse for the files you would want to zip 
			             </li><br>
			            
			            <li>
			                for the metadata you can click on the icon on the right side of the pdf icon and you will be provided with an option to browse for the metadata files you want to convert to csv and  zip.
			            </li><br>
			            <li>if one wishes to enter as many files as possible, the app has a provission for that aswell where one can just click on the add more files button.</li>    
			        
			        </ol>  
			        </li>
			        </ul>
			    </p>
			</div>
			<div id="api_sect" class="sect" style="display:none;">
				<br>
				<h2 class="choice">USE API</h2>
				<!-- This form allows users to enter API-->
				<form  onsubmit="fetchPDF(); return false;" method="post" action="api_form_process.php">
					<!-- This input field allows users to enter the API URL, and it is required. -->
					<div style="display:inline-block; width: 45%" class="urlInputParent">
						<label style="font-size:120%; color: black;">Documents Url<label><br>
						<input type="text" class="apiURL" name="documnentUrl" placeholder="Enter Documents API URL" required>
					</div>
					<div style="display:inline-block; width: 50%;" class="urlInputParent">
						<label style="font-size:120%; color: black;">Metadata Url<label><br>
						<input type="text" class="apiURL" name="metadataUrl" style="margin-left:4%" placeholder="Enter Metadata API URL" required>
					</div>
					<br><br>
					<!-- This image input acts as a a button with specific dimensions and a border -->
					<input type="submit" class="next-btn" value="fetch">
					<br><br><br>
				</form>
			</div>
			
			<!-- upload header 1 tag title -->
			<div id="file_sect" class="sect" style="display:none;">
				<h2 class="choice">UPLOAD FILES</h2>
				<!-- div to create listing table using javascript-->
				<div id="files-list" style="font-size:200%">
					<h2 id="listMsg" style="width: 100%"> No Files Selected</h2>
				</div><br>
				<!-- This form allows users to upload files and will be submitted to "upload.php" -->
				<form action="file_upload.php" method="post" enctype="multipart/form-data" id="inputForm">
					<label for="pdfI0" id="pdfL"><img  src="pdf.png" width="20%" alt="upload pdf"></label>
					<input type="file" name="pdfFile[]" id="pdfI0" style="display: none;" multiple>
					<label for="metaI0" id="metaL" style="padding-left: 28%"><img src="meta.png" width="25%" alt="upload metadata"></label>	
					<input type="file" name="metaFile[]" id="metaI0" style="display: none;" multiple>
					<p style="font-size: 160%; justify-content: center; padding-left:25px; font-weight: bold; margin-top: -5px;">select pdf<span style="padding-left: 36%;">select metadata</span></p>
					<br><br><br><br>
					<button type="button" id="addmore" class="next-btn" onclick="addFiles()">Add Files</button>
					<br><br><br>
					<button type="submit" class="next-btn">Upload</button>
					<br><br>
				</form>
			</div>
		</div>
	</body>
</html>
