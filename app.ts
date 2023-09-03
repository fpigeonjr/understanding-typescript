const person: {
  name: string
  age: number
  hobbies: string[]
  role: [number, string] //tuple
} = {
  name: "Frank",
  age: 43,
  hobbies: ["bowling", "swimming", "running", "hiking"],
  role: [2, "author"]
}

person.role.push("admin") //not caught by TS
person.role[1] = 10 //not caught by TS

let favActivities: string[]
favActivities = ["bowling", "swimming", "running", "hiking"]

console.log({ person })

for (const hobby of person.hobbies) {
  console.log(`${hobby.toUpperCase()} is a hobby of ${person.name}`)
}
