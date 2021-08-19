var folders = document.getElementsByClassName("outer-folder")
var icons = document.getElementsByClassName("icon")

var openFolder = null

function toggleFolder(id) {
	var icon = document.getElementById(`icon-${id}`);
	
	var folder = document.getElementById(id);
	
	if (folder.classList.contains("hidden")) {
		showFolder(folder, icon)
	} else {
		closeFolder(folder)
	}
}

function showFolder(folder, icon) {	
	if (!folder.classList.contains("hidden")) {
		return
	}
	
	document.body.classList.add("backgrounded");
	
	folder.classList.remove("hidden");
	icon.classList.add("foregrounded");
	openFolder = folder
}

function closeFolder(folder) {
	if (folder.classList.contains("hidden")) {
		return
	}
	
	folder.classList.add("hidden");
	
	for (icon of icons) {
		icon.classList.remove("foregrounded")
	}
	
	openFolder = null;
	document.body.classList.remove("backgrounded");
}

function closeAllFolders(except) {
	console.log(except)
	for (folder of folders) {
		if (folder === except) {
			break
		} else if (folder.classList.contains("hidden")) {
			console.log(`${folder.id} already hidden`)
		} else {
			console.log(`hiding ${folder.id}`)
			folder.classList.add("hidden");
		}
	}
	
	for (icon of icons) {
		icon.classList.remove("foregrounded")
	}
	openFolder = null;
	document.body.classList.remove("backgrounded");
}

window.addEventListener('click', function(event) {
	if (openFolder != null) {
		// HACK: god this sucks
		if (
			!(
				event.target.id == openFolder.id || 
				event.target.parentNode.id == openFolder.id || 
				event.target.parentNode.parentNode.id == openFolder.id
			) && !(
				event.target.classList.contains("icon") ||
				event.target.parentNode.classList.contains("icon") ||
				event.target.parentNode.parentNode.classList.contains("icon")
			)
		) {
			closeFolder(openFolder)
		}
	}
})