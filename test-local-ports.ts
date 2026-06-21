import * as net from 'net';

const checkPort = (port: number, host: string): Promise<boolean> => {
  return new Promise((resolve) => {
    const socket = new net.Socket();
    socket.setTimeout(1000);
    socket.on('connect', () => {
      socket.destroy();
      resolve(true);
    });
    socket.on('timeout', () => {
      socket.destroy();
      resolve(false);
    });
    socket.on('error', () => {
      socket.destroy();
      resolve(false);
    });
    socket.connect(port, host);
  });
};

async function run() {
  const ports = [5432, 54321, 6543];
  for (const port of ports) {
    const isOpen = await checkPort(port, '127.0.0.1');
    console.log(`Port ${port} on 127.0.0.1 is open:`, isOpen);
  }
}
run();
