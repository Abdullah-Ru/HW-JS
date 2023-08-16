let names = ["علي", "سماح", "خالد", "فهد", "محمد"];
console.log(names.slice(2,3)); 
// or
console.log(names[2]);
////////////////////////////////////////////////////
names.unshift("عبدالله");
names.push("ريان");
console.log(names);
names.shift();
names.pop();
console.log(names);
