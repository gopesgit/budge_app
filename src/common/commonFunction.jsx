//show date in DD/MM/YYYY format
export const formatDate = (date) => {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };
export const expenseType = [
    { label: 'Rent', value: 'Rent' },
    { label: 'Utilities', value: 'Utilities' },
    { label: 'Insurance Premiums', value: 'Insurance Premiums' },
    { label: 'Subscription services', value: 'Subscription services' },
    { label: 'Entertainment', value: 'Entertainment' },
    { label: 'Groceries', value: 'Groceries' },
    { label: 'Transportation', value: 'Transportation' },
    { label: 'Shopping', value: 'Shopping' },
    { label: 'Health', value: 'Health' },
    { label: 'Wellness', value: 'Wellness' },
    { label: 'Retirement savings', value: 'Retirement savings' },
    { label: 'Investment accounts ', value: 'Investment accounts' },
    { label: 'Credit card payments ', value: 'Credit card payments' },
    { label: 'Personal loans ', value: 'Personal loans' },
    { label: 'Travel and vacations ', value: 'Travel and vacations' },
    { label: 'Hobbies and leisure ', value: 'Hobbies and leisure' },
    { label: 'Gifts and celebrations ', value: 'Gifts and celebrations' },
    { label: 'Maintenance', value: 'Maintenance' },
    { label: 'Miscellaneous', value: 'Miscellaneous' },
    { label: 'Miscellaneous', value: 'Miscellaneous' },
    // Add more expense types as needed
];