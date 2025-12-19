import { reactive, ref, computed } from "vue";
import DB from "../services/DB";

const contacts = reactive([]);
const formData = reactive({
  firstname: "",
  lastname: "",
  email: "",
});
const editingId = ref(null);

const contactCount = computed(() => contacts.length);
const isCompleted = computed(() => {
  if (formData.firstname && formData.lastname && formData.email) {
    return true;
  } else {
    return false;
  }
});

const init = async (url) => {
  DB.setApiUrl(url);
  contacts.splice(0, contacts.length, ...(await DB.findAll()));
};
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
const startEditing = (id) => {
  editingId.value = id;
};
const updateContact = async (newContact) => {
  await DB.updateOne(newContact);
  console.table(contacts);
  editingId.value = null;
};
const deleteContact = async (id) => {
  await DB.deleteOneById(id);
  const index = contacts.findIndex((c) => c.id === id);
  if (index != -1) {
    contacts.splice(index, 1);
  }
};

//Utilities
const resetInputs = () => {
  formData.firstname = "";
  formData.lastname = "";
  formData.email = "";
};

export const store = reactive({
  init,
  contacts,
  formData,
  editingId,
  contactCount,
  createContact,
  startEditing,
  updateContact,
  deleteContact,
});
