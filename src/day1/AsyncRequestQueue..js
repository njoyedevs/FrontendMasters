class AsyncRequestQueue {
    constructor(maxConcurrentRequests = 5) {
        this.queue = [];
        this.activeRequests = 0;
        this.maxConcurrentRequests = maxConcurrentRequests;
    }

    async add(request) {
        if (this.activeRequests >= this.maxConcurrentRequests) {
            await new Promise((resolve) => this.queue.push(resolve));
        }

        return this.execute(request);
    }

    async execute(request) {
        this.activeRequests++;

        try {
            const response = await request();
            return response;
        } finally {
            this.activeRequests--;

            if (this.queue.length > 0) {
                const nextRequest = this.queue.shift();
                nextRequest();
            }
        }
    }
}

// Usage example
const asyncQueue = new AsyncRequestQueue(3);

const mockApiRequest = (id, timeout) =>
new Promise((resolve) => setTimeout(() => resolve(`Response ${id}`), timeout));

(async () => {
    for (let i = 0; i < 10; i++) {
        asyncQueue.add(() => mockApiRequest(i, 1000)).then((response) => console.log(response));
    }
})();
