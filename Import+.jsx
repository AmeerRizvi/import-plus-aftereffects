{
  function createImportPlusPanel(thisObj) {
    var panel =
      thisObj instanceof Panel
        ? thisObj
        : new Window("palette", "Import+", undefined, {
            resizeable: true
          });

    var tabbedPanel = panel.add("tabbedpanel");
    tabbedPanel.alignment = ["fill", "fill"];

    var browseTab = tabbedPanel.add("tab", undefined, "Browse");
    browseTab.orientation = "column";
    browseTab.alignChildren = ["fill", "top"];

    var browseButton = browseTab.add(
      "button",
      undefined,
      "Browse and Import Files"
    );
    browseButton.alignment = "center";

    browseButton.onClick = function () {
      var files = File.openDialog(
        "Select files to copy and import",
        undefined,
        true
      );
      if (files) handleFileImport(files);
    };

    var organizeButton = browseTab.add(
      "button",
      undefined,
      "Organize and Relink Files"
    );
    organizeButton.alignment = "center";

    organizeButton.onClick = function () {
      handleOrganizeAndRelink();
    };

    function handleFileImport(files) {
      var project = app.project;
      if (!project.file) {
        alert("Please save your project first!");
        return;
      }

      var projectPath = project.file.fsName;
      var projectDir = projectPath.substring(
        0,
        projectPath.lastIndexOf("/") + 1
      );
      var footageFolder = new Folder(projectDir + "/(Footage)");

      if (!footageFolder.exists) {
        if (!footageFolder.create()) {
          alert("Failed to create /(Footage) folder.");
          return;
        }
      }

      app.beginUndoGroup("Import Files");
      for (var i = 0; i < files.length; i++) {
        try {
          var sourceFile = new File(files[i]);
          var destinationFile = new File(
            footageFolder.fsName + "/" + sourceFile.name
          );
          sourceFile.copy(destinationFile);

          var importOptions = new ImportOptions(destinationFile);
          project.importFile(importOptions);
        } catch (e) {}
      }
      app.endUndoGroup();
    }

    function handleOrganizeAndRelink() {
      var project = app.project;
      if (!project.file) {
        alert("Please save your project first!");
        return;
      }

      var projectPath = project.file.fsName;
      var projectDir = projectPath.substring(
        0,
        projectPath.lastIndexOf("/") + 1
      );
      var footageFolder = new Folder(projectDir + "/(Footage)");

      if (!footageFolder.exists) {
        if (!footageFolder.create()) {
          alert("Failed to create /(Footage) folder.");
          return;
        }
      }

      app.beginUndoGroup("Organize and Relink Files");
      for (var i = 1; i <= project.numItems; i++) {
        var item = project.item(i);
        if (item instanceof FootageItem && item.file) {
          try {
            var sourceFile = item.file;
            var destinationFile = new File(
              footageFolder.fsName + "/" + sourceFile.name
            );

            if (!destinationFile.exists) {
              sourceFile.copy(destinationFile);
            }

            item.replace(destinationFile);
          } catch (e) {}
        }
      }
      app.endUndoGroup();

      alert(
        "All files have been organized and relinked to the /(Footage) folder."
      );
    }

    var infoTab = tabbedPanel.add("tab", undefined, "Info");
    infoTab.orientation = "column";
    infoTab.alignChildren = ["fill", "top"];

    var infoText = infoTab.add("statictext", undefined, undefined, {
      multiline: true
    });
    infoText.text =
      "How Import+ Works:\n\n" +
      "- Use the 'Browse and Import Files' button to add new files.\n" +
      "- Use the 'Organize and Relink Files' button to copy all imported files to the '(Footage)' folder and relink them.\n\n" +
      "Benefits:\n" +
      "- Keeps your files organized in one place.\n" +
      "- Ensures After Effects can always find your assets.";
    infoText.alignment = ["fill", "top"];

    panel.layout.layout(true);
    panel.onResizing = panel.onResize = function () {
      this.layout.resize();
    };

    return panel;
  }

  var panel = createImportPlusPanel(this);
  if (panel instanceof Window) {
    panel.center();
    panel.show();
  }
}
