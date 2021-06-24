const configData = {
  selected: "listFruits",
};

const methods = {
  methods: [
    {
      pText: "List of fruits",
      divClass: "list-fruits selected-method",
      btnClass: "btn-get-fruits",
      method: "GET",
    },
    {
      pText: "Single fruit",
      divClass: "single-fruit",
      btnClass: "btn-get-fruit",
      method: "GET",
    },
    {
      pText: "Single fruit not found",
      divClass: "single-fruit-nf",
      btnClass: "btn-get-fruit-nf",
      method: "GET",
    },
    {
      pText: "Create fruit",
      divClass: "post-fruit",
      btnClass: "btn-post-fruit",
      method: "POST",
    },
    {
      pText: "Update fruit",
      divClass: "put-fruit",
      btnClass: "btn-put-fruit",
      method: "PUT",
    },
    {
      pText: "Partially update fruit",
      divClass: "patch-fruit",
      btnClass: "btn-patch-fruit",
      method: "PATCH",
    },
    {
      pText: "Delete fruit",
      divClass: "delete-fruit",
      btnClass: "btn-delete-fruit",
      method: "DELETE",
    },
  ],
};

const postReqExample = {
  genus: "Prunus",
  name: "Plum",
  family: "Rosaceae",
  order: "Rosales",
};

module.exports = { configData, methods };
