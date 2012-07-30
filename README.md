Tridion 2011 Publish Queue Shortcut GUI Extension
------------------------
- Adds a shortcut key 'q' to open the Publish Queue Window
- Uses Tridion 2011 SP1  
- Create a new Folder on the CMS server in C:\Program Files\Tridion\web\WebUI\Editors\Shortcuts
- Copy all files there
- Register GUI Extension in the System.config file with this code:
<pre>
&lt;editor name="TridionShortcuts" xmlns="http://www.sdltridion.com/2009/GUI/Configuration"&gt;
      &lt;installpath xmlns="http://www.sdltridion.com/2009/GUI/Configuration"&gt;C:\Program Files\Tridion\web\WebUI\Editors\Shortcuts&lt;/installpath&gt;
      &lt;configuration xmlns="http://www.sdltridion.com/2009/GUI/Configuration"&gt;Shortcuts.config&lt;/configuration&gt;
      &lt;vdir xmlns="http://www.sdltridion.com/2009/GUI/Configuration"&gt;Shortcuts&lt;/vdir&gt;
&lt;/editor&gt;
</pre>
- Flush browser cache.  Test using the q key in any window.  Note, it does not work if your focus is in a text box or control.

