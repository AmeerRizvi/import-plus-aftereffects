# **Import+ for Adobe After Effects**

A ScriptUI Panel for Adobe After Effects that simplifies your workflow by keeping all imported assets organized in a single `(Footage)` folder within your project directory. Say goodbye to the hassle of **Collect Files**, which creates redundant folders every time, and enjoy a streamlined asset management experience!

---

## **Features**

- **Organized Asset Management**: Automatically copy imported files to a `(Footage)` folder in your project directory.
- **Easy Relinking**: Relink all existing imported files to the organized `(Footage)` folder with a single click.
- **Streamlined Workflow**: Keep all your assets in one place, avoiding the repetitive process of Collect Files.
- **User-Friendly Interface**: Intuitive tab-based UI with options to import files, organize and relink assets, and access helpful documentation.

---

## **Benefits**

1. **No Need for "Collect Files"**:

   - Unlike Collect Files, which creates a new folder every time, **Import+** organizes files directly into a single `(Footage)` folder in your project directory.
   - This ensures that your project remains clean and consistent without redundant folders.

2. **Eliminates Missing Footages**:

   - All your assets are copied to one location, reducing the risk of missing or broken file links.

3. **Seamless Integration**:

   - Import files directly from the ScriptUI panel without opening external file explorers.

4. **Relink with Ease**:
   - Automatically relink all existing project files to the newly organized `(Footage)` folder.

---

## **How to Install**

### **Manual Installation**

1. **Download the Script**:

   - Download the [Import+.jsx](./Import+.jsx) file from this repository.

2. **Locate the ScriptUI Panels Folder**:

   - **Mac**: `/Applications/Adobe After Effects [version]/Scripts/ScriptUI Panels/`
   - **Windows**: `C:\Program Files\Adobe\Adobe After Effects [version]\Support Files\Scripts\ScriptUI Panels\`

3. **Copy the Script**:

   - Move the downloaded `Import+.jsx` file into the `ScriptUI Panels` folder.

4. **Restart Adobe After Effects**:

   - Restart After Effects to load the script.

5. **Access the Script**:
   - In After Effects, go to `Window > Import+` to open the panel.

---

## **How to Use**

### **Import Files**

1. Open the **Import+ Panel** (`Window > Import+`).
2. In the **Browse** tab, click on:
   - **Browse and Import Files** to select files for import.
3. All imported files will be:
   - Automatically copied to the `(Footage)` folder in your project directory.
   - Imported into your project.

### **Organize and Relink Files**

1. Click the **Organize and Relink Files** button in the **Browse** tab.
2. This will:
   - Copy all existing imported files in your project to the `(Footage)` folder.
   - Relink them to their new location.

### **Access Help**

- Go to the **Info** tab for a detailed explanation of how Import+ works and its benefits.

---

## **Troubleshooting**

### **Script Doesn't Appear in After Effects**

- Ensure the script is located in the correct directory:
  - **Mac**: `/Applications/Adobe After Effects [version]/Scripts/ScriptUI Panels/`
  - **Windows**: `C:\Program Files\Adobe\Adobe After Effects [version]\Support Files\Scripts\ScriptUI Panels\`
- Restart After Effects after copying the script.

### **Permission Denied on macOS**

- Ensure the correct permissions are set for the `Scripts` directory:
  ```bash
  sudo chmod -R 755 "/Applications/Adobe After Effects [version]/Scripts"
  ```

---

## **Why Use Import+?**

### **Comparison with Collect Files**

| Feature                   | Collect Files              | Import+                         |
| ------------------------- | -------------------------- | ------------------------------- |
| Creates redundant folders | Yes                        | No                              |
| Keeps files in one place  | No (new folder every time) | Yes (single `(Footage)` folder) |
| Relinks existing files    | No                         | Yes                             |
| Streamlined import        | No                         | Yes                             |

---

## **Contributing**

We welcome contributions! If you'd like to improve Import+, submit a pull request or open an issue.

---

## **License**

Copyright © 2024 Ameer Rizvi.

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.

---

## **Contact**

For questions, feedback, or support, feel free to open an issue or contact the project maintainer via GitHub.

---
