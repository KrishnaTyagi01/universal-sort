import { LinkedList } from "./LinkedList";

// const numbersCollection = new NumbersCollection([1, -5, 11, 6]);
// numbersCollection.sort();

// const charactersCollection = new CharactersCollection("Xaadva");
// charactersCollection.sort();
// console.log(charactersCollection.data);

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(50);
linkedList.add(10);
linkedList.add(12);

linkedList.sort();
linkedList.print();
