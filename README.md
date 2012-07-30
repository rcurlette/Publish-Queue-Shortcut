Tridion 2011 Publish Queue Shortcut GUI Extension
------------------------
- Blog post at http://www.curlette.com/?p=845
- Adds a shortcut key 'q' to open the Publish Queue Window
- Uses Tridion 2011 SP1  
- Create a new Folder on the CMS server in C:\Program Files\Tridion\web\WebUI\Editors\Shortcuts
- Copy all files there
- Register GUI Extension in the System.config file with this code:
<editor name="TridionShortcuts" xmlns="http://www.sdltridion.com/2009/GUI/Configuration">
      <installpath xmlns="http://www.sdltridion.com/2009/GUI/Configuration">C:\Program Files\Tridion\web\WebUI\Editors\Shortcuts</installpath>
      <configuration xmlns="http://www.sdltridion.com/2009/GUI/Configuration">Shortcuts.config</configuration>
      <vdir xmlns="http://www.sdltridion.com/2009/GUI/Configuration">Shortcuts</vdir>
</editor>
- Flush browser cache and press the q key.  Note, it does not work if your focus is in a text box or control.

