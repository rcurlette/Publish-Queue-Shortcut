//If you only want your code to affect certain screens/views, you should listen to Anguilla events like this:
$evt.addEventHandler($display, "start", onDisplayStarted);

// This callback is called when any view has finished loading
function onDisplayStarted() {

	// Open Publish Queue dialog
	Mousetrap.bind('q', function() {
			//var popup = $popup.create($cme.Popups.PUBLISH_QUEUE.URL, $cme.Popups.PUBLISH_QUEUE.FEATURES);
			//popup.open();
			$commands.executeCommand('PublishingQueue')
	});
	
	Mousetrap.bind('ctrl+shift+q', function() {
			var popup = $popup.create($cme.Popups.PUBLISH_QUEUE.URL, $cme.Popups.PUBLISH_QUEUE.FEATURES);
			popup.open();
	});
	
	
    $evt.removeEventHandler($display, "start", onDisplayStarted);

    //alert($display.getView().getId());
   
   //if ($display.getView().getId() == "ComponentView") {
		//alert('comp view');
   //}
}