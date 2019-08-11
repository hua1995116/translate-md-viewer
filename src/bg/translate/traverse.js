function traverse(tree, call) {

  function treeLoop(tree) {
    call.enter && call.enter(tree);
    if(tree.children) {
      tree.children.forEach(element => {
        treeLoop(element);
      });
    }
  }

  treeLoop(tree);
}

module.exports = traverse;