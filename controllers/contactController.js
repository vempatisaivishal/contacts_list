const getAllContacts = (req, res) => {
    // Logic to get all contacts
    res.status(200).send("Get all contacts");
};

const createContact = (req, res) => {
  console.log('Request body:', req.body);
  
  const { name, email, phone } = req.body;

  // If any of the required fields are missing, return an error
  if (!name || !email || !phone) {
    return res.status(400).json({ error: 'Name, email, and phone are required' });
  }

  // Create new contact logic here
  // Assuming you have a database or in-memory data structure to store contacts
  const newContact = { name, email, phone };

  // Respond with the created contact (or store it in your database)
  res.status(201).json(newContact);
};

const getContact = (req, res) => {
    const { id } = req.params;
    // Logic to get an individual contact by ID
    res.status(200).send(`Get contact for ID: ${id}`);
};

const updateContact = (req, res) => {
    const { id } = req.params;
    // Logic to update contact by ID
    res.status(200).send(`Update contact for ID: ${id}`);
};

const deleteContact = (req, res) => {
    const { id } = req.params;
    // Logic to delete contact by ID
    res.status(200).send(`Delete contact for ID: ${id}`);
};

module.exports = {
    getAllContacts,
    createContact,
    getContact,
    updateContact,
    deleteContact
};
