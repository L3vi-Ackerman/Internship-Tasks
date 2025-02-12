export class NameValidation {
  constructor(name) {
    this.name = name;
  }

  validateName() {
    for (let i = 0; i < this.name.length; i++) {
      let ch = this.name.charCodeAt(i);
      if (
        !(ch >= 65 && ch <= 90) && // A-Z
        !(ch >= 97 && ch <= 122) // a-z
      ) {
        return false;
      }
    }
    return true;
  }
}
