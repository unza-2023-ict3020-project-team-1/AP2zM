<?php
	if ($_SERVER['REQUEST_METHOD'] == 'POST') {
		session_start();
	}
?>
<!DOCTYPE html>
<html>
	<head>
		<link href="style.css" rel="stylesheet" type="text/css">
		<title>PREPARING FILES</title>
	</head>
	<body>
		<p id="ap2zm">AP2zM</p><br><br><br>
		
		<div class="container" style="color:black">
			<h1>GETTING FILES, PLEASE WAIT</h1><br>
			<?php
				if ($_SERVER['REQUEST_METHOD'] == 'POST') {
					// The session ID is created and can be accessed via the session_id() function
					$userDir = "user_data/".session_id();
				//	if(!file_exists($userDir)){
						mkdir($userDir, 0777, true);
						$pdfDir = $userDir."/pdfFiles";
						$metaDir = $userDir."/metaFiles";
						mkdir($pdfDir, 0777, true);
						mkdir($metaDir, 0777, true);
			//		}

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
					echo "<p>CREATING ZIP FILE</p>";
					$zip = new ZipArchive();
					$zipName = $userDir."/ap2zm.zip";
		
					if ($zip->open($zipName, ZipArchive::CREATE) === TRUE) {
						for($i = 0; $i < count($pdfNames); $i++){
							$zip->addFile($pdfNames[$i], basename($pdfNames[$i]));
						}
						echo "<p>ZIPPING SUCCESS:</p>";
						echo "<a href=\"".$zipName."\" download>Click to Download</a>";
						$zip->close();
					}
				//add metadata crosswalking code
				}
			?>
		</div>
	</body>
</html>
