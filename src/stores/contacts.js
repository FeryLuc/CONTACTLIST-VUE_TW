import { reactive, ref, computed } from "vue";
import DB from "../services/DB";

const contacts = reactive([]);
const formData = reactive({
  firstname: "",
  lastname: "",
  email: "",
});
const editingId = ref(null);
const searchValue = ref("");
const sortSettings = reactive({
  key: null,
  isAsc: true,
});

const contactCount = computed(() => contacts.length);
const isCompleted = computed(() => {
  if (formData.firstname && formData.lastname && formData.email) {
    return true;
  } else {
    return false;
  }
});
const filteredContacts = computed(() => {
  let filteredContacts = contacts;
  if (searchValue.value) {
    const filter = searchValue.value.toLowerCase();
    filteredContacts = filteredContacts.filter(
      (c) =>
        c.firstname.toLowerCase().includes(filter) ||
        c.lastname.toLowerCase().includes(filter) ||
        c.email.toLowerCase().includes(filter)
    );
  }

  if (sortSettings.key) {
    filteredContacts = filteredContacts.sort((a, b) => {
      let valA = a[sortSettings.key].toLowerCase();
      let valB = b[sortSettings.key].toLowerCase();

      if (valA < valB) return sortSettings.isAsc ? -1 : 1;
      if (valA > valB) return sortSettings.isAsc ? 1 : -1;
      return 0;
    });
  }

  return filteredContacts;
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
const toggleSort = (key) => {
  key = key.toLowerCase();
  if (sortSettings.key === key) {
    sortSettings.isAsc = !sortSettings.isAsc;
  } else {
    sortSettings.key = key;
    sortSettings.isAsc = true;
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
  formData,
  editingId,
  contactCount,
  searchValue,
  filteredContacts,
  createContact,
  startEditing,
  updateContact,
  deleteContact,
  toggleSort,
});
