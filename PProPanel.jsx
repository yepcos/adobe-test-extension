EXT = {
	addClipMarkers: function () {
		if (app.project.rootItem.children.numItems > 0) {
			var projectItem = app.project.rootItem.children[0]; // assumes first item is footage.
			if (projectItem) {
				if (projectItem.type == ProjectItemType.CLIP || projectItem.type == ProjectItemType.FILE) {
					var markers = projectItem.getMarkers();
					var initialStart = 0;
					var initialEnd = 2;
					var markerCount = 1;
					if (markers) {
						for (var a = 0; a < 200; a++) {
							var newCommentMarker = markers.createMarker(initialStart);
							newCommentMarker.name = 'Marker #' + markerCount + ', created by PProPanel.';
							newCommentMarker.comments = 'Here are some comments, inserted by PProPanel.';
							newCommentMarker.end = initialEnd;
							initialStart += 1;
							initialEnd += 1;
							markerCount++;
						}
					}
				} else {
					this.alert("Can only add markers to footage items.");
				}
			} else {
				this.alert("Could not find first projectItem.");
			}
		} else {
			this.alert("Project is empty.");
		}
	},
	alert: function (message) {
		app.setSDKEventMessage(message, 'error');
	}
};
