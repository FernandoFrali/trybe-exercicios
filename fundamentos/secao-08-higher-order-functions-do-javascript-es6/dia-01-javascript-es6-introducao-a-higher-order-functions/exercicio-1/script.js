const newEmployees = (names) => {
  const employees = {
    id1: names("Pedro Guerra"),
    id2: names("Luiza Drumond"),
    id3: names("Carla Paiva"),
  };
  return employees;
};

const emailGenerator = (name) => {
  const email = name.toLowerCase().split(" ").join("_");
  return { name, email: `${email}@trybe.com` };
};

console.log(newEmployees(emailGenerator));
