export function formatPhoneNumber(phoneNumber: string): string {
  // Remove non-numeric characters except for the "+" sign
  const cleaned = phoneNumber.replace(/[^\d+]/g, '');
  
  // Match the phone number to the pattern and format it
  const match = cleaned.match(/^(\+?\d{1,2})(\d{3})(\d{3})(\d{4})$/);
  
  if (match) {
    return `${match[1]} (${match[2]}) ${match[3]}-${match[4]}`;
  }
  
  // If the phone number doesn't match the expected format, return it unchanged
  return phoneNumber;
}

