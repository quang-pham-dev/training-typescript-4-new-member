function foreverTask(taskName: string): never {
  while (true) {
    console.log(`Doing ${taskName} over and over again ...`);
    // break; => error // Function returning never must have unreachable end point
  }
}

function error(message: string): never {
  throw new Error(message);
}
