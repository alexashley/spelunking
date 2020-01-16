import Hapi from '@hapi/hapi';
import Chance from 'chance';

const chance = new Chance();

const healthz = () => ({
  path: '/healthz',
  method: 'GET',
  handler: () => 'ok'
});

const createSignalHandler = (signal, server) => () => {
    let exitCode = 0;

    console.log(`Received signal ${signal}, stopping server`);

    try {
        server.stop();
        console.log('Server stopped successfully');
    } catch(error) {
        console.error('Error stopping server', error);
        exitCode = 1;
    }

    process.exit(exitCode);
};

const makeNoise = () => {
    const log = `${chance.first()} ${chance.last()} just ${chance.bool() ? 'logged in': 'logged out'}`;

    console.log(log);
};

(async () => {
    const server = new Hapi.Server({
        host: '0.0.0.0',
        port: 5555
    });

    server.route(healthz());

    ['SIGINT', 'SIGTERM'].forEach((signal) => {
        process.on(signal, createSignalHandler(signal, server));
    });

    try {
        await server.start();

        setInterval(makeNoise, 1000 * 60)

        console.log('Server started', server.info)
    } catch(error) {
        console.error('Failed to start server', error);
        process.exit(1);
    }
})();