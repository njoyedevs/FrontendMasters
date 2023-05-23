import { BinarySearchTree } from "@code/BinarySearchTree"

test("binary search tree", function() {

    const bst = new BinarySearchTree();
    bst.insert(1);
    bst.insert(3);
    bst.insert(4);
    bst.insert(69);
    bst.insert(71);
    bst.insert(81);
    bst.insert(90);
    bst.insert(99);
    bst.insert(420);
    bst.insert(1337);
    bst.insert(69420);

    // Test find
    expect(bst.find(69)).toEqual(true);
    expect(bst.find(1336)).toEqual(false);
    expect(bst.find(69420)).toEqual(true);
    expect(bst.find(69421)).toEqual(false);
    expect(bst.find(1)).toEqual(true);
    expect(bst.find(0)).toEqual(false);

    // Test delete
    bst.delete(69);
    expect(bst.find(69)).toEqual(false);

    // Test insert
    bst.insert(2000);
    expect(bst.find(2000)).toEqual(true);

    bst.delete(1);
    expect(bst.find(1)).toEqual(false);
    bst.delete(69420);
    expect(bst.find(69420)).toEqual(false);
});


