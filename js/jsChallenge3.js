// Challenge 3
function challenge3() {
    const isStandingSelected = document.querySelector('input[name="standing"]:checked') !== null;
    const isGradDateSelected = document.querySelector('input[name="gradDate"]:checked') !== null;

    if (!isStandingSelected || !isGradDateSelected) {
      alert("Please select an option for both class standing and graduation date.");
      return false;
    }
    return true;}