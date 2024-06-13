//show date in DD/MM/YYYY format
export const formatDate = (date) => {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };
  export const expenseTypes = [
    // Fixed Expenses
    { label: 'Rent or Mortgage', value: 'RentOrMortgage' },
    { label: 'Utilities', value: 'Utilities' },
    { label: 'Insurance Premiums', value: 'InsurancePremiums' },
    { label: 'Loan Payments', value: 'LoanPayments' },
    { label: 'Subscription Services', value: 'SubscriptionServices' },

    // Variable Expenses
    { label: 'Groceries', value: 'Groceries' },
    { label: 'Dining out and Entertainment', value: 'DiningOutAndEntertainment' },
    { label: 'Transportation', value: 'Transportation' },
    { label: 'Shopping', value: 'Shopping' },
    { label: 'Health and Wellness', value: 'HealthAndWellness' },

    // Savings and Investments
    { label: 'Retirement Savings', value: 'RetirementSavings' },
    { label: 'Emergency Fund', value: 'EmergencyFund' },
    { label: 'Investment Accounts', value: 'InvestmentAccounts' },

    // Debt Repayment
    { label: 'Credit Card Payments', value: 'CreditCardPayments' },
    { label: 'Personal Loans', value: 'PersonalLoans' },
    { label: 'Other Outstanding Debts', value: 'OtherOutstandingDebts' },

    // Discretionary Spending
    { label: 'Entertainment', value: 'Entertainment' },
    { label: 'Travel and Vacations', value: 'TravelAndVacations' },
    { label: 'Hobbies and Leisure Activities', value: 'HobbiesAndLeisureActivities' },
    { label: 'Gifts and Celebrations', value: 'GiftsAndCelebrations' },

    // Irregular Expenses
    { label: 'Car Maintenance and Repairs', value: 'CarMaintenanceAndRepairs' },
    { label: 'Home Repairs and Maintenance', value: 'HomeRepairsAndMaintenance' },
    { label: 'Annual Fees', value: 'AnnualFees' },
    { label: 'Gifts for Holidays and Special Occasions', value: 'GiftsForHolidaysAndSpecialOccasions' },

    // Financial Goals
    { label: 'Saving for a Down Payment on a House', value: 'SavingForADownPaymentOnAHouse' },
    { label: 'Funding Education Expenses', value: 'FundingEducationExpenses' },
    { label: 'Starting a Business', value: 'StartingABusiness' },
    { label: 'Purchasing a Vehicle', value: 'PurchasingAVehicle' },

    // Miscellaneous
    { label: 'Miscellaneous', value: 'Miscellaneous' }
];