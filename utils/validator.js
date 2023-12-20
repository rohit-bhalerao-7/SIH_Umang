const { validationResult } = require('express-validator');

// Validate the data before insertion
const errors = validationResult(req);
if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
}

// Insert data if validation passes
const createdUsers = await User.bulkCreate(mockUsers);
res.status(201).json({ message: "Mock users added successfully", createdUsers });
