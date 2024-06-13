const users = [
  {
    email: "kent1988hk@gmail.com",
    password: "23456996",
  },
  {
    email: "kent.law.product01@gmail.com",
    password: "23456996",
  },
  {
    email: "kent.law.product@gmail.com",
    password: "23456996",
  },
];

export const getUserByEmail = (email) => {
  const found = users.find((user) => user.email === email);
  return found;
};
