"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = makeProductList;

function makeProductList({
  database
}) {
  return Object.freeze({
    add,
    findById,
    getItems,
    remove,
    replace,
    update
  });

  async function getItems({
    max = 100,
    before,
    after
  } = {}) {}

  async function add({
    contactId,
    ...contact
  }) {}

  async function findById({
    contactId
  }) {}

  async function remove({
    contactId,
    ...contact
  }) {} // todo:


  async function replace(contact) {} // todo:


  async function update(contact) {}
}
//# sourceMappingURL=product-list.js.map