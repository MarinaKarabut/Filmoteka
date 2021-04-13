const watched = [];
const queue = [];

const localWatched = localStorage.getItem("watched");
if (localWatched) {
    watched.push(...JSON.parse(localWatched));
}

const localQueue = localStorage.getItem("queue");
if (localQueue) {
    queue.push(...JSON.parse(localQueue));
}

export { watched, queue };