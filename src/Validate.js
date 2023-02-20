export const validate = (name, value) => {
  switch (name) {
    case "firstname":
      if (!value) {
        return "Please enter a firstname";
      }
      break;
    case "lastname":
      if (!value) {
        return "Please enter a lastname";
      }
      break;
    case "email":
      if (!value) {
        return "Please enter an email";
      } else if (!value.match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/)) {
        return "Please enter a valid email";
      }
    default:
      return "";
  }
};
