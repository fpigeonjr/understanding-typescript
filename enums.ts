enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR
}

const person = {
  name: "Frank",
  age: 43,
  hobbies: ["bowling", "swimming", "running", "hiking"],
  role: Role.ADMIN
}

if (person.role === Role.ADMIN) {
  console.log(`${person.name} is an admin`)
}
