const re =/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
// re means regular expressrons
// found at emailregix.com
export default emails => {
  const invalidEmails = emails
    .split(",")
    .map(email => email.trim())
    .filter(email => re.test(email) === false)
  // === false is to check if the emails are bad. if so keep them

  if (invalidEmails.length){
    return `These emails are invalid: ${invalidEmails}`;
  }
  return null;
};
