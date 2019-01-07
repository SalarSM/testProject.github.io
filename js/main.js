let person = {
    name : "Salar",
    family : "ESM",
    pro: () => {
        doing();
    },
    age: () => {
        let y = new Date().getFullYear();
        return ( y - 1990);  
    }
}
function doing() {
    console.log("I'm coding!");
}

console.log(person.age());
person.pro();
/////////proxy example:

let proxyPerson = new Proxy(person, {
    get(target, property) {
        if (property == "age")
            return `age: ${target[property]()}`;
        else
            return target[property];
    },
    set(target, property, value) {
        if (property == "family") {
            return (console.log("not allowed to set family"));
        } else {
            return target[property] = value;
        }
    }
});

console.log(proxyPerson.age);
proxyPerson.family = "Mehr";
console.log(proxyPerson.family);
proxyPerson.name = "Nima";
console.log(proxyPerson.name);