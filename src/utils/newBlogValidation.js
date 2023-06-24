export function validate(validatableObject){
    let isValid = true;
    if(!validatableObject.value){
      return false;
    }
    if(validatableObject.isRequired){
      isValid = isValid && validatableObject.value.toString().trim().length !== 0;
    }
    if(validatableObject.minLength != null && typeof(validatableObject.value) === "string"){
      isValid = isValid && validatableObject.value.length > validatableObject.minLength;
    }
    if(validatableObject.maxLength != null && typeof(validatableObject.value) === "string"){
      isValid = isValid && validatableObject.value.length < validatableObject.maxLength;
    }
    return isValid;
}