import { Sorter } from "./sorter";

export class NumbersCollection extends Sorter {
  constructor(public data: number[]) {
    super();
  }

  get length(): number {
    return this.data.length;
  }
  compare(leftIndex: number, rightIndex: number): boolean {
    return this.data[leftIndex] > this.data[rightIndex];
  }

  swap(leftIndex: number, rightIndex: number): void {
    let temp = this.data[leftIndex];
    this.data[leftIndex] = this.data[rightIndex];
    this.data[rightIndex] = temp;
  }
}

const collection = new NumbersCollection([1, 3, 2, 11, 0]);
