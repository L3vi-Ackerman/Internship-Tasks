export class FileValidation {
  constructor(fileInput) {
    this.fileInput = fileInput;
  }

  validateFileExtension() {
    const allowedExtensions = ["jpeg", "jpg"];
    let fileExtension = this.fileInput.value.split(".").pop().toLowerCase();
    return allowedExtensions.includes(fileExtension);
  }

  validateFileSize() {
    if (this.fileInput.files.length > 0) {
      for (let i = 0; i < this.fileInput.files.length; i++) {
        const fsize = this.fileInput.files[i].size;
        let fileSizeKB = Math.round(fsize / 1024); // Convert to KB

        // If file size > 4MB (4096 KB)
        if (fileSizeKB >= 4096) {
          return false;
        }
      }
    }
    return true;
  }
}
