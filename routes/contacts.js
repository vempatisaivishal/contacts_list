const express = require('express');
const router = express.Router();
const {
    getAllContacts,
    createContact,
    getContact,
    updateContact,
    deleteContact
} = require('../controllers/contactController');

// Common route for getting all contacts and creating new contacts
router.route('/')
    .get(getAllContacts)    // GET all contacts
    .post(createContact);   // POST to create a new contact

// Common route for getting, updating, and deleting an individual contact
router.route('/:id')
    .get(getContact)        // GET individual contact by ID
    .put(updateContact)     // PUT to update a contact by ID
    .delete(deleteContact); // DELETE a contact by ID

module.exports = router;
