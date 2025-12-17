import { reactive, ref, computed } from "vue";
import DB from "../services/DB";

const contacts = reactive([]);
const formData = reactive({
  firstname: "",
  lastname: "",
  email: "",
});
const isCompleted = computed(() => {
  if (formData.firstname && formData.lastname && formData.email) {
    return true;
  } else {
    return false;
  }
});

const createContact = async () => {
  if (isCompleted.value) {
    const newContact = await DB.create(formData);
    contacts.push(newContact);
    resetInputs();
    console.table(contacts);
  } else {
    alert("Veuillez renseigner tous les champs");
    resetInputs();
  }
};
const resetInputs = () => {
  formData.firstname = "";
  formData.lastname = "";
  formData.email = "";
};
const init = async (url) => {
  DB.setApiUrl(url);
  contacts.splice(0, contacts.length, ...(await DB.findAll()));
};

export const store = reactive({
  init,
  contacts,
  formData,
  createContact,
});
